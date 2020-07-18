import {parseStringPromise} from "xml2js";
import axios from "axios";
import {Sesion, Sesiones} from "./diputados.model";
import {writeFile} from "fs";

interface DeputiesSessionRaw {
  Id: string[]
  Numero: string[]
  FechaInicio: string[]
  FechaTermino: string[]
  Tipo: {
    "_": string
    "$": {
      Valor: string
    }
  }[]
  Estado: {
    "_": string
    "$": {
      Valor: string
    }
  }[]
}

interface AssistanceRaw {
  TipoAsistencia: {
    _: string
    $: {
      Valor: string
    }
  }[]
  Diputado: {
    Id: string[]
    Nombre: string[]
    ApellidoPaterno: string[]
    ApellidoMaterno: string[]
  }[]
  Justificacion: {
    $: {
      Valor: string
    }
    Nombre: string[]
    RebajaAsistencia: string[]
    RebajaQuorum: string[]
  }[]
}

async function main() {
  const from = 1990, to = 2020;
  const years = Array.from({length: (to - from + 1)}, (v, k) => k + from)

  const deputiesSessions: Sesiones = {
    Diputados: {},
    Sesiones: {}
  };

  for (const year of years) {
    const response1 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSSala.asmx/retornarSesionesXAnno?prmAnno=${year}`);
    const collection1 = await parseStringPromise(response1.data);
    const sessionsRaw: DeputiesSessionRaw[] = collection1['SesionesSalaColeccion']['Sesion'];
    for (const sessionRaw of sessionsRaw) {
      const sessionId = sessionRaw.Id[0];
      const deputySession: Sesion = {
        Numero: +sessionRaw.Numero[0],
        Inicio: sessionRaw.FechaInicio[0],
        Termino: sessionRaw.FechaTermino[0],
        Tipo: {
          Id: sessionRaw.Tipo[0].$.Valor,
          Valor: sessionRaw.Tipo[0]._
        },
        Estado: {
          Id: sessionRaw.Estado[0].$.Valor,
          Valor: sessionRaw.Estado[0]._
        },
        Inasistencia: {}
      };

      const response2 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSSala.asmx/retornarSesionAsistencia?prmSesionId=${sessionId}`);
      const collection2 = await parseStringPromise(response2.data);
      const assistancesRaw: AssistanceRaw[] = collection2['SesionSala']['ListadoAsistencia'][0]['Asistencia'] ? collection2['SesionSala']['ListadoAsistencia'][0]['Asistencia'] : [];

      if(assistancesRaw.length > 0) {
        for (const assRaw of assistancesRaw) {
          const deputyId = assRaw.Diputado[0].Id[0];
          if (deputiesSessions.Diputados[deputyId] === undefined) {
            const name = `${assRaw.Diputado[0].Nombre[0]} ${assRaw.Diputado[0].ApellidoPaterno[0]} ${assRaw.Diputado[0].ApellidoMaterno[0]}`.trim();
            deputiesSessions.Diputados[deputyId] = name;
          }
          if(assRaw.TipoAsistencia[0].$.Valor !== "1"){
            deputySession.Inasistencia[deputyId] = {
              TipoAsistencia: {
                Id: assRaw.TipoAsistencia[0].$.Valor,
                Valor: assRaw.TipoAsistencia[0]._,
              }
            };
            if(assRaw.Justificacion){
              deputySession.Inasistencia[deputyId].Justificacion = {
                Id: assRaw.Justificacion[0].$.Valor,
                Valor: assRaw.Justificacion[0].Nombre[0],
                RebajaAsistencia: assRaw.Justificacion[0].RebajaAsistencia[0].toLowerCase() === 'true',
                RebajaQuorum: assRaw.Justificacion[0].RebajaQuorum[0].toLowerCase() === 'true'
              }
            }
          }
        }
      }

      deputiesSessions.Sesiones[sessionId] = deputySession;
    }
  }

  writeFile("./data/diputados.inasistencias.json", JSON.stringify(deputiesSessions), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

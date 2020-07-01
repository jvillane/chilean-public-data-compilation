import {parseStringPromise} from "xml2js";
import axios from "axios";
import {DeputySession} from "./deputies.model";
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
    ApellidoPaterno: string[]
    ApellidoMaterno: string[]
  }[]
}

async function main() {
  const from = 1990, to = 2020;
  const years = Array.from({length: (to - from + 1)}, (v, k) => k + from)

  const deputiesSessions: DeputySession[] = [];

  for (const year of years) {
    const response1 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSSala.asmx/retornarSesionesXAnno?prmAnno=${year}`);
    const collection1 = await parseStringPromise(response1.data);
    const sessionsRaw: DeputiesSessionRaw[] = collection1['SesionesSalaColeccion']['Sesion'];
    for (const sessionRaw of sessionsRaw) {
      const deputySession: DeputySession = {
        Id: +sessionRaw.Id[0],
        Numero: +sessionRaw.Numero[0],
        Inicio: sessionRaw.FechaInicio[0],
        Termino: sessionRaw.FechaTermino[0],
        Tipo: {
          Id: +sessionRaw.Tipo[0].$.Valor,
          Nombre: sessionRaw.Tipo[0]._
        },
        Estado: {
          Id: +sessionRaw.Estado[0].$.Valor,
          Nombre: sessionRaw.Estado[0]._
        }
      };
      console.log(deputySession);
      //const response2 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSSala.asmx/retornarSesionAsistencia?prmSesionId=${deputySession.Id}`);
      const response2 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSSala.asmx/retornarSesionAsistencia?prmSesionId=${3711}`);
      const collection2 = await parseStringPromise(response2.data);

      const assistancesRaw: AssistanceRaw[] = collection2['SesionSala']['ListadoAsistencia'][0]['Asistencia'];
      console.log(assistancesRaw[3]);
      console.log(assistancesRaw[3].TipoAsistencia);
      console.log(assistancesRaw[3].Diputado);

      deputiesSessions.push(deputySession);
      break;
    }
    break;
  }

  writeFile("./data/deputies.sessions.json", JSON.stringify(deputiesSessions), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

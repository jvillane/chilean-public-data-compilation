import {parseStringPromise} from "xml2js";
import axios from "axios";
import {Votacion, Votaciones} from "./diputados.model";
import {writeFile} from "fs";

interface DeputiesVotesRaw {
  Id: string[]
  Descripcion: string[]
  Fecha: string[]
  TotalSi: string[]
  TotalNo: string[]
  TotalAbstencion: string[]
  TotalDispensado: string[]
  Quorum: {
    "_": string
    "$": {
      Valor: string
    }
  }[]
  Resultado: {
    "_": string
    "$": {
      Valor: string
    }
  }[]
  Tipo: {
    "_": string
    "$": {
      Valor: string
    }
  }[]
}

interface VoteRaw {
  Diputado: {
    Id: string[]
    Nombre: string[]
    ApellidoPaterno: string[]
    ApellidoMaterno: string[]
  }[]
  OpcionVoto: {
    $: {
      Valor: string
    }
    _: string
  }[]
}

async function main() {
  const from = 2015, to = 2019;
  const years = Array.from({length: (to - from + 1)}, (v, k) => k + from)

  for (const year of years) {
    console.log('start', year);
    const deputiesVotings: Votaciones = {
      Diputados: {},
      Votaciones: {}
    };

    try {
      const response1 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSLegislativo.asmx/retornarVotacionesXAnno?prmAnno=${year}`);
      const collection1 = await parseStringPromise(response1.data);
      const votingsRaw: DeputiesVotesRaw[] = collection1['VotacionesColeccion']['Votacion'] ? collection1['VotacionesColeccion']['Votacion'] : [];
      if (votingsRaw.length === 0) {
        continue;
      }
      for (const voteRaw of votingsRaw) {
        const votingId = voteRaw.Id[0];
        const deputyVoting: Votacion = {
          Descripcion: voteRaw.Descripcion[0],
          Fecha: voteRaw.Fecha[0],
          Total: {
            Si: +voteRaw.TotalSi[0],
            No: +voteRaw.TotalNo[0],
            Abstencion: +voteRaw.TotalAbstencion[0],
            Dispensado: +voteRaw.TotalDispensado[0]
          },
          Quorum: {
            Id: +voteRaw.Quorum[0].$.Valor,
            Valor: voteRaw.Quorum[0]._,
          },
          Resultado: voteRaw.Resultado ? {
            Id: +voteRaw.Resultado[0].$.Valor,
            Valor: voteRaw.Resultado[0]._
          } : undefined,
          Tipo: {
            Id: +voteRaw.Tipo[0].$.Valor,
            Valor: voteRaw.Tipo[0]._
          },
          Votos: {}
        };

        const response2 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSLegislativo.asmx/retornarVotacionDetalle?prmVotacionId=${votingId}`);
        const collection2 = await parseStringPromise(response2.data);
        const votingRaw: VoteRaw[] = collection2['Votacion']['Votos'] && collection2['Votacion']['Votos'][0]['Voto'] ? collection2['Votacion']['Votos'][0]['Voto'] : [];

        for (const voteRaw of votingRaw) {
          const deputyId = voteRaw.Diputado[0].Id[0];
          if (deputiesVotings.Diputados[deputyId] === undefined) {
            const name = `${voteRaw.Diputado[0].Nombre[0]} ${voteRaw.Diputado[0].ApellidoPaterno[0]} ${voteRaw.Diputado[0].ApellidoMaterno[0]}`.trim();
            deputiesVotings.Diputados[deputyId] = name;
          }
          deputyVoting.Votos[deputyId] = {
            Id: voteRaw.OpcionVoto[0].$.Valor,
            Valor: voteRaw.OpcionVoto[0]._
          };
        }
        deputiesVotings.Votaciones[votingId] = deputyVoting;
      }
    } catch (e) {
      console.log(e);
      break;
    }


    writeFile(`./data/diputados.votacion.${year}.json`, JSON.stringify(deputiesVotings), function (err) {
      if (err) {
        console.log(err);
      }
    });
    console.log('end', year);
  }
}

main();

import {parseStringPromise} from "xml2js";
import axios from "axios";
import {Afiliacion, Diputado, Diputados} from "./diputados.model";
import {createWriteStream, writeFile} from "fs";
import * as http from "https";
import {findPublicFigureIdByDeputyId} from "./figura_publica.listado";

interface PoliticalPartyRaw {
  Id: string[]
  Nombre: string[]
  Alias: string[]
}

interface AffiliationRaw {
  FechaInicio: string[]
  FechaTermino: string[]
  Partido: PoliticalPartyRaw[]
}

interface DeputyRaw {
  Id: string[]
  Nombre: string[]
  Nombre2: string[]
  ApellidoPaterno: string[]
  ApellidoMaterno: string[]
  FechaNacimiento: string[]
  Sexo: any[]
  Militancias: { Militancia: AffiliationRaw[] } []
}

async function main() {
  const deputies: Diputados = {};

  const response = await axios.get('http://opendata.camara.cl/camaradiputados/WServices/WSDiputado.asmx/retornarDiputados?');
  const deputyCollection = await parseStringPromise(response.data);
  const deputiesRaw: DeputyRaw[] = deputyCollection['DiputadosColeccion']['Diputado'];

  for (const deputyRaw of deputiesRaw) {
    const affiliations: Afiliacion[] = [];
    for (const affiliationRaw of deputyRaw.Militancias[0].Militancia) {
      if (affiliationRaw.Partido) {
        const affiliation: Afiliacion = {
          Inicio: affiliationRaw.FechaInicio[0],
          Termino: affiliationRaw.FechaTermino[0],
          Id: affiliationRaw.Partido[0].Id[0],
          Nombre: affiliationRaw.Partido[0].Nombre[0],
          Alias: affiliationRaw.Partido[0].Alias[0],
        };
        affiliations.push(affiliation);
      }
    }
    const deputy: Diputado = {
      Nombres: deputyRaw.Nombre[0] + (deputyRaw.Nombre2[0].length > 0 ? ' ' + deputyRaw.Nombre2[0] : ''),
      ApellidoPaterno: deputyRaw.ApellidoPaterno[0],
      ApellidoMaterno: deputyRaw.ApellidoMaterno[0],
      Nacimiento: deputyRaw.FechaNacimiento ? deputyRaw.FechaNacimiento[0].split('T')[0] : undefined,
      Genero: deputyRaw.Sexo[0]['_'],
      Militancia: affiliations,
      Id: findPublicFigureIdByDeputyId(+deputyRaw.Id[0])
    }
    deputies[deputyRaw.Id[0]] = deputy;
  }

  writeFile("./data/diputados.listado.json", JSON.stringify(deputies), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

export const downloadAvatar = (id: string, deputyId: number): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    http.get(`https://www.camara.cl/img.aspx?prmID=GRCL${deputyId}`, response => {
      if (response.headers["content-length"] !== undefined && +response.headers["content-length"] !== 0) {
        const file = createWriteStream(`img/avatar/${id}.jpeg`);
        response.pipe(file);
        file.on('finish', function () {
          file.close();
          resolve(`${id}.jpeg`);
        });
        file.on('error', function (err) {
          file.close();
          console.log('error', deputyId, err);
          reject(err);
        });
      } else {
        resolve(undefined);
      }
    });
  })
}

main();


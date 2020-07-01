import {parseStringPromise} from "xml2js";
import axios from "axios";
import {Affiliation, Deputy} from "./deputies.model";
import {writeFile} from "fs";

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
  const deputies: Deputy[] = [];

  const response = await axios.get('http://opendata.camara.cl/camaradiputados/WServices/WSDiputado.asmx/retornarDiputados?');
  const deputyCollection = await parseStringPromise(response.data);
  const deputiesRaw: DeputyRaw[] = deputyCollection['DiputadosColeccion']['Diputado'];
  for (const deputyRaw of deputiesRaw) {
    const affiliations: Affiliation[] = [];
    for (const affiliationRaw of deputyRaw.Militancias[0].Militancia) {
      if(affiliationRaw.Partido){
        const affiliation: Affiliation = {
          Inicio: affiliationRaw.FechaInicio[0],
          Termino: affiliationRaw.FechaTermino[0],
          Id: affiliationRaw.Partido[0].Id[0],
          Nombre: affiliationRaw.Partido[0].Nombre[0],
          Alias: affiliationRaw.Partido[0].Alias[0],
        };
        affiliations.push(affiliation);
      }
    }
    const deputy: Deputy = {
      Id: deputyRaw.Id[0],
      Nombres: deputyRaw.Nombre[0] + (deputyRaw.Nombre2[0].length > 0 ? ' ' + deputyRaw.Nombre2[0] : ''),
      ApellidoPaterno: deputyRaw.ApellidoPaterno[0],
      ApellidoMaterno: deputyRaw.ApellidoMaterno[0],
      Nacimiento: deputyRaw.FechaNacimiento ? deputyRaw.FechaNacimiento[0].split('T')[0] : undefined,
      Genero: deputyRaw.Sexo[0]['_'],
      Militancia: affiliations
    }
    console.log({
      Id: "",
      Name: `${deputy.Nombres} ${deputy.ApellidoPaterno} ${deputy.ApellidoMaterno}`,
      Birthday: "",
      DeputyId: +deputy.Id
    }, ',');
    deputies.push(deputy)
  }

  writeFile("./data/deputies.json", JSON.stringify(deputies), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

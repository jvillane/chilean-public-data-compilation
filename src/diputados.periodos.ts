import {parseStringPromise} from "xml2js";
import axios from "axios";
import {Periodos} from "./diputados.model";
import {writeFile} from "fs";

interface LapsesRaw {
  Id: string[]
  Nombre: string[]
  FechaInicio: string[]
  FechaTermino: string[]
}

async function main() {
  const lapses: Periodos = {};

  const response = await axios.get('http://opendata.camara.cl/camaradiputados/WServices/WSLegislativo.asmx/retornarPeriodosLegislativos?');
  const lapseCollection = await parseStringPromise(response.data);
  const lapsesRaw: LapsesRaw[] = lapseCollection['PeriodosLegislativosColeccion']['PeriodoLegislativo'];

  for (const lapseRaw of lapsesRaw) {
    lapses[lapseRaw.Id[0]] = {
      Nombre: lapseRaw.Nombre[0],
      Inicio: lapseRaw.FechaInicio[0],
      Termino: lapseRaw.FechaTermino[0],
    }
  }

  writeFile("./data/diputados.periodos.json", JSON.stringify(lapses), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();


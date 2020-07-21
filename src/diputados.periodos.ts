import {parseStringPromise} from "xml2js";
import axios from "axios";
import {DiputadoPeriodos, PeriodosDiputado} from "./diputados.model";
import {writeFile} from "fs";

interface LapsesRaw {
  Id: string[]
  Nombre: string[]
  FechaInicio: string[]
  FechaTermino: string[]
}

interface PeriodDeputyRaw {
  Id: string[]
}

interface PeriodRaw {
  Diputado: PeriodDeputyRaw[]
}

async function main() {
  const periodosDiputados: PeriodosDiputado = {};
  const diputadosPeriodos: DiputadoPeriodos = {};

  const response1 = await axios.get('http://opendata.camara.cl/camaradiputados/WServices/WSLegislativo.asmx/retornarPeriodosLegislativos?');
  const lapseCollection = await parseStringPromise(response1.data);
  const lapsesRaw: LapsesRaw[] = lapseCollection['PeriodosLegislativosColeccion']['PeriodoLegislativo'];

  for (const lapseRaw of lapsesRaw) {
    const periodo = {
      Id: lapseRaw.Id[0],
      Nombre: lapseRaw.Nombre[0],
      Inicio: lapseRaw.FechaInicio[0],
      Termino: lapseRaw.FechaTermino[0],
    }
    periodosDiputados[periodo.Id] = periodo;

    try {
      const response2 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSDiputado.asmx/retornarDiputadosXPeriodo?prmPeriodoId=${periodo.Id}`);
      const lapseCollection = await parseStringPromise(response2.data);
      const deputiesPeriods: PeriodRaw[] = lapseCollection['DiputadosPeriodoColeccion']['DiputadoPeriodo'];

      for (const deputy of deputiesPeriods) {
        const diputadoId = deputy.Diputado[0].Id[0];
        if (diputadosPeriodos[diputadoId] === undefined) {
          diputadosPeriodos[diputadoId] = [];
        }
        diputadosPeriodos[diputadoId].push(periodo);
      }
    } catch (err) {
      //console.error(err);
    }
  }


  writeFile("./data/periodos.diputados.json", JSON.stringify(periodosDiputados), function (err) {
    if (err) {
      console.log(err);
    }
  });

  writeFile("./data/diputados.periodos.json", JSON.stringify(diputadosPeriodos), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();


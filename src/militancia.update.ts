import {readFile, utils} from "xlsx";
import {Militancia} from "./figura_publica.model";
import {writeFile} from "fs";
import {publicFigureList} from "./figura_publica.listado";
import * as senadoresRaw from "../data/senadores.listado.json";
import {Senador} from "./senadores.model";
import {politicalParties} from "./partidos.listado";
import moment from "moment";

interface Row {
  variable: string
  valor: number | string
  MilCant: number
}

function main() {
  const workbook = readFile('./Diputados.xlsx');
  const data: Row[] = utils.sheet_to_json(workbook.Sheets['deputy_proc'])

  let deputyId = "";
  let militancia: Militancia = {
    PartidoId: ""
  }
  const deputyValues: { [deputyId: string]: Militancia[] } = {};

  let i = 0;
  for (const row of data) {
    i++;
    if (row.variable === "Id") {
      deputyId = String(row.valor);
    } else if (row.variable === "FechaInicio" && row.valor !== undefined) {
      militancia.Desde = String(row.valor);
    } else if (row.variable === "FechaTermino" && row.valor !== undefined) {
      militancia.Hasta = String(row.valor);
    } else if (row.variable === "PartidoAlias") {
      militancia.PartidoId = String(row.valor);
      if (militancia.PartidoId === "FRVS") {
        militancia.PartidoId = "FREVS";
      } else if (militancia.PartidoId === "PR") {
        militancia.PartidoId = "PRC";
      } else if (militancia.PartidoId === "EVOP") {
        militancia.PartidoId = "EVOPOLI";
      } else if (militancia.PartidoId === "PP") {
        militancia.PartidoId = "PPC";
      }
      if (politicalParties[militancia.PartidoId] === undefined) {
        console.error(i, "el partido no existe", militancia.PartidoId);
      }
      if (deputyValues[deputyId] === undefined) {
        deputyValues[deputyId] = [];
      }
      deputyValues[deputyId].push(militancia);
      militancia = {
        PartidoId: ""
      }
    }
  }

  const pfs = publicFigureList;
  const senadores = (senadoresRaw as unknown as { default: { [key: string]: Senador } }).default;

  for (const pf of pfs) {
    pf.Militancias = undefined;
    if (pf.DiputadoId) {
      if (Array.isArray(pf.DiputadoId)) {
        for (const dId of pf.DiputadoId) {
          pf.Militancias = deputyValues[dId];
        }
      } else {
        if (deputyValues[pf.DiputadoId]) {
          pf.Militancias = deputyValues[pf.DiputadoId];
        }
      }
    }
    if (pf.SenadorId && senadores[String(pf.SenadorId)]) {
      pf.Militancias = [{
        PartidoId: senadores[String(pf.SenadorId)].PartidoId
      }]
      if (politicalParties[senadores[String(pf.SenadorId)].PartidoId] === undefined) {
        console.error("el partido no existe (2)", militancia.PartidoId);
      }
    }

    if (pf.Militancias) {
      const partidos = new Set<string>();
      let fechaMenor: string | undefined = undefined;
      for (const militancia of pf.Militancias) {
        partidos.add(militancia.PartidoId);
        if(militancia.Desde && fechaMenor === undefined){
          fechaMenor = militancia.Desde;
        } else if(militancia.Desde) {
          if(moment(fechaMenor).isAfter(moment(militancia.Desde))) {
            fechaMenor = militancia.Desde;
          }
        }
      }
      if(partidos.size === 1) {
        pf.Militancias = [{
          PartidoId: partidos.values().next().value,
          Desde: fechaMenor
        }]
      }
    }
  }

  writeFile("./data/militancia.update.json", JSON.stringify(pfs), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

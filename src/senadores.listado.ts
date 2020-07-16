import {writeFile} from "fs";
import {Comuna} from "./regiones.model";
import axios from "axios";
import {parseStringPromise} from "xml2js";
import {Distrito, Distritos} from "./distritos.model";
import {Senador, Senadores} from "./senadores.model";
import {Partido} from "./partidos.model";
import {findPartyByAlias} from "./partidos.listado";

interface SenadorRaw {
  PARLID: string[]
  PARLNOMBRE: string[]
  PARLAPELLIDOPATERNO: string[]
  PARLAPELLIDOMATERNO: string[]
  REGION: string[]
  CIRCUNSCRIPCION: string[]
  PARTIDO: string[]
  FONO: string[]
  EMAIL: string[]
  CURRICULUM: string[]
}

async function main() {
  const senadores: Senadores = {};
  const response = await axios.get('https://www.senado.cl/wspublico/senadores_vigentes.php');
  const senadoresCollection = await parseStringPromise(response.data);
  const senadoresRaw: SenadorRaw[] = senadoresCollection['senadores']['senador'];
  for (const senadorRaw of senadoresRaw) {
    const alias = senadorRaw.PARTIDO[0];
    const party = findPartyByAlias(alias);
    if(party === undefined) {
      console.error('No se encontró el partido para el alias', alias)
      break;
    }

    const senador: Senador = {
      Id: +senadorRaw.PARLID[0],
      Nombres: senadorRaw.PARLNOMBRE[0],
      ApellidoPaterno: senadorRaw.PARLAPELLIDOPATERNO[0],
      ApellidoMaterno: senadorRaw.PARLAPELLIDOMATERNO[0],
      Region: senadorRaw.REGION[0].trim(),
      Circunscripcion: +senadorRaw.CIRCUNSCRIPCION[0],
      PartidoId: party.Sigla,
      FiguraPublicaId: ""
    };
    senadores[senador.Id] = senador;
  }

  writeFile("./data/senadores.listado.json", JSON.stringify(senadores), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();
import {writeFile} from "fs";
import {Comuna} from "./regiones.model";
import axios from "axios";
import {parseStringPromise} from "xml2js";
import {Distrito, Distritos} from "./distritos.model";

interface ComunaRaw {
  Numero: string[]
  Nombre: string[]
}

interface DistritoRaw {
  Numero: string[]
  Nombre: string[]
  Comunas: { Comuna: ComunaRaw[] }[]
}

async function main() {
  const distritos: Distritos = {};
  const response = await axios.get('http://opendata.camara.cl/camaradiputados/WServices/WSComun.asmx/retornarDistritos?');
  const distritosCollection = await parseStringPromise(response.data);
  const distritosRaw: DistritoRaw[] = distritosCollection['DistritosColeccion']['Distrito'];
  for (const distritoRaw of distritosRaw) {
    const distrito: Distrito = {
      Id: +distritoRaw.Numero[0],
      Comunas: {}
    };
    for (const comunaRaw of distritoRaw.Comunas[0].Comuna) {
      const comuna: Comuna = {
        Id: +comunaRaw.Numero[0],
        Nombre: comunaRaw.Nombre[0],
      }
      distrito.Comunas[comuna.Id] = comuna;
    }
    distritos[distrito.Id] = distrito;
  }

  writeFile("./data/distritos.listado.json", JSON.stringify(distritos), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

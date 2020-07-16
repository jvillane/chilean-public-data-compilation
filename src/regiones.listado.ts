import {writeFile} from "fs";
import {Comuna, Provincia, Region, Regiones} from "./regiones.model";
import axios from "axios";
import {parseStringPromise} from "xml2js";

interface ComunaRaw {
  Numero: string[]
  Nombre: string[]
}

interface ProvinciaRaw {
  Numero: string[]
  Nombre: string[]
  Comunas: { Comuna: ComunaRaw[] }[]
}

interface RegionRaw {
  Numero: string[]
  NumeroRomano: string[]
  Nombre: string[]
  Provincias: { Provincia: ProvinciaRaw[] }[]
}

async function main() {
  const regiones: Regiones = {};
  const response = await axios.get('http://opendata.camara.cl/camaradiputados/WServices/WSComun.asmx/retornarRegiones?');
  const regionCollection = await parseStringPromise(response.data);
  const regionsRaw: RegionRaw[] = regionCollection['RegionesColeccion']['Region'];
    for (const regionRaw of regionsRaw) {
      const region: Region = {
        Id: +regionRaw.Numero[0],
        Nombre: regionRaw.Nombre[0],
        Romano:  regionRaw.NumeroRomano[0],
        Provincias: {}
      };
      for (const provinciaRaw of regionRaw.Provincias[0].Provincia) {
        const provincia: Provincia = {
          Id: +provinciaRaw.Numero[0],
          Nombre: provinciaRaw.Nombre[0],
          Comunas: {}
        };
        for (const comunaRaw of provinciaRaw.Comunas[0].Comuna) {
          const comuna: Comuna = {
            Id: +comunaRaw.Numero[0],
            Nombre: comunaRaw.Nombre[0]
          }
          provincia.Comunas[comuna.Id] = comuna;
        }
        region.Provincias[provincia.Id] = provincia;
      }
      regiones[region.Id] = region;
    }

  writeFile("./data/regiones.listado.json", JSON.stringify(regiones), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

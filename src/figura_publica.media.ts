import {publicFigures} from "./figura_publica.listado";
import {downloadAvatar} from "./diputados.listado";
import {Media} from "./figura_publica.model";
import {writeFile} from "fs";

async function main() {
  const media: Media = {};

  for (const pfId in publicFigures) {
    const pf = publicFigures[pfId];
    if (pf.DiputadoId) {
      const file = await downloadAvatar(pfId, Array.isArray(pf.DiputadoId) ? pf.DiputadoId[0] : pf.DiputadoId);
      if (file) {
        media[pfId] = {
          avatar: file
        };
      }
    }
  }

  writeFile("./data/figura_publica.media.json", JSON.stringify(media), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

//Ejecutar esto borrará la información media que se haya agregado manualmente
//TODO: agregar lógica
//main();

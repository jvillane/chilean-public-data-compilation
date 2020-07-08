import {publicFigures} from "./figura_publica.listado";
import {downloadAvatar} from "./diputados.listado";

async function main() {
  for (const pfId in publicFigures) {
    const pf = publicFigures[pfId];
    if (pf.DiputadoId) {
      await downloadAvatar(pfId, Array.isArray(pf.DiputadoId) ? pf.DiputadoId[0] : pf.DiputadoId);
    }
  }
}

main();

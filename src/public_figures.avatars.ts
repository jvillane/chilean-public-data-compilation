import {publicFigures} from "./public_figures";
import {downloadAvatar} from "./deputies";

async function main() {
  for (const pfId in publicFigures) {
    const pf = publicFigures[pfId];
    if (pf.DeputyId) {
      console.log(pfId, Array.isArray(pf.DeputyId) ? pf.DeputyId[0] : pf.DeputyId);
      await downloadAvatar(pfId, Array.isArray(pf.DeputyId) ? pf.DeputyId[0] : pf.DeputyId);
    }
  }
}

main();

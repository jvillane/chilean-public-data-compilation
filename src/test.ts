import {publicFigures} from "./public_figures";

async function main() {

  console.log(await publicFigures.filter(pf => pf.Id.startsWith('404_')));
}

main();

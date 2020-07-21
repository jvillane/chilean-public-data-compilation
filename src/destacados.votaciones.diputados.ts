import {writeFile} from "fs";
import {VotacionDiputadosDestacada} from "./destacados.model";

export const destacadosVotacionesDiputados: VotacionDiputadosDestacada[] = [
  {
    Anno: "AAAA",
    Id: "1313",
    Resumen: "blablabla"
  }, {
    Anno: "AAAA",
    Id: "1313",
    Resumen: "blablabla"
  }
]

async function main() {
  writeFile("./data/destacados.votaciones.diputados.json", JSON.stringify(destacadosVotacionesDiputados), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

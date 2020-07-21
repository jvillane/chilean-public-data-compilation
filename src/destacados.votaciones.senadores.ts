import {writeFile} from "fs";
import {VotacionSenadoresDestacada} from "./destacados.model";

export const destacadosVotacionesSenadores: VotacionSenadoresDestacada[] = [
  {
    Boletin: "B",
    Fecha: "AAAA-MM-DD",
    Resumen: "blablabla"
  }, {
    Boletin: "B",
    Fecha: "AAAA-MM-DD",
    Resumen: "blablabla"
  }
]

async function main() {
  writeFile("./data/destacados.votaciones.senadores.json", JSON.stringify(destacadosVotacionesSenadores), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

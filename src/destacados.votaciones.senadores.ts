import {writeFile} from "fs";
import {VotacionSenadoresDestacada} from "./destacados.model";

export const destacadosVotacionesSenadores: VotacionSenadoresDestacada[] = [
  {
    Boletin: "12894-07",
    Fecha: "2019-11-26",
    Resumen: "Proyecto generado a partir del estallido social de octubre del 2019 y que apinta a dar mayores herramientas a las fuerzan de orden público para dar persecución y poder castigar a quienes oculten su cara en público"
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

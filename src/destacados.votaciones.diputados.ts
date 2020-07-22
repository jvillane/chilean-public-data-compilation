import {writeFile} from "fs";
import {VotacionDiputadosDestacada} from "./destacados.model";

export const destacadosVotacionesDiputados: VotacionDiputadosDestacada[] = [
  {
    Anno: "2020",
    Id: "33634",
    Resumen: "Votación histórica en virtud del retiro de un 10% de los fondos de la AFP para que las familias chilenas puedan sortear el período de cuarentena establecido por la pandemia del COVID-19"
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

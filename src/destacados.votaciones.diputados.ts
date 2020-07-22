import {writeFile} from "fs";
import {VotacionDiputadosDestacada} from "./destacados.model";

export const destacadosVotacionesDiputados: VotacionDiputadosDestacada[] = [
  {
    Anno: "2020",
    Id: "33633",
    Resumen: "Votación histórica en virtud del retiro de un 10% de los fondos de la AFP para que las familias chilenas puedan sortear el período de cuarentena establecido por la pandemia del COVID-19"
  }, {
    Anno: "2019",
    Id: "32196",
    Resumen: "Polarización y polémica generó en la oposición la votación de la llamada \"Ley Antisaqueos\" donde los diputados a favor indican la importancia de la criminalización de los saqueos y la protección de funcionarios de bomberos o del SAMU, en contraposición de los detractores, que indican que será utilizada para dar represión a las protestas, quedando indefensos incluso ante las bombas lacrimógenas. Las penas apuntan a reclusiones que van desde los 541 días a 5 años en su grado medio a máximo."
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

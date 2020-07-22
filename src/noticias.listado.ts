import {writeFile} from "fs";
import {Noticia} from "./noticias.model";

export const politicalNews: Noticia[] = [
  {
    Fecha: "2020-07-14",
    Resumen: "Diputado Andrés Celis (RN) acusa extorsiones por parte del diputado Diego Schalper (RN) a la diputada Aracely Leuquén (RN) y otro diputado de Alto Hospicio",
    Descripcion: "En entrevista con CNN Chile el diputado Andrés Celis (RN) habla de presiones para que Chile Vamos vote en contra del retiro del 10% de las AFP, e involucra directamente al diputado Diego Schalper, quién habría ofrecido beneficios de gracia y puestos de gobierno a sus pares Aracely Leuquén y a un diputado de Alto Hospicio (probablemente haciendo referencia al diputado Ramón Galleguillos)",
    FigurasPublicas: [
      "4a9d66ff647febdfcd0be84d2021435b6e76fa3b",
      "c54e2ef031e99d5ec17372eb58f25dbb0162dc83",
      "4f656281076bb5e318d0a4ceb54dae105a08465d",
      "c18c7acf221e69cb950b0d40ee5848b9ab4f1eab"
    ],
    Links: {
      cnnchile: "https://www.cnnchile.com/lodijeronencnn/entrevista-andres-celis-acusa-extorsiones-rechazar-retiro-fondos-afp_20200714/",
      t13: "https://www.t13.cl/noticia/politica/diputado-andres-celis-diego-schalper-beneficios-rechazar-proyecto-14-07-2020",
      adnradio: "https://www.adnradio.cl/politica/2020/07/14/andres-celis-y-extorsiones-en-el-marco-de-la-votacion-por-el-10-de-las-afp-nunca-imagine-el-nivel-de-llamados-de-insinuaciones-u-ofrecimientos-que-podian-ocurrir-quede-perplejo.html",
      cooperativa: "https://cooperativa.cl/noticias/sociedad/salud/coronavirus/pugna-de-diputados-rn-celis-acuso-a-schalper-de-ofrecer-puestos-de/2020-07-14/203528.html"
    }
  }
]

function main() {
  writeFile("./data/noticias.listado.json", JSON.stringify(politicalNews), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

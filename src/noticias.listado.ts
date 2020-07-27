import {writeFile} from "fs";
import {Noticia} from "./noticias.model";

export const politicalNews: Noticia[] = [
  {
    Fecha: "2020-07-14",
    Resumen: "Diputado Andrés Celis (RN) acusa extorsiones por parte del diputado Diego Schalper (RN) a la diputada Aracely Leuquén (RN) y otro diputado de Alto Hospicio",
    Descripcion: "En entrevista con CNN Chile el diputado Andrés Celis (RN) habla de presiones para que Chile Vamos vote en contra del retiro del 10% de las AFP, e involucra directamente al diputado Diego Schalper, quién habría ofrecido beneficios de gracia y puestos de gobierno a sus pares Aracely Leuquén y a un diputado de Alto Hospicio (haciendo referencia al diputado Ramón Galleguillos)",
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
  }, {
    Fecha: "2020-07-17",
    Resumen: "La senadora Jacqueline Van Rysselberghe explica razones para enviar al tribunal supremo a diputados que aprobaron retiro del 10% de AFP",
    Descripcion: "La senadora Jacqueline Van Rysselberghe (UDI) señaló: \"Nosotros, dentro de los estatutos, tenemos establecido que somos un partido que defiende la democracia y que, por lo mismo, combate cualquier forma de populismo\", indicando que es un camino que deteriora la institucionalidad. Por otra parte el diputado Iván Moreira, también de la UDI, criticó dicho actuar del partido, tildándolo como una lamentable e inaceptable amenaza previa a la votación del Senado. Adicionalmente el diputado Gabriel Silber (DCC) anuncia la presentación de una denuncia ante el Servicio Electoral (Servel), que busca una petición de investigación contra la UDI aludiendo a la Ley de los Partidos Políticos, indicando que los congresistas no pueden recibir órdenes para votaciones.",
    FigurasPublicas: [
      "7c8a4f5c3c3eb3fb810097e523f27de6de5fe7b1",
      "218150a8a96f0e5437478186276888a6433ac681",
      "21b9d78f905fedf031c1fe4d907f1642eeba877d"
    ],
    Links: {
      "24horas": "https://www.24horas.cl/coronavirus/retiro-del-10-silber-denuncia-a-van-rysselberghe-ante-el-servel-por-ordenes-dadas-a-parlamentarios-4329678",
      cnnchile: "https://www.cnnchile.com/lodijeronencnn/entrevista-jvr-senadores-voten-retiro-10-tribunal-supremo_20200721/",
      latercera: "https://www.latercera.com/politica/noticia/van-rysselberghe-explica-razones-para-enviar-al-tribunal-supremo-a-diputados-que-aprobaron-retiro-del-10-de-afp-estan-avalando-un-camino-que-deteriora-la-institucionalidad/YLKS6AVAIFCXXGVI6OLG3RAIYM/"
    }
  }, {
    Fecha: "2020-07-17",
    Resumen: "Los diputados Álvaro Carter, Sandra Amar y Virginia Troncoso, tres de los 5 gremialistas que votaron a favor del retiro de fondos previsionales dejaron su militancia de la UDI",
    Descripcion: "Las renuncias fueron motivados luego de que la comisión política de la colectividad anunciara que serían llevados al Tribunal Supremo por su respaldo al proyecto de retiro de fondos de AFP. Parte del comunicado indica \"Los firmantes no hemos cometido ninguna falta a los principios de la UDI, ni hemos cometido delito alguno. Solo hemos votado en conciencia. Nos duele que se nos trate como indeseables, y hoy estemos acusados frente al Tribunal Supremo\".",
    FigurasPublicas: [
      "fe8fe6dbcd0ff3fbdcd0b402dffa2b9435a145f2",
      "aecf1bfe4d6b5f1ba89182695dc0f8bf931c6085",
      "8521ae6e3dd42bb096e14ae4e2155487c1c67c76"
    ],
    Links: {
      cooperativa: "https://cooperativa.cl/noticias/economia/sistema-previsional/afp/crisis-en-la-udi-por-afp-renuncian-diputados-y-moreira-apunta-a-kast/2020-07-17/172358.html",
      eldesconcierto: "https://www.eldesconcierto.cl/2020/07/17/duro-golpe-sacude-a-la-udi-tres-diputados-que-votaron-a-favor-del-proyecto-del-10-de-las-afp-renuncian-al-partido/",
      latercera: "https://www.latercera.com/politica/noticia/diputados-carter-amar-y-troncoso-renuncian-a-la-udi-tras-respaldar-proyecto-de-retiro-de-fondos-de-afp/NLOAJOJOEVBUZCF3GCH4HFVLFE/"
    }
  }, {
    Fecha: "2020-07-24",
    Resumen: "Avanza en el Senado la iniciativa que busca reducir la exigencia en compra de bonos y ampliar la capacidad de inversión de las AFP",
    Descripcion: "Las críticas a esta iniciativa han apuntado a que los dineros de los afiliados de la AFP podrían ser utilizados en búsqueda de beneficiar a grandes grupos económicos, en perjuicio de los trabajadores.",
    FigurasPublicas: [
      "533ab43952c3ae9143ef644e458fa8fb2f981913",
      "4b266191e27aaa403af840804cc7e772d05db6ac",
      "079eae6d5c36fed844f0b0371e3f6bd913c813b4"
    ],
    Links: {
      radiousach: "https://www.radiousach.cl/mauricio-daza-por-norma-que-modifica-mercado-financiero-permite-que",
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

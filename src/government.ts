import {Government} from "./government.model";
import {writeFile} from "fs";
import {publicFigures} from "./figura_publica.listado";

export const government: Government[] = [
  {
    From: "2010-03-11",
    To: "2014-03-11",
    President: [
      {
        Figure: {
          Id: "NTEyNjY2My0z",
          Nombre: "Miguel Juan Sebastián Piñera Echenique"
        },
        From: "2010-03-11",
        To: "2014-03-11"
      }
    ],
    Ministries: {
      Interior: {
        Ministry: [{
          Figure: {
            Id: "NzAxNjU5MS0w",
            Nombre: "Rodrigo Javier Hinzpeter Kirberg"
          },
          From: "2010-03-11",
          To: "2012-11-05"
        }, {
          Figure: {
            Id: "NjYxNTg1MC0w",
            Nombre: "Chadwick Piñera Andres Pio Bernardino"
          },
          From: "2012-11-05",
          To: "2014-03-11"
        }]
      },
      "Relaciones Exteriores": {
        Ministry: [{
          Figure: {
            Id: "Njk5MjkyOS1L",
            Nombre: "Alfredo German Moreno Charme"
          },
          From: "2010-03-11",
          To: "2014-03-11"
        }]
      }
    }
  }
];

writeFile("./data/government.json", JSON.stringify(publicFigures), function(err) {
  if (err) {
    console.log(err);
  }
});

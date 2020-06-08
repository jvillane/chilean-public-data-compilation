import {Government} from "./government.model";

export const government: Government[] = [
  {
    From: "2010-03-11",
    To: "2014-03-11",
    President: [
      {
        Figure: {
          Id: "NTEyNjY2My0z",
          Name: "Miguel Juan Sebastián Piñera Echenique"
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
            Name: "Rodrigo Javier Hinzpeter Kirberg"
          },
          From: "2010-03-11",
          To: "2012-11-05"
        }, {
          Figure: {
            Id: "NjYxNTg1MC0w",
            Name: "Chadwick Piñera Andres Pio Bernardino"
          },
          From: "2012-11-05",
          To: "2014-03-11"
        }]
      },
      "Relaciones Exteriores": {
        Ministry: [{
          Figure: {
            Id: "Njk5MjkyOS1L",
            Name: "Alfredo German Moreno Charme"
          },
          From: "2010-03-11",
          To: "2014-03-11"
        }]
      }
    }
  }
];

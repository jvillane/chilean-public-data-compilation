import {PublicFigure} from "./public_figures.model";
import {writeFile} from "fs";
import {aliases} from "./aliases";

export const publicFigures: PublicFigure[] = [
  {
    Id: "3baf8a82290dc441c78bfdb4587c7fa26a32faad=",
    Name: "Manuel Jose Bernardino Piñera Carvallo",
    Birthday: "1917-09-22",
    Death: "1991-06-03",
    Family: {
      Children: [
        {
          Id: "f2efde45bec43eaa6f66bd9b1c17b39b8f0372eb",
          Name: "Jose Manuel Alberto Piñera Echenique"
        },
        {
          Id: "27de3825ccff9defc11dbdb4b30205b611b9ae3c",
          Name: "Juan Pablo Bernardino Piñera Echenique"
        },
        {
          Id: "92415f0988ac40b8f5eb98c048fc7ac336a20dc5",
          Name: "Miguel Juan Sebastián Piñera Echenique"
        },
        {
          Id: "f7b53fbddeb820a6983d71cf9a2db654f5b1f0c9",
          Name: "Jose Miguel Carlos Piñera Echenique"
        },
        {
          Id: "c5159ca874b81e63aba6e34540ef0e885ddce129",
          Name: "Maria Teresa Magdalena Piñera Echenique"
        }
      ]
    }
  },
  {
    Id: "f2efde45bec43eaa6f66bd9b1c17b39b8f0372eb",
    Name: "Jose Manuel Alberto Piñera Echenique",
    Birthday: "1948-10-06"
  },
  {
    Id: "27de3825ccff9defc11dbdb4b30205b611b9ae3c",
    Name: "Juan Pablo Bernardino Piñera Echenique",
    Birthday: ""
  },
  {
    Id: "f7b53fbddeb820a6983d71cf9a2db654f5b1f0c9",
    Name: "Jose Miguel Carlos Piñera Echenique",
    Birthday: ""
  },
  {
    Id: "c5159ca874b81e63aba6e34540ef0e885ddce129",
    Name: "Maria Teresa Magdalena Piñera Echenique",
    Birthday: ""
  },
  {
    Id: "f6c5d1485f954badc86cbe780c170deb28e0203c",
    Name: "María Cecilia Morel Montes",
    Birthday: "1954-01-14"
  },
  {
    Id: "00147f72faa1569c741dffd3c30cfa48583d0e2e",
    Name: "Magdalena Maria Piñera Morel",
    Birthday: ""
  },
  {
    Id: "14796adfd794a916ca481f65c8208ab617c8b7c0",
    Name: "Maria Cecilia Piñera Morel",
    Birthday: ""
  },
  {
    Id: "b954694210f430ab49809f3b89b9c73ac39e437e",
    Name: "Juan Sebastian Piñera Morel",
    Birthday: ""
  },
  {
    Id: "fa8d5d56b1886ce2f37a785a5f70cdfa0db9d32e",
    Name: "Piñera Morel Cristobal",
    Birthday: ""
  },
  {
    Id: "92415f0988ac40b8f5eb98c048fc7ac336a20dc5",
    Name: "Miguel Juan Sebastián Piñera Echenique",
    Alias: "Sebastián Piñera",
    Birthday: "1949-12-01",
    Family: {
      Wife: [
        {
          Id: "f6c5d1485f954badc86cbe780c170deb28e0203c",
          Name: "María Cecilia Morel Montes",
          From: "1973-12-01"
        }
      ],
      Children: [
        {
          Id: "00147f72faa1569c741dffd3c30cfa48583d0e2e",
          Name: "Magdalena Maria Piñera Morel"
        },
        {
          Id: "14796adfd794a916ca481f65c8208ab617c8b7c0",
          Name: "Maria Cecilia Piñera Morel"
        },
        {
          Id: "b954694210f430ab49809f3b89b9c73ac39e437e",
          Name: "Juan Sebastian Piñera Morel"
        },
        {
          Id: "fa8d5d56b1886ce2f37a785a5f70cdfa0db9d32e",
          Name: "Cristobal Piñera Morel"
        }
      ]
    },
    Biography: {
      wikipedia: "https://es.wikipedia.org/wiki/Sebasti%C3%A1n_Pi%C3%B1era",
      bcn: "https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Sebasti%C3%A1n_Pi%C3%B1era_Echenique"
    }
  }, {
    Id: "5928db0687b7fe3ca49161c6eb8decc6e6499e71",
    Name: "Rodrigo Javier Hinzpeter Kirberg",
    Birthday: "1965-10-27"
  }, {
    Id: "777f16ab5de04e8078239098e1fc5f1bfcb3d98c",
    Name: "Andres Pio Bernardino Chadwick Piñera",
    Birthday: "1956-01-02"
  }, {
    Id: "9ca38b36196cb322423c0fbbb955fde0c647a034",
    Name: "Alfredo German Moreno Charme",
    Birthday: "1956-08-04"
  }, {
    Id: "dd18cb9820dd6da34d11d949ab9f1f5ec83f70e9",
    Name: "Francisco Javier Errázuriz Talavera",
    Birthday: "1942-05-07"
  }, {
    Id: "44a2cc3bd7511abe3f5dfb5345e2f7a37b9fab2a",
    Name: "Hernán Alberto Büchi Buc",
    Birthday: "1949-03-06"
  }, {
    Id: "de75abe036e34fabe565fcf59e526c284686485e",
    Name: "Alejandro René Eleodoro Guillier Álvarez",
    Birthday: ""
  }, {
    Id: "6a31dcdcd0205c85deafe31952eafe3ed0e9638c",
    Name: "Alejandro Navarro Brain",
    Birthday: ""
  }, {
    Id: "e254d432497742dccd5796d1640b80481be36dc6",
    Name: "Alfredo Juan Sfeir Younis",
    Birthday: ""
  }, {
    Id: "dcfdb2f5351719fcb640b38a9f3dcd678d00afc6",
    Name: "Arturo Alessandri Besa",
    Birthday: ""
  }, {
    Id: "7baf719d81741dce4b2e61fd76f9b1ca3af04767",
    Name: "Eduardo Alberto Frei Ruiz Tagle",
    Birthday: ""
  }, {
    Id: "d9aed12ec315c9bd144ca374a1cd8491582d148e",
    Name: "Beatriz de Jesús Sánchez Muñoz",
    Birthday: ""
  }, {
    Id: "626a0c585f5d43482617a5b88eb0da4b56bb63ce",
    Name: "Carolina Goic Boroevic",
    Birthday: ""
  }, {
    Id: "a7cfb34869ff7c1f54c93450029dc74c3571bff9",
    Name: "Carlos Cristian Reitze Campos",
    Birthday: ""
  }, {
    Id: "1917ce6b3c93069e1ba9e52144838b5596fe7428",
    Name: "Eduardo Antonio Artes Brichetti",
    Birthday: ""
  }, {
    Id: "d11e1ddda049f8575e7dd22866abb811b80b58b8",
    Name: "Frei Bolivar Erwin Arturo",
    Birthday: ""
  }, {
    Id: "47b1f8d2abc59c13c48baedeaabe7d7de727d1df",
    Name: "Juan Eugenio Pizarro Poblete",
    Birthday: ""
  }, {
    Id: "235405d0d7560bf7f8ee1472f672a8f71994742e",
    Name: "Evelyn Rose Matthei Fornet",
    Birthday: ""
  }, {
    Id: "fd3430942abf4fdc6589f3664bbb0cb5ed748c8d",
    Name: "Franco Aldo Parisi Fernández",
    Birthday: ""
  }, {
    Id: "404_01",
    Name: "Gladys del Carmen Marín Millie",
    Birthday: ""
  }, {
    Id: "ce22567c157e8e20d844e4864bfb4068b8681fca",
    Name: "Joaquín José Lavín Infante",
    Birthday: ""
  }, {
    Id: "9881b8975db18095be50029320433759009a412a",
    Name: "Jorge Felix Arrate Mac-Niven",
    Birthday: ""
  }, {
    Id: "f1383e1210cdf254263e47a4ccfb223132ac43b4",
    Name: "José Antonio Kast Rist",
    Birthday: ""
  }, {
    Id: "1230fc6d16108035b0d8e7b99f292c2e53acbff3",
    Name: "Artur Manfred Max Neef",
    Birthday: ""
  }, {
    Id: "1d42127aa05f5c1aff423782c5616acf4f4f6761",
    Name: "Marcel Henri Claude Reyes",
    Birthday: ""
  }, {
    Id: "f7e8eff419abb80f9ad6e96135a25a9c232e60ce",
    Name: "Marco Antonio Enríquez-Ominami Gumucio",
    Birthday: ""
  }, {
    Id: "36d0c29759cfe2b36ffbed29f656e52a195b6e81",
    Name: "Verónica Michelle Bachelet Jeria",
    Birthday: ""
  }, {
    Id: "404_02",
    Name: "Patricio Aylwin Azócar",
    Birthday: ""
  }, {
    Id: "7891fd0925fd434cea3d6f136411c8956d356325",
    Name: "Ricardo Jacob Israel Zipper",
    Birthday: ""
  }, {
    Id: "d63d1a939deb6f22fb6798c31f9bf9e1cc6c791f",
    Name: "Ricardo Froilán Lagos Escobar",
    Birthday: ""
  }, {
    Id: "69943038131cc93104420671776ad663feb0df7f",
    Name: "Roxana del Pilar Miranda Meneses",
    Birthday: ""
  }, {
    Id: "404_03",
    Name: "Sara María Larraín Ruiz-Tagle",
    Birthday: ""
  }, {
    Id: "2c65a090f5f8d1374e2d440ac59d958e03b335b1",
    Name: "Tomás René Hirsch Goldschmidt",
    Birthday: ""
  }, {
    Id: "0f70fcd106f0228c66322680324d9c27da47e4f3",
    Name: "José Tomás Jocelyn-Holt Letelier",
    Birthday: ""
  }
];

export const findPublicFigureByAlias = (name: string): PublicFigure | undefined => {
  for (const id in aliases) {
    if (aliases[id].includes(name)) {
      for (const publicFigure of publicFigures) {
        if (publicFigure.Id === id) {
          return publicFigure;
        }
      }
    }
  }
  return undefined;
}

writeFile("./data/public_figures.json", JSON.stringify(publicFigures), function (err) {
  if (err) {
    console.log(err);
  }
});

import {FiguraPublica, FigurasPublicas} from "./figura_publica.model";
import {writeFile} from "fs";
import {aliases} from "./aliases";

export const publicFigureList: FiguraPublica[] = [
  {
    "Id": "3baf8a82290dc441c78bfdb4587c7fa26a32faad=",
    "Nombre": "Manuel Jose Bernardino Piñera Carvallo",
    "Nacio": "1917-09-22",
    "Murio": "1991-06-03",
    "Familia": {
      "Hijos": [
        {
          "Id": "f2efde45bec43eaa6f66bd9b1c17b39b8f0372eb",
          "Nombre": "Jose Manuel Alberto Piñera Echenique"
        },
        {
          "Id": "27de3825ccff9defc11dbdb4b30205b611b9ae3c",
          "Nombre": "Juan Pablo Bernardino Piñera Echenique"
        },
        {
          "Id": "92415f0988ac40b8f5eb98c048fc7ac336a20dc5",
          "Nombre": "Miguel Juan Sebastián Piñera Echenique"
        },
        {
          "Id": "f7b53fbddeb820a6983d71cf9a2db654f5b1f0c9",
          "Nombre": "Jose Miguel Carlos Piñera Echenique"
        },
        {
          "Id": "c5159ca874b81e63aba6e34540ef0e885ddce129",
          "Nombre": "Maria Teresa Magdalena Piñera Echenique"
        }
      ]
    }
  },
  {
    "Id": "f2efde45bec43eaa6f66bd9b1c17b39b8f0372eb",
    "Nombre": "Jose Manuel Alberto Piñera Echenique",
    "Nacio": "1948-10-06"
  },
  {
    "Id": "27de3825ccff9defc11dbdb4b30205b611b9ae3c",
    "Nombre": "Juan Pablo Bernardino Piñera Echenique",
    "Nacio": ""
  },
  {
    "Id": "f7b53fbddeb820a6983d71cf9a2db654f5b1f0c9",
    "Nombre": "Jose Miguel Carlos Piñera Echenique",
    "Nacio": ""
  },
  {
    "Id": "c5159ca874b81e63aba6e34540ef0e885ddce129",
    "Nombre": "Maria Teresa Magdalena Piñera Echenique",
    "Nacio": ""
  },
  {
    "Id": "f6c5d1485f954badc86cbe780c170deb28e0203c",
    "Nombre": "María Cecilia Morel Montes",
    "Nacio": "1954-01-14"
  },
  {
    "Id": "00147f72faa1569c741dffd3c30cfa48583d0e2e",
    "Nombre": "Magdalena Maria Piñera Morel",
    "Nacio": ""
  },
  {
    "Id": "14796adfd794a916ca481f65c8208ab617c8b7c0",
    "Nombre": "Maria Cecilia Piñera Morel",
    "Nacio": ""
  },
  {
    "Id": "b954694210f430ab49809f3b89b9c73ac39e437e",
    "Nombre": "Juan Sebastian Piñera Morel",
    "Nacio": ""
  },
  {
    "Id": "fa8d5d56b1886ce2f37a785a5f70cdfa0db9d32e",
    "Nombre": "Piñera Morel Cristobal",
    "Nacio": ""
  },
  {
    "Id": "92415f0988ac40b8f5eb98c048fc7ac336a20dc5",
    "Nombre": "Miguel Juan Sebastián Piñera Echenique",
    "Nacio": "1949-12-01",
    "Familia": {
      "Esposa": [
        {
          "Id": "f6c5d1485f954badc86cbe780c170deb28e0203c",
          "Nombre": "María Cecilia Morel Montes",
          "Desde": "1973-12-01"
        }
      ],
      "Hijos": [
        {
          "Id": "00147f72faa1569c741dffd3c30cfa48583d0e2e",
          "Nombre": "Magdalena Maria Piñera Morel"
        },
        {
          "Id": "14796adfd794a916ca481f65c8208ab617c8b7c0",
          "Nombre": "Maria Cecilia Piñera Morel"
        },
        {
          "Id": "b954694210f430ab49809f3b89b9c73ac39e437e",
          "Nombre": "Juan Sebastian Piñera Morel"
        },
        {
          "Id": "fa8d5d56b1886ce2f37a785a5f70cdfa0db9d32e",
          "Nombre": "Cristobal Piñera Morel"
        }
      ]
    },
    "Biografia": {
      "wikipedia": "https://es.wikipedia.org/wiki/Sebasti%C3%A1n_Pi%C3%B1era",
      "bcn": "https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Sebasti%C3%A1n_Pi%C3%B1era_Echenique"
    }
  },
  {
    "Id": "5928db0687b7fe3ca49161c6eb8decc6e6499e71",
    "Nombre": "Rodrigo Javier Hinzpeter Kirberg",
    "Nacio": "1965-10-27"
  },
  {
    "Id": "9ca38b36196cb322423c0fbbb955fde0c647a034",
    "Nombre": "Alfredo German Moreno Charme",
    "Nacio": "1956-08-04"
  },
  {
    "Id": "dd18cb9820dd6da34d11d949ab9f1f5ec83f70e9",
    "Nombre": "Francisco Javier Errázuriz Talavera",
    "Nacio": "1942-05-07"
  },
  {
    "Id": "44a2cc3bd7511abe3f5dfb5345e2f7a37b9fab2a",
    "Nombre": "Hernán Alberto Büchi Buc",
    "Nacio": "1949-03-06"
  },
  {
    "Id": "de75abe036e34fabe565fcf59e526c284686485e",
    "Nombre": "Alejandro René Eleodoro Guillier Álvarez",
    "Nacio": "1953-03-05",
    "SenadorId": 1111,
    "Militancias": [
      {
        "PartidoId": "IND"
      }
    ]
  },
  {
    "Id": "e254d432497742dccd5796d1640b80481be36dc6",
    "Nombre": "Alfredo Juan Sfeir Younis",
    "Nacio": ""
  },
  {
    "Id": "dcfdb2f5351719fcb640b38a9f3dcd678d00afc6",
    "Nombre": "Arturo Alessandri Besa",
    "Nacio": ""
  },
  {
    "Id": "7baf719d81741dce4b2e61fd76f9b1ca3af04767",
    "Nombre": "Eduardo Alberto Frei Ruiz Tagle",
    "Nacio": ""
  },
  {
    "Id": "d9aed12ec315c9bd144ca374a1cd8491582d148e",
    "Nombre": "Beatriz de Jesús Sánchez Muñoz",
    "Nacio": ""
  },
  {
    "Id": "a7cfb34869ff7c1f54c93450029dc74c3571bff9",
    "Nombre": "Carlos Cristian Reitze Campos",
    "Nacio": ""
  },
  {
    "Id": "1917ce6b3c93069e1ba9e52144838b5596fe7428",
    "Nombre": "Eduardo Antonio Artes Brichetti",
    "Nacio": ""
  },
  {
    "Id": "d11e1ddda049f8575e7dd22866abb811b80b58b8",
    "Nombre": "Frei Bolivar Erwin Arturo",
    "Nacio": ""
  },
  {
    "Id": "47b1f8d2abc59c13c48baedeaabe7d7de727d1df",
    "Nombre": "Juan Eugenio Pizarro Poblete",
    "Nacio": ""
  },
  {
    "Id": "fd3430942abf4fdc6589f3664bbb0cb5ed748c8d",
    "Nombre": "Franco Aldo Parisi Fernández",
    "Nacio": ""
  },
  {
    "Id": "404_01",
    "Nombre": "Gladys del Carmen Marín Millie",
    "Nacio": ""
  },
  {
    "Id": "ce22567c157e8e20d844e4864bfb4068b8681fca",
    "Nombre": "Joaquín José Lavín Infante",
    "Nacio": ""
  },
  {
    "Id": "9881b8975db18095be50029320433759009a412a",
    "Nombre": "Jorge Felix Arrate Mac-Niven",
    "Nacio": ""
  },
  {
    "Id": "1230fc6d16108035b0d8e7b99f292c2e53acbff3",
    "Nombre": "Artur Manfred Max Neef",
    "Nacio": ""
  },
  {
    "Id": "1d42127aa05f5c1aff423782c5616acf4f4f6761",
    "Nombre": "Marcel Henri Claude Reyes",
    "Nacio": ""
  },
  {
    "Id": "36d0c29759cfe2b36ffbed29f656e52a195b6e81",
    "Nombre": "Verónica Michelle Bachelet Jeria",
    "Nacio": ""
  },
  {
    "Id": "404_02",
    "Nombre": "Patricio Aylwin Azócar",
    "Nacio": ""
  },
  {
    "Id": "7891fd0925fd434cea3d6f136411c8956d356325",
    "Nombre": "Ricardo Jacob Israel Zipper",
    "Nacio": ""
  },
  {
    "Id": "d63d1a939deb6f22fb6798c31f9bf9e1cc6c791f",
    "Nombre": "Ricardo Froilán Lagos Escobar",
    "Nacio": ""
  },
  {
    "Id": "69943038131cc93104420671776ad663feb0df7f",
    "Nombre": "Roxana del Pilar Miranda Meneses",
    "Nacio": ""
  },
  {
    "Id": "404_03",
    "Nombre": "Sara María Larraín Ruiz-Tagle",
    "Nacio": ""
  },
  {
    "Id": "750e0ece12e42a4b98624599ab7673d9e6e00f9e",
    "Nombre": "Víctor Claudio José Pérez Varela",
    "Nacio": "1954-10-18",
    "DiputadoId": 208,
    "SenadorId": 916,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "079eae6d5c36fed844f0b0371e3f6bd913c813b4",
    "Nombre": "Jorge Esteban Pizarro Soto",
    "Nacio": "1952-04-21",
    "DiputadoId": 485,
    "SenadorId": 163,
    "Militancias": [
      {
        "PartidoId": "DC"
      }
    ]
  },
  {
    "Id": "404_04",
    "Nombre": "Sergio Pizarro Mackay",
    "Nacio": "1939-03-19",
    "DiputadoId": 684
  },
  {
    "Id": "6f4a0dc257d1eae05ab081f6a5105a1d8a342afa",
    "Nombre": "José Alfonso Rodríguez Del Río",
    "Nacio": "1948-01-29",
    "DiputadoId": 696
  },
  {
    "Id": "9888b9956a2e2ed1191778d26421bed34b995b8d",
    "Nombre": "David Sergio Sandoval Plaza",
    "Nacio": "1952-10-20",
    "DiputadoId": 951,
    "SenadorId": 1225,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "6693968029c6f94a6d3b6e3db2b25604ed3149c1",
    "Nombre": "Pedro Antonio Velásquez Seguel",
    "Nacio": "1964-08-05",
    "DiputadoId": 961,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "0c807508a65a121430f6a64296f67856a097276b",
    "Nombre": "Pedro Browne Urrejola",
    "Nacio": "1972-06-29",
    "DiputadoId": 927
  },
  {
    "Id": "d74a4c31e17f7f76f6d3b806386dedd0eb5f338e",
    "Nombre": "Aldo Vicente Cornejo González",
    "Nacio": "1955-04-19",
    "DiputadoId": 933
  },
  {
    "Id": "50d1a2bf0852c832380ce62ef565f56bbae40471",
    "Nombre": "Gustavo Adolfo Hasbún Selume",
    "Nacio": "1972-08-02",
    "DiputadoId": 939
  },
  {
    "Id": "23a6b461d26e48b0722445f4109ff87aab2a6eb4",
    "Nombre": "Andrea Molina Oliva",
    "Nacio": "1970-03-28",
    "DiputadoId": 944
  },
  {
    "Id": "a6a972dc570d6049954459543b8411f0973a8c67",
    "Nombre": "René Fernando Saffirio Espinoza",
    "Nacio": "1955-10-09",
    "DiputadoId": 950,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2010-03-11T00:00:00",
        "Hasta": "2014-03-10T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2014-03-11T00:00:00",
        "Hasta": "2018-03-10T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "18b106a5acb975ed7da383ac73428b5f78b15e74",
    "Nombre": "Carlos Vilches Guzmán",
    "Nacio": "1944-10-20",
    "DiputadoId": 962
  },
  {
    "Id": "a2ae86ab87f39d9e3b72fffc16bac13ed3c019da",
    "Nombre": "Guillermo León Teillier Del Valle",
    "Nacio": "1943-10-29",
    "DiputadoId": 956,
    "Militancias": [
      {
        "PartidoId": "PC",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "341a19aa3f268074f94bcfe1161c63728090d5ca",
    "Nombre": "Mónica Javiera Blanco Suárez",
    "Nacio": "1972-08-01",
    "Familia": {
      "Marido": [
        {
          "Id": "8087f501a599e8682fdf57fddd2bb2200f6ca500",
          "Nombre": "Pedro Araya Guerrero"
        }
      ]
    }
  },
  {
    "Id": "8087f501a599e8682fdf57fddd2bb2200f6ca500",
    "Nombre": "Pedro Araya Guerrero",
    "Nacio": "",
    "DiputadoId": 808,
    "SenadorId": 1110,
    "Familia": {
      "Esposa": [
        {
          "Id": "341a19aa3f268074f94bcfe1161c63728090d5ca",
          "Nombre": "Mónica Javiera Blanco Suárez"
        }
      ]
    },
    "Militancias": [
      {
        "PartidoId": "IND"
      }
    ]
  },
  {
    "Id": "bf95d31ad2f6b8c7b0fbe06cd25ff131279958bf",
    "Nombre": "Enrique Luis Accorsi Opazo",
    "Nacio": "1948-08-17",
    "DiputadoId": 800
  },
  {
    "Id": "8e62d6ece16df86935d8898ee0d201d5c38ebf50",
    "Nombre": "Sergio Patricio Aguiló Melo",
    "Nacio": "1953-02-09",
    "DiputadoId": 802
  },
  {
    "Id": "fd0e672d2b699e4008c15d887aaf5f989afaddc8",
    "Nombre": "Isabel Allende Bussi",
    "Nacio": "1945-01-18",
    "DiputadoId": 804,
    "SenadorId": 985,
    "Militancias": [
      {
        "PartidoId": "PS"
      }
    ]
  },
  {
    "Id": "166a104d8f78e693ca47af662653be5b3bedfc63",
    "Nombre": "Claudio Patricio Alvarado Andrade",
    "Nacio": "1960-02-07",
    "DiputadoId": 805
  },
  {
    "Id": "e4dcfc2a18d6c0441d99d6e881bc22ee99ae6e19",
    "Nombre": "Rodrigo Alejandro Álvarez Zenteno",
    "Nacio": "1966-07-30",
    "DiputadoId": 807
  },
  {
    "Id": "404_05",
    "Nombre": "Pedro Pablo Alvarez-Salamanca Büchi",
    "Nacio": "1948-04-10",
    "Murio": "2008-09-03",
    "DiputadoId": 806
  },
  {
    "Id": "affe819041bb5a899c44f207a4b139005af0b9b8",
    "Nombre": "Lily Jovanka Pérez San Martín",
    "Nacio": "1963-05-10",
    "DiputadoId": 921,
    "Militancias": [
      {
        "Desde": "2013-12-31T23:59:59",
        "PartidoId": "RN"
      }, {
        "Desde": "2014-01-01T00:00:00",
        "PartidoId": "IND"
      }
    ]
  },
  {
    "Id": "77b9f16862919da5f711818101a88525dad485b9",
    "Nombre": "Gabriel Héctor Ascencio Mansilla",
    "Nacio": "1953-10-25",
    "DiputadoId": 810,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "1994-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "bcc53f26caf73ac5187e938180b0ba8f5e3612cb",
    "Nombre": "José Ramón Barros Montero",
    "Nacio": "1958-03-05",
    "DiputadoId": 811,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2002-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "7bf69231b6814db8a18f4de4aca536630d8684c3",
    "Nombre": "Eugenio Francisco Bauer Jouanne",
    "Nacio": "1947-05-20",
    "DiputadoId": 812
  },
  {
    "Id": "d6c90b64e2bbc7ae3676e2a9bbd9f4a1f9e46493",
    "Nombre": "Germán Becker Alvear",
    "Nacio": "1955-03-13",
    "DiputadoId": 813
  },
  {
    "Id": "4a9bf3c579a62a76c4dc0e37f217b65eefa8297f",
    "Nombre": "Mario Vittorio Luca Bertolino Rendic",
    "Nacio": "1954-02-03",
    "DiputadoId": 814
  },
  {
    "Id": "90b64fe8a8a3fe2e2cf5c0f9f668116beec12bd4",
    "Nombre": "Jorge Alfonso Burgos Varela",
    "Nacio": "1956-06-24",
    "DiputadoId": 816
  },
  {
    "Id": "404_06",
    "Nombre": "Juan José Bustos Ramírez",
    "Nacio": "1935-12-08",
    "Murio": "2008-08-07",
    "DiputadoId": 817
  },
  {
    "Id": "94f760082b696dc9ab73c6571e80e245d78ad990",
    "Nombre": "Alberto Eugenio Cardemil Herrera",
    "Nacio": "1945-11-01",
    "DiputadoId": 818
  },
  {
    "Id": "6db008bafaf1bdbd28d91d27defeee84852989c3",
    "Nombre": "Guillermo Arturo Ceroni Fuentes",
    "Nacio": "1946-07-30",
    "DiputadoId": 819
  },
  {
    "Id": "d1345dd3a86caf1d819d89100528048787792c08",
    "Nombre": "Sergio Andrés Correa De la Cerda",
    "Nacio": "1938-05-02",
    "DiputadoId": 821
  },
  {
    "Id": "4d8c06d2074bbbe74cd32a03a834cd59519fa8fe",
    "Nombre": "María Angélica Cristi Marfil",
    "Nacio": "1941-10-13",
    "DiputadoId": 822
  },
  {
    "Id": "61fb9b9d34a0f8c6a82cac1183c8224f0a459f91",
    "Nombre": "Marcela Cubillos Sigall",
    "Nacio": "1967-02-02",
    "DiputadoId": 823,
    "Familia": {
      "Marido": [
        {
          "Id": "3887990645f3868ffc5e09772891ff4d86d650b8",
          "Nombre": "Andrés Allamand Zavala"
        }
      ]
    }
  },
  {
    "Id": "404_07",
    "Nombre": "Roberto Delmastro Naso",
    "Nacio": "1945-10-17",
    "Murio": "2014-12-26",
    "DiputadoId": 825
  },
  {
    "Id": "7636c17378959fcac069b7634d2ccbdbeaaa82f1",
    "Nombre": "Eduardo Díaz Del Río",
    "Nacio": "1973-12-17",
    "DiputadoId": 826
  },
  {
    "Id": "aa95cbbe4d353c64364c763eb303f7e92870fcdd",
    "Nombre": "Julio Cristóbal Dittborn Cordua",
    "Nacio": "1951-10-19",
    "DiputadoId": 828
  },
  {
    "Id": "1156d1e31aedd50cff3efcba658894d43b71dc1f",
    "Nombre": "Andrés Egaña Respaldiza",
    "Nacio": "1947-03-08",
    "DiputadoId": 830
  },
  {
    "Id": "ff1b122ebe0554606992ac2458134e0e355e26a9",
    "Nombre": "José Francisco Encina Moriamez",
    "Nacio": "1943-12-18",
    "DiputadoId": 832
  },
  {
    "Id": "ca80e8efb58652bba826d237bd3dc7e44e1a80f2",
    "Nombre": "Maximiano Guillermo Errázuriz Eguiguren",
    "Nacio": "1945-09-28",
    "DiputadoId": 834
  },
  {
    "Id": "5ebdb3f8d79206e2992ccad8f45e0818e6b5750b",
    "Nombre": "Fidel Edgardo Espinoza Sandoval",
    "Nacio": "1970-01-24",
    "DiputadoId": 837,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2002-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "3eec05a4012e505df440fe1ca335585001941b3b",
    "Nombre": "Marcelo Iván Forni Lobos",
    "Nacio": "1967-10-15",
    "DiputadoId": 840
  },
  {
    "Id": "b5c0d847c1560287481cb23cb48024f8f932c264",
    "Nombre": "Pablo Alberto Galilea Carrillo",
    "Nacio": "1963-01-31",
    "DiputadoId": 842
  },
  {
    "Id": "cfab8c13eadeab651c7bfa0a8ada1e27479adbbc",
    "Nombre": "René Manuel García García",
    "Nacio": "1950-05-24",
    "DiputadoId": 843,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "1990-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "fd4d76a64774dccdd03f2e1fddd9a6e929e7520a",
    "Nombre": "Alejandro García-Huidobro Sanfuentes",
    "Nacio": "1952-04-19",
    "DiputadoId": 844,
    "SenadorId": 1066,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "30be367b938325b57d5667ceeea568c2ee47ed4b",
    "Nombre": "Ena Anglein Von Baer Jahn",
    "Nacio": "1974-11-28",
    "SenadorId": 1067,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "f02afbdc08430ed0c1733ffcf9f40417d2b621f8",
    "Nombre": "Rodrigo René González Torres",
    "Nacio": "1941-09-26",
    "DiputadoId": 848,
    "Militancias": [
      {
        "PartidoId": "PPD",
        "Desde": "2002-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "13c429cd0906ba2d58ef7784fae91ae2d4de3c97",
    "Nombre": "Patricio Alejandro Hales Dib",
    "Nacio": "1946-09-11",
    "DiputadoId": 849
  },
  {
    "Id": "920ea0d52e1d10f39f85842145c5e8a77b0b6655",
    "Nombre": "Javier Ricardo Hernández Hernández",
    "Nacio": "1954-08-07",
    "DiputadoId": 850,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2002-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "3998791aafd490ea9fe28112dff1ee370c16c598",
    "Nombre": "Ramón Enrique Jaramillo Becker",
    "Nacio": "1937-07-11",
    "DiputadoId": 854
  },
  {
    "Id": "66c0d38e537930fd2b5d2fa26fc851a6cf656eea",
    "Nombre": "Carlos Abel Jarpa Wevar",
    "Nacio": "1944-11-14",
    "DiputadoId": 855,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2019-12-19T00:00:00"
      },
      {
        "PartidoId": "PRSD",
        "Hasta": "2019-12-18T23:59:59"
      }
    ]
  },
  {
    "Id": "4b266191e27aaa403af840804cc7e772d05db6ac",
    "Nombre": "Ricardo Andrés Lagos Weber",
    "Nacio": "1962-02-21",
    "SenadorId": 987,
    "Militancias": [
      {
        "PartidoId": "PPD"
      }
    ]
  },
  {
    "Id": "f1383e1210cdf254263e47a4ccfb223132ac43b4",
    "Nombre": "José Antonio Kast Rist",
    "Nacio": "1966-01-18",
    "DiputadoId": 857
  },
  {
    "Id": "43160c6a5021cd0726066a101c80eb827c2a57d7",
    "Nombre": "José Antonio Leal Labrín",
    "Nacio": "1950-01-10",
    "DiputadoId": 859
  },
  {
    "Id": "3661bfd97fcd7d2aaba6c325de86d9682758157f",
    "Nombre": "Pablo Lorenzini Basso",
    "Nacio": "1949-10-25",
    "DiputadoId": 862,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2006-03-11T00:00:00",
        "Hasta": "2010-03-10T23:59:59"
      },
      {
        "PartidoId": "DC",
        "Desde": "1998-03-11T00:00:00",
        "Hasta": "2002-03-10T23:59:59"
      },
      {
        "PartidoId": "DC",
        "Desde": "2010-03-11T00:00:00",
        "Hasta": "2014-03-10T23:59:59"
      },
      {
        "PartidoId": "DC",
        "Desde": "2002-03-11T00:00:00",
        "Hasta": "2006-03-10T23:59:59"
      },
      {
        "PartidoId": "DC",
        "Desde": "2018-03-11T00:00:00",
        "Hasta": "2020-04-27T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2020-04-28T00:00:00"
      },
      {
        "PartidoId": "DC",
        "Desde": "2014-03-11T00:00:00",
        "Hasta": "2018-03-10T23:59:59"
      }
    ]
  },
  {
    "Id": "2daaf560909e7d0367ea9e00ce0d016a2338e4d7",
    "Nombre": "Rosauro Martínez Labbé",
    "Nacio": "1950-11-11",
    "DiputadoId": 863
  },
  {
    "Id": "7f539d0b85148eb91a68b8e660028d731bb98d63",
    "Nombre": "Juan Alfonso Manuel Masferrer Pellizzari",
    "Nacio": "1940-11-19",
    "DiputadoId": 864
  },
  {
    "Id": "0a71863a3a01b2a89b2bef99ea17c38ba477b7b7",
    "Nombre": "Patricio Melero Abaroa",
    "Nacio": "1956-06-19",
    "DiputadoId": 865,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "1990-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "f4b2a7ad79e60f71aab0091bb19780a9f85a2d4b",
    "Nombre": "Fernando Meza Moncada",
    "Nacio": "1946-07-14",
    "DiputadoId": 866,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2019-12-19T00:00:00"
      }
    ]
  },
  {
    "Id": "e2db8f37f347a4672e68770bf7e3d33cdb253b20",
    "Nombre": "Nicolás Monckeberg Díaz",
    "Nacio": "1973-07-31",
    "DiputadoId": 868
  },
  {
    "Id": "f06efcc2f42908724ff6cba0317f5d831292d9f7",
    "Nombre": "Carlos Eduardo Montes Cisternas",
    "Nacio": "1946-05-11",
    "DiputadoId": 870,
    "SenadorId": 1119,
    "Militancias": [
      {
        "PartidoId": "PS"
      }
    ]
  },
  {
    "Id": "21b9d78f905fedf031c1fe4d907f1642eeba877d",
    "Nombre": "Iván Alejandro Moreira Barros",
    "Nacio": "1956-12-08",
    "DiputadoId": 871,
    "SenadorId": 1117,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "19394fb3f76df5d8c376938f9d9b3cff9ae0f7db",
    "Nombre": "Jaime Francisco Mulet Martínez",
    "Nacio": "1963-08-03",
    "DiputadoId": 872,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "1980-01-01T00:00:00",
        "Hasta": "2006-03-10T23:59:59"
      },
      {
        "PartidoId": "PRI",
        "Desde": "2006-03-11T00:00:00",
        "Hasta": "2010-03-10T23:59:59"
      },
      {
        "PartidoId": "FREVS",
        "Desde": "2017-04-25T00:00:00",
        "Hasta": "2022-03-10T23:59:59"
      }
    ]
  },
  {
    "Id": "1d4303b4f9e90759a0a543956acc55eb98cab3bb",
    "Nombre": "Adriana Blanca Cristina Muñoz D'Albora",
    "Nacio": "1948-09-25",
    "DiputadoId": 873,
    "SenadorId": 1118,
    "Militancias": [
      {
        "PartidoId": "PPD"
      }
    ]
  },
  {
    "Id": "5c052ff425db090c27c70594956a86cc1aa1340e",
    "Nombre": "Iván Ernesto Norambuena Farías",
    "Nacio": "1958-09-04",
    "DiputadoId": 875,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2002-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "fec6430feb56a80577aa08da5a98e4075509a0bf",
    "Nombre": "Sergio Rodrigo Ojeda Uribe",
    "Nacio": "1943-03-12",
    "DiputadoId": 877
  },
  {
    "Id": "58ab544c089a003c2a869470eb3b72e251ba64c1",
    "Nombre": "Carlos Olivares Zepeda",
    "Nacio": "1952-05-25",
    "DiputadoId": 878
  },
  {
    "Id": "75a26bf72a5127d5d0471a2476174bd904aeb5da",
    "Nombre": "José Miguel Ortiz Novoa",
    "Nacio": "1941-11-22",
    "DiputadoId": 879,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "1990-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "6abb0029e7075a39d1f0a6d5a60345274aa0a038",
    "Nombre": "José Osvaldo Palma Flores",
    "Nacio": "1952-10-02",
    "DiputadoId": 881
  },
  {
    "Id": "6257ab27a8856b984abfbfcb8509bc0d664273de",
    "Nombre": "Luis Iván Paredes Fierro",
    "Nacio": "1958-06-04",
    "DiputadoId": 882
  },
  {
    "Id": "d88279d04b2e8fac208e8a428fb7399f65aab70a",
    "Nombre": "Darío Guillermo Paya Mira",
    "Nacio": "1964-07-20",
    "DiputadoId": 884
  },
  {
    "Id": "bc359cdd5993e17b74a2499e54a1b43ef50ad642",
    "Nombre": "José Pérez Arriagada",
    "Nacio": "1940-12-29",
    "DiputadoId": 885,
    "Militancias": [
      {
        "PartidoId": "PRSD",
        "Desde": "1988-01-01T00:00:00"
      }
    ]
  },
  {
    "Id": "f93c3509c5abe71d8bda66f16a94af42835d17f7",
    "Nombre": "Jaime Daniel Quintana Leal",
    "Nacio": "1967-10-22",
    "DiputadoId": 886,
    "SenadorId": 1008,
    "Militancias": [
      {
        "PartidoId": "PPD"
      }
    ]
  },
  {
    "Id": "cf12e9c036c38f6e1c54af467b35e4e71021f4b9",
    "Nombre": "Carlos Recondo Lavanderos",
    "Nacio": "1954-04-27",
    "DiputadoId": 887
  },
  {
    "Id": "1847bd2259252c8807da8e179eaa9091f0a2a0ad",
    "Nombre": "Alberto Iván Francisco Robles Pantoja",
    "Nacio": "1956-10-04",
    "DiputadoId": 888
  },
  {
    "Id": "5a2b61efe371b51f60664ab83d2af0c58c8a1773",
    "Nombre": "Manuel Ernesto Rojas Molina",
    "Nacio": "1959-11-03",
    "DiputadoId": 889
  },
  {
    "Id": "e11e738197f06e0cf5744570c504bf0a908f30ba",
    "Nombre": "Fulvio Fabrizio Rossi Ciocca",
    "Nacio": "1970-09-30",
    "DiputadoId": 890,
    "Familia": {
      "Esposa": [
        {
          "Id": "41ea1dbc69614f729498098df01d26e5544945b4",
          "Nombre": "Carolina Monserrat Tohá Morales"
        }
      ]
    },
    "Militancias": [
      {
        "PartidoId": "PS",
        "Hasta": "2015-12-31T23:59:59"
      }, {
        "PartidoId": "IND",
        "Desde": "2016-01-01T00:00:00"
      }
    ]
  },
  {
    "Id": "203075b0247f44015a837d8cebbb08bfa15e1f04",
    "Nombre": "María Antonieta Saa Díaz",
    "Nacio": "1943-01-08",
    "DiputadoId": 892
  },
  {
    "Id": "d81e4324d1014d67e50dd949e46c21f2c1d499b4",
    "Nombre": "Eduardo José Saffirio Suárez",
    "Nacio": "1958-08-12",
    "DiputadoId": 894
  },
  {
    "Id": "37de92421fb89ba6b7704ee4c1fc94a3114e7c3c",
    "Nombre": "Felipe Santiago Salaberry Soto",
    "Nacio": "1966-01-09",
    "DiputadoId": 895
  },
  {
    "Id": "e820846626f1c301f7006900a5abc87752b6fcfa",
    "Nombre": "Alejandra Amalia Sepúlveda Orbenes",
    "Nacio": "1965-11-13",
    "DiputadoId": 897,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2002-03-11T00:00:00",
        "Hasta": "2006-03-10T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2006-03-11T00:00:00",
        "Hasta": "2010-03-10T23:59:59"
      },
      {
        "PartidoId": "PRI",
        "Desde": "2010-03-11T00:00:00",
        "Hasta": "2014-03-10T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2014-03-11T00:00:00",
        "Hasta": "2018-03-10T23:59:59"
      },
      {
        "PartidoId": "FREVS",
        "Desde": "2018-03-11T00:00:00",
        "Hasta": "2022-03-10T23:59:59"
      }
    ]
  },
  {
    "Id": "204ed206c178f5fb5d9216ad0f14e56cc421a5a0",
    "Nombre": "Laura Filomena Soto González",
    "Nacio": "1931-12-15",
    "DiputadoId": 899
  },
  {
    "Id": "941e75ee256d0d328ff9563c40e88b2b52ee9d4e",
    "Nombre": "Jorge Carlos Tarud Daccarett",
    "Nacio": "1953-07-19",
    "DiputadoId": 902
  },
  {
    "Id": "41ea1dbc69614f729498098df01d26e5544945b4",
    "Nombre": "Carolina Monserrat Tohá Morales",
    "Nacio": "1965-05-12",
    "DiputadoId": 903,
    "Familia": {
      "Marido": [
        {
          "Id": "e11e738197f06e0cf5744570c504bf0a908f30ba",
          "Nombre": "Fulvio Fabrizio Rossi Ciocca"
        }
      ]
    }
  },
  {
    "Id": "cc440cbcfb797a24497699647e2bc3e46b320c98",
    "Nombre": "Eugenio Tuma Zedan",
    "Nacio": "1945-07-29",
    "DiputadoId": 904,
    "Militancias": [
      {
        "PartidoId": "PPD"
      }
    ]
  },
  {
    "Id": "6f4729bb734a6ca4436e9f2e56583e1b16a6e133",
    "Nombre": "Jorge Iván Ulloa Aguillón",
    "Nacio": "1958-09-15",
    "DiputadoId": 906
  },
  {
    "Id": "91d97c3d30fd7b7d67d2623f1734e556e72d7a21",
    "Nombre": "Gonzalo Cristian Uriarte Herrera",
    "Nacio": "1964-12-28",
    "DiputadoId": 907
  },
  {
    "Id": "2c338c4bb71004d962aafc427beb11c50873aa73",
    "Nombre": "Ignacio Urrutia Bonilla",
    "Nacio": "1957-09-16",
    "DiputadoId": 908,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2002-03-11T00:00:00",
        "Hasta": "2019-04-23T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2019-04-24T00:00:00",
        "Hasta": "2019-11-16T23:59:59"
      },
      {
        "PartidoId": "PRC",
        "Desde": "2019-11-17T00:00:00"
      }
    ]
  },
  {
    "Id": "449e72cb31b10c1455768068658cb50662accee3",
    "Nombre": "Esteban Manuel Valenzuela Van Treek",
    "Nacio": "1964-03-12",
    "DiputadoId": 910
  },
  {
    "Id": "c822d5e5514ad803b25e683d1a5bbf1e5a3ae9b3",
    "Nombre": "Alfonso Guillermo José Vargas Lyng",
    "Nacio": "1951-12-16",
    "DiputadoId": 912
  },
  {
    "Id": "b520ff2f1956135306ec3da2837a5bf8a3906122",
    "Nombre": "Samuel Benito Venegas Rubio",
    "Nacio": "1938-04-01",
    "DiputadoId": 914
  },
  {
    "Id": "61e9ede6b9631c8a6c4c9f17111eb22a512a72c1",
    "Nombre": "Ximena Leonor Vidal Lázaro",
    "Nacio": "1955-01-01",
    "DiputadoId": 916
  },
  {
    "Id": "519abc66b27cb0e55563dcfdb006b069fe1ff25b",
    "Nombre": "Gastón Alejandro Von Mühlenbrock Zamora",
    "Nacio": "1954-12-26",
    "DiputadoId": 917,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2002-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "33a1d2981a5fda7a7b200a1463d2b4707cf66e8b",
    "Nombre": "Patricio Arturo Walker Prieto",
    "Nacio": "1969-04-28",
    "DiputadoId": 918,
    "Militancias": [
      {
        "PartidoId": "DC"
      }
    ]
  },
  {
    "Id": "41defd5c010955b2ea6758ba38a76abdb011a5af",
    "Nombre": "René Augusto Aedo Ormeño",
    "Nacio": "1960-02-04",
    "DiputadoId": 801
  },
  {
    "Id": "825005b83fdc6b7c2a9979be5d5034b7cb43ef1a",
    "Nombre": "René Osvaldo Alinco Bustos",
    "Nacio": "1958-06-02",
    "DiputadoId": 803,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2010-03-11T00:00:00",
        "Hasta": "2014-03-10T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2018-03-11T00:00:00"
      },
      {
        "PartidoId": "PPD",
        "Desde": "2006-03-11T00:00:00",
        "Hasta": "2010-03-10T23:59:59"
      }
    ]
  },
  {
    "Id": "0a175da8241d760c510462d8504a668db1969e08",
    "Nombre": "Gonzalo Enrique Arenas Hödar",
    "Nacio": "1972-12-13",
    "DiputadoId": 809
  },
  {
    "Id": "95fdf3dc2fff548a00a1878d988d39bc708380e0",
    "Nombre": "Sergio Bobadilla Muñoz",
    "Nacio": "1958-03-25",
    "DiputadoId": 815,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2006-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "7c8f365b1dd473b637ffba6f9e0111304f1efed3",
    "Nombre": "Francisco Javier Chahuán Chahuán",
    "Nacio": "1971-05-20",
    "DiputadoId": 820,
    "SenadorId": 986,
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "ed64df3d9777e1446a529dbdfb8bea43e0eda7f6",
    "Nombre": "Alfonso Arturo De Urresti Longton",
    "Nacio": "1966-03-07",
    "DiputadoId": 824,
    "SenadorId": 1115,
    "Militancias": [
      {
        "PartidoId": "PS"
      }
    ]
  },
  {
    "Id": "408e365d727326693228935c06274e05bb5a1140",
    "Nombre": "Rabindranath Vladimir Quinteros Lara",
    "Nacio": "1943-10-31",
    "SenadorId": 1116,
    "Militancias": [
      {
        "PartidoId": "PS"
      }
    ]
  },
  {
    "Id": "e755cf731369acba42c0694a84a90c61ae9be7ef",
    "Nombre": "Marcelo Eduardo Díaz Díaz",
    "Nacio": "1971-02-06",
    "DiputadoId": 827,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2006-03-11T00:00:00",
        "Hasta": "2010-03-10T23:59:59"
      },
      {
        "PartidoId": "PS",
        "Desde": "2010-03-11T00:00:00",
        "Hasta": "2014-03-10T23:59:59"
      },
      {
        "PartidoId": "PS",
        "Desde": "2018-03-11T00:00:00",
        "Hasta": "2020-01-13T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2020-01-14T00:00:00"
      }
    ]
  },
  {
    "Id": "91855993317acaf09009828577a3662ae867b027",
    "Nombre": "Gonzalo Alejandro Duarte Leiva",
    "Nacio": "1953-04-01",
    "DiputadoId": 829
  },
  {
    "Id": "4b3eb52f3cd401c5cb90470c9417d10195857aaa",
    "Nombre": "Edmundo Eluchans Urenda",
    "Nacio": "1950-01-21",
    "DiputadoId": 831
  },
  {
    "Id": "f7e8eff419abb80f9ad6e96135a25a9c232e60ce",
    "Nombre": "Marco Antonio Enríquez-Ominami Gumucio",
    "Nacio": "1973-06-12",
    "DiputadoId": 833
  },
  {
    "Id": "f34bee9e3d88745897ea34a00ad2f1856b7c8290",
    "Nombre": "Alvaro Escobar Rufatt",
    "Nacio": "1966-12-16",
    "DiputadoId": 835
  },
  {
    "Id": "227ec4b1da1e022496dd3113e215443805987038",
    "Nombre": "Marcos Andrés Espinosa Monardes",
    "Nacio": "1962-10-27",
    "DiputadoId": 836
  },
  {
    "Id": "f9ca0e1cb600303c1a3e6992867bd58754e84400",
    "Nombre": "Abraham Enrique Estay Peñaloza",
    "Nacio": "1958-03-30",
    "DiputadoId": 838
  },
  {
    "Id": "4217c32701d35e0a83ef22dc7ae5b3f1b356fe93",
    "Nombre": "Ramón Alberto Farías Ponce",
    "Nacio": "1955-08-23",
    "DiputadoId": 839
  },
  {
    "Id": "00105400b5bdac932cc77100aa217235f6a0223c",
    "Nombre": "Francisco Renán Fuentealba Vildósola",
    "Nacio": "1947-11-29",
    "DiputadoId": 841
  },
  {
    "Id": "89108421e37a779419e7f1fafbf07fa9ebce4de1",
    "Nombre": "Guido Juan Primo Girardi Briere",
    "Nacio": "1934-11-17",
    "DiputadoId": 845,
    "Militancias": [
      {
        "PartidoId": "PPD"
      }
    ]
  },
  {
    "Id": "e0d34af26cbf6cf0b243f260a7583a81851b3b17",
    "Nombre": "Joaquín Godoy Ibáñez",
    "Nacio": "1977-01-25",
    "DiputadoId": 846
  },
  {
    "Id": "626a0c585f5d43482617a5b88eb0da4b56bb63ce",
    "Nombre": "Carolina Goic Boroevic",
    "Nacio": "1972-12-20",
    "DiputadoId": 847,
    "SenadorId": 1113,
    "Militancias": [
      {
        "PartidoId": "DC"
      }
    ]
  },
  {
    "Id": "957bf5a25758100a77fd525a3a2de1f75b19121e",
    "Nombre": "María Amelia Herrera Silva",
    "Nacio": "1950-08-25",
    "DiputadoId": 851
  },
  {
    "Id": "8976edbf365789ac91e9830ce5dbdf865e0a737d",
    "Nombre": "Jorge Insunza Gregorio de las Heras",
    "Nacio": "1967-02-12",
    "DiputadoId": 852
  },
  {
    "Id": "d2622c9f90697b2175326d61c58f81a58cfc1cfc",
    "Nombre": "Marta Eliana Isasi Barbieri",
    "Nacio": "1966-01-15",
    "DiputadoId": 853
  },
  {
    "Id": "a2817b6396ba02d9bb48d6f378ee96a05d02e38a",
    "Nombre": "Tucapel Francisco Jiménez Fuentes",
    "Nacio": "1962-09-01",
    "DiputadoId": 856,
    "Militancias": [
      {
        "PartidoId": "PPD",
        "Desde": "2006-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "aad9cec89c403f1b741ae8c25b457596b5e6c247",
    "Nombre": "Juan Carlos Latorre Carmona",
    "Nacio": "1949-03-29",
    "DiputadoId": 858
  },
  {
    "Id": "487177432aa32631f71ccbcf48a94e3bde36d88b",
    "Nombre": "Juan Ignacio Latorre Riveros",
    "Nacio": "1978-03-24",
    "SenadorId": 1216,
    "Militancias": [
      {
        "PartidoId": "RD"
      }
    ]
  },
  {
    "Id": "404_49",
    "Nombre": "Kenneth Peter Pugh Olavarría",
    "Nacio": "1959-10-22",
    "SenadorId": 1217,
    "Militancias": [
      {
        "PartidoId": "IND"
      }
    ]
  },
  {
    "Id": "7ac0d7c52c34a4552fe8259b8584cd413348c800",
    "Nombre": "Roberto Eduardo León Ramírez",
    "Nacio": "1951-02-11",
    "DiputadoId": 860
  },
  {
    "Id": "404_08",
    "Nombre": "Juan Lobos Krause",
    "Nacio": "1960-12-05",
    "Murio": "2011-04-11",
    "DiputadoId": 861
  },
  {
    "Id": "f1ae04fac2e4b153570222f954e0c11c5907225a",
    "Nombre": "Cristián Monckeberg Bruner",
    "Nacio": "1968-05-12",
    "DiputadoId": 867,
    "Familia": {
      "Esposa": [
        {
          "Id": "74c950490073348916b9dc5977bb086e41c4ba47",
          "Nombre": "Paulina Andrea Núñez Urrutia"
        }
      ]
    }
  },
  {
    "Id": "e700be824ab5bf0d0a3575b05c746a02723ab3f3",
    "Nombre": "Manuel Zacarías Monsalve Benavides",
    "Nacio": "1965-06-09",
    "DiputadoId": 869,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2006-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "23e713eba38b4979dc0c40efae89d9edd6df3187",
    "Nombre": "Claudia Andrea Nogueira Fernández",
    "Nacio": "1969-11-26",
    "DiputadoId": 874
  },
  {
    "Id": "ce746a01a9b7f3614359f1c0b0f08a95298d76e7",
    "Nombre": "Marco Antonio Núñez Lozano",
    "Nacio": "1966-09-02",
    "DiputadoId": 876
  },
  {
    "Id": "c463730de40457f774be2ce6a730ff33346f6d86",
    "Nombre": "Clemira Hugolina Pacheco Rivas",
    "Nacio": "1961-05-05",
    "DiputadoId": 880
  },
  {
    "Id": "e9076ed6fda4c65cd6d3894b77e0d609d4820cb9",
    "Nombre": "Denise Simone Pascal Allende",
    "Nacio": "1940-07-19",
    "DiputadoId": 883
  },
  {
    "Id": "22ce406aff662960edc5f13f58bfb5ff61b908ab",
    "Nombre": "Karla Elizabeth Rubilar Barahona",
    "Nacio": "1977-04-17",
    "DiputadoId": 891
  },
  {
    "Id": "a12f8cf07d3ab513104e8f6b383d93c89b318b62",
    "Nombre": "Jorge Eduardo Sabag Villalobos",
    "Nacio": "1963-12-26",
    "DiputadoId": 893,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2006-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "762e48a896ef57b708fede9b67c65bb449dac3c7",
    "Nombre": "Roberto Eduardo Sepúlveda Hermosilla",
    "Nacio": "1955-08-17",
    "DiputadoId": 896
  },
  {
    "Id": "218150a8a96f0e5437478186276888a6433ac681",
    "Nombre": "Gabriel Moisés Silber Romo",
    "Nacio": "1976-09-15",
    "DiputadoId": 898,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2006-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "6126fe92f78af135678e48187a6df58c7f965379",
    "Nombre": "Alejandro Miguel Anselmo Sule Fernández",
    "Nacio": "1960-11-30",
    "DiputadoId": 900
  },
  {
    "Id": "0abe57018ea404b5fdf4a0228f26b8ff3169a915",
    "Nombre": "Raúl Fernando Sunico Galdames",
    "Nacio": "1964-07-28",
    "DiputadoId": 901
  },
  {
    "Id": "03142f95932fd85a45ade8101b901f27c59e8aed",
    "Nombre": "Marisol Turres Figueroa",
    "Nacio": "1964-07-13",
    "DiputadoId": 905
  },
  {
    "Id": "cd93a0502f016b53dc16adbd64663da095635549",
    "Nombre": "Ximena Verónica Valcarce Becerra",
    "Nacio": "1973-03-25",
    "DiputadoId": 909
  },
  {
    "Id": "1b2008c416a41d6e6a8274852e2934fa6c882150",
    "Nombre": "Patricio Iván Vallespín López",
    "Nacio": "1964-04-24",
    "DiputadoId": 911
  },
  {
    "Id": "f0f3465b23d7ea49e1782d8f8b63ac80ac07fb09",
    "Nombre": "Mario Venegas Cárdenas",
    "Nacio": "1957-12-03",
    "DiputadoId": 913,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2006-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "2e8a3f535f96bc477802633120c2bb25eb03e7a6",
    "Nombre": "José Germán Verdugo Soto",
    "Nacio": "1948-10-05",
    "DiputadoId": 915
  },
  {
    "Id": "dd421289b2dae2249cde9d1539d9207c7bddf763",
    "Nombre": "Felipe Andrés Ward Edwards",
    "Nacio": "1972-09-14",
    "DiputadoId": 919
  },
  {
    "Id": "3813777d3972b00b1c6bc94e0b6d32309b365807",
    "Nombre": "Marcelo Gastón Schilling Rodríguez",
    "Nacio": "1949-05-18",
    "DiputadoId": 920,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2008-08-12T00:00:00"
      }
    ]
  },
  {
    "Id": "533ab43952c3ae9143ef644e458fa8fb2f981913",
    "Nombre": "Felipe Harboe Bascuñán",
    "Nacio": "1972-07-20",
    "DiputadoId": 922,
    "SenadorId": 1114,
    "Militancias": [
      {
        "PartidoId": "PPD"
      }
    ]
  },
  {
    "Id": "1159e65598e59f1bbd7457782c46a56ee13e2041",
    "Nombre": "Pedro Pablo Alvarez-Salamanca Ramírez",
    "Nacio": "1976-02-18",
    "DiputadoId": 923,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "354bbe40cc5c8ea7ee0fb4228fd8a41cb9df6599",
    "Nombre": "Osvaldo Raúl Andrade Lara",
    "Nacio": "1953-06-02",
    "DiputadoId": 924
  },
  {
    "Id": "14a3a1b6a97c9700fe202990520cc1e32d29725a",
    "Nombre": "Pepe Auth Stewart",
    "Nacio": "1957-03-06",
    "DiputadoId": 925,
    "Militancias": [
      {
        "PartidoId": "PPD",
        "Desde": "2010-03-11T00:00:00",
        "Hasta": "2014-03-10T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2018-03-11T00:00:00"
      },
      {
        "PartidoId": "IND",
        "Desde": "2017-03-21T00:00:00",
        "Hasta": "2018-03-10T23:59:59"
      },
      {
        "PartidoId": "PPD",
        "Desde": "2014-03-11T00:00:00",
        "Hasta": "2017-03-20T23:59:59"
      }
    ]
  },
  {
    "Id": "c3ff25045877426130b60c04c5916e1e4ff9e822",
    "Nombre": "Nino Baltolu Rasera",
    "Nacio": "1953-09-28",
    "DiputadoId": 926,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "d214a925db83d1b0cc448fd5f8ae6c3e806d3cd5",
    "Nombre": "Giovanni Calderón Bassi",
    "Nacio": "1971-07-08",
    "DiputadoId": 928
  },
  {
    "Id": "f69961782fbdc6daf3534dba46b7939c39b43a2b",
    "Nombre": "Carlos Cristián Campos Jara",
    "Nacio": "1972-11-18",
    "DiputadoId": 929
  },
  {
    "Id": "9faae9e739db27b013d70406ec1c6d067d1b3023",
    "Nombre": "Lautaro César Carmona Soto",
    "Nacio": "1952-04-26",
    "DiputadoId": 930
  },
  {
    "Id": "ffcb123af9eb4104d0248db7080ae9598b4ee8c4",
    "Nombre": "Juan Luis Castro González",
    "Nacio": "1960-04-18",
    "DiputadoId": 931,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "f593cbfa24c461494d373bc0a0b431364345fe07",
    "Nombre": "Eduardo Antonio Cerda García",
    "Nacio": "1933-01-01",
    "DiputadoId": 932
  },
  {
    "Id": "33803c45f2b401ba15698c5cb47067942269f8f5",
    "Nombre": "Fuad Chahin Valenzuela",
    "Nacio": "1976-12-01",
    "DiputadoId": 934
  },
  {
    "Id": "7d90e0b1b78dffa67aafc7f6aaaac6dd35db08d2",
    "Nombre": "José Manuel Rojo Edwards Silva",
    "Nacio": "1977-07-15",
    "DiputadoId": 935
  },
  {
    "Id": "c851d86d80b79fca54d1f42b091425920386bd16",
    "Nombre": "Cristina Girardi Lavín",
    "Nacio": "1962-01-09",
    "DiputadoId": 936,
    "Militancias": [
      {
        "PartidoId": "PPD",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "4014db182a90735941e77289b7c73b9f724f8a24",
    "Nombre": "Hugo Humberto Gutiérrez Gálvez",
    "Nacio": "1961-10-05",
    "DiputadoId": 937,
    "Militancias": [
      {
        "PartidoId": "PC",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "8ab21be259db2d874842d0c955ac7a3f8dcf4ca2",
    "Nombre": "Romilio Gutiérrez Pino",
    "Nacio": "1962-02-17",
    "DiputadoId": 938
  },
  {
    "Id": "9085ba5bb5ae21c6cba63c38bbfb0a8a168cd6fe",
    "Nombre": "María José Hoffmann Opazo",
    "Nacio": "1976-12-28",
    "DiputadoId": 940,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "3f6633b0b0dc461e790bc31c743aad12a64b3661",
    "Nombre": "Luis Segundo Lemus Aracena",
    "Nacio": "1961-12-23",
    "DiputadoId": 941
  },
  {
    "Id": "a3ea8b261f99d706f7b2495eee00f66dff1124bd",
    "Nombre": "Javier Ignacio Macaya Danús",
    "Nacio": "1978-11-11",
    "DiputadoId": 942,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "1497ab3f6ec400a61aedf93165427a7bc62c810b",
    "Nombre": "Miodrag Arturo Marinovic Solo de Zaldívar",
    "Nacio": "1967-01-07",
    "DiputadoId": 943
  },
  {
    "Id": "0366831ccfef44f300d4d68fea448f1be4657c20",
    "Nombre": "Celso René Morales Muñoz",
    "Nacio": "1957-07-10",
    "DiputadoId": 945,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "4a4e216254987bb1b1a44c6b6e6ed3705a9a9e20",
    "Nombre": "Leopoldo Alfredo Pérez Lahsen",
    "Nacio": "1957-03-28",
    "DiputadoId": 946,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "e7e7e09f2b80d23faf4166af614478acbbf66e82",
    "Nombre": "Ricardo Enrique Rincón González",
    "Nacio": "1966-03-22",
    "DiputadoId": 947
  },
  {
    "Id": "3455d9899f8888ea5580b64835cda9f109e897be",
    "Nombre": "Ximena Cecilia Rincón González",
    "Nacio": "1968-07-05",
    "SenadorId": 1009,
    "Militancias": [
      {
        "PartidoId": "DC"
      }
    ]
  },
  {
    "Id": "9ceb0bd5cae62fa5bf13286dd13698206ecd6fc7",
    "Nombre": "Gaspar Alberto Rivas Sánchez",
    "Nacio": "1978-05-17",
    "DiputadoId": 948
  },
  {
    "Id": "6129caaea5a8c211449dfe4fad4aa0d0f1f56177",
    "Nombre": "Marcela Constanza Sabat Fernández",
    "Nacio": "1981-04-04",
    "DiputadoId": 949,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "a4bd09f20ba59fbe8a9dae8cf6bb95e800237d56",
    "Nombre": "Juan Alejandro Santana Tirachini",
    "Nacio": "1965-07-18",
    "DiputadoId": 952,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "581f60584c1461bcea09cc3bd8e458c26e591dd9",
    "Nombre": "Frank Carlos Sauerbaum Muñoz",
    "Nacio": "1972-11-21",
    "DiputadoId": 953,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "5aed7dd6709bdec9a5c4ad127375ee8a2900ba94",
    "Nombre": "Ernesto Silva Méndez",
    "Nacio": "1975-08-15",
    "DiputadoId": 954
  },
  {
    "Id": "5df3c245625b6aa2a15c7fb4544433af506e77fe",
    "Nombre": "Luis Arturo Squella Ovalle",
    "Nacio": "1978-09-25",
    "DiputadoId": 955
  },
  {
    "Id": "f3c5b38778c9994c1e60e05aaeb056e905e49834",
    "Nombre": "Víctor Torres Jeldes",
    "Nacio": "1975-10-11",
    "DiputadoId": 957,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "8f687dbb159434410c793e9c32f0a604f819ad67",
    "Nombre": "Joaquín Tuma Zedan",
    "Nacio": "1941-07-09",
    "DiputadoId": 958
  },
  {
    "Id": "18e45149981258ad04537dd80114d866a0626d73",
    "Nombre": "Enrique Van Rysselberghe Herrera",
    "Nacio": "1976-09-17",
    "DiputadoId": 959,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "ec007ed1d15521092c3eadd43cb81410267177eb",
    "Nombre": "Orlando Severo Vargas Pizarro",
    "Nacio": "1952-07-13",
    "DiputadoId": 960
  },
  {
    "Id": "5395ad654bbc4bd870f11078c3c91185d893af03",
    "Nombre": "Matías Vicente Walker Prieto",
    "Nacio": "1973-07-19",
    "DiputadoId": 963,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2010-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "d90bc5faa6707d6c67716fe544b5643d5cdff97c",
    "Nombre": "Mónica Beatriz Zalaquett Said",
    "Nacio": "1962-05-04",
    "DiputadoId": 964
  },
  {
    "Id": "a47a2bafbd85abf2cf7134d93cc26983e6cb9902",
    "Nombre": "Mario Alberto Acuña Cisternas",
    "Nacio": "1951-09-26",
    "DiputadoId": 1
  },
  {
    "Id": "39524e6919a31d9a1d1fd3a7a89fd7c40af0afdd",
    "Nombre": "Carmen Gloria Aravena Acuña",
    "Nacio": "1967-01-06",
    "SenadorId": 1221,
    "Militancias": [
      {
        "PartidoId": "IND"
      }
    ]
  },
  {
    "Id": "0d234f22bb83124348e13bbf6baada186f3fb3ba",
    "Nombre": "Gustavo Alessandri Valdés",
    "Nacio": "1929-04-30",
    "Murio": "2017-07-18",
    "DiputadoId": 3
  },
  {
    "Id": "0d2080ec1b3812ae0e537db6374349240abb660a",
    "Nombre": "Nelson Jaime Avila Contreras",
    "Nacio": "1942-11-29",
    "DiputadoId": 10
  },
  {
    "Id": "aa96f70d14ac2fdd43fb7a1f034d992d4bd11d15",
    "Nombre": "Carlos Caminondo Sáez",
    "Nacio": "1937-12-28",
    "DiputadoId": 15
  },
  {
    "Id": "df2e563fec34c046ac79f34ef5b57c4173315900",
    "Nombre": "Juan Antonio Coloma Correa",
    "Nacio": "1956-07-15",
    "DiputadoId": 19,
    "SenadorId": 687,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "7d38f3cf1f368a7d0a7932b9442ae32341a07c31",
    "Nombre": "Sergio Benedicto Elgueta Barrientos",
    "Nacio": "1933-02-04",
    "DiputadoId": 27
  },
  {
    "Id": "eac42f3fa0fb1bd04e04ff7fcf5e056d13b8c1b3",
    "Nombre": "Alberto Miguel Espina Otero",
    "Nacio": "1956-11-04",
    "DiputadoId": 30,
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "f2a67e42a8bd881f0a2453fd1bc3b0eb53ff8292",
    "Nombre": "José Gilberto García Ruminot",
    "Nacio": "1955-05-22",
    "DiputadoId": 35,
    "SenadorId": 690,
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "2dbfaf90f4db592bed429b97f7fa6408b47a64fe",
    "Nombre": "Juan Enrique Fernando Krauss Rusque",
    "Nacio": "1932-01-08",
    "DiputadoId": 50
  },
  {
    "Id": "13d40340bc7b2c25834286cf47dabc88e024a320",
    "Nombre": "Iván Mesías Lehú",
    "Nacio": "1935-04-03",
    "DiputadoId": 65
  },
  {
    "Id": "dee4c71dda15e211e8a79a0fa47c6fbb36b0db32",
    "Nombre": "Gastón Luis Pareto González",
    "Nacio": "1928-08-29",
    "DiputadoId": 85
  },
  {
    "Id": "defe16917a16276ae3bb8ec7a22fcf566183335e",
    "Nombre": "Marina Victoria Prochelle Aguilar",
    "Nacio": "1941-12-09",
    "DiputadoId": 92
  },
  {
    "Id": "241ee9e0147b97224fd6edbec75a16eb7944e6c5",
    "Nombre": "Baldo Petar Prokuriça Prokuriça",
    "Nacio": "1958-07-02",
    "DiputadoId": 93,
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "c20c3a91314d330890465809ad0cb4e15e12c52e",
    "Nombre": "Víctor Fernando Reyes Alvarado",
    "Nacio": "1945-07-02",
    "DiputadoId": 95
  },
  {
    "Id": "92ffb2ad6b48785f6210fba9faa949fadc9486c7",
    "Nombre": "Antonella Sciaraffia Estrada",
    "Nacio": "1966-02-03",
    "DiputadoId": 103
  },
  {
    "Id": "cc296f226cb3737db9fedcce737f4861fe00856e",
    "Nombre": "Salvador Pedro Urrutia Cárdenas",
    "Nacio": "1942-07-07",
    "DiputadoId": 110
  },
  {
    "Id": "7c8a4f5c3c3eb3fb810097e523f27de6de5fe7b1",
    "Nombre": "Jacqueline Van Rysselberghe Herrera",
    "Nacio": "1965-02-03",
    "SenadorId": 1112,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "404_09",
    "Nombre": "Enrique Van Rysselberghe Varela",
    "Nacio": "1937-04-04",
    "DiputadoId": 112,
    "Familia": {
      "Hijos": [
        {
          "Id": "18e45149981258ad04537dd80114d866a0626d73",
          "Nombre": "Enrique Van Rysselberghe Herrera"
        },
        {
          "Id": "7c8a4f5c3c3eb3fb810097e523f27de6de5fe7b1",
          "Nombre": "Jacqueline Van Rysselberghe Herrera"
        }
      ]
    }
  },
  {
    "Id": "c5351013dd25d571fd373ef214c734856fdd5f1c",
    "Nombre": "Ignacio Walker Prieto",
    "Nacio": "1956-01-01",
    "DiputadoId": 119,
    "Militancias": [
      {
        "PartidoId": "DC"
      }
    ]
  },
  {
    "Id": "d360a0ee40199b7873c368e255fea01e8399aa01",
    "Nombre": "Rafael Luis Arratia Valdebenito",
    "Nacio": "1946-05-12",
    "DiputadoId": 8
  },
  {
    "Id": "404_48",
    "Nombre": "Manuel Bustos Huerta",
    "Nacio": "1943-12-02",
    "Murio": "1999-09-27",
    "DiputadoId": 13
  },
  {
    "Id": "404_10",
    "Nombre": "Haroldo Fossa Rojas",
    "Nacio": "1935-08-19",
    "Murio": "2006-09-07",
    "DiputadoId": 31
  },
  {
    "Id": "404_11",
    "Nombre": "Homero Gutiérrez Román",
    "Nacio": "1929-10-13",
    "DiputadoId": 39
  },
  {
    "Id": "875b7552f8c510f100222eb80bb1d3d2a054e326",
    "Nombre": "Francisco Segundo Huenchumilla Jaramillo",
    "Nacio": "1944-03-22",
    "DiputadoId": 43,
    "SenadorId": 1222,
    "Militancias": [
      {
        "PartidoId": "DC"
      }
    ]
  },
  {
    "Id": "0f70fcd106f0228c66322680324d9c27da47e4f3",
    "Nombre": "José Tomás Jocelyn-Holt Letelier",
    "Nacio": "1963-01-16",
    "DiputadoId": 49
  },
  {
    "Id": "d575aa412197eefafbbfd8a3828fb316908278b5",
    "Nombre": "Gutenberg Alejandro Martínez Ocamica",
    "Nacio": "1950-08-29",
    "DiputadoId": 62
  },
  {
    "Id": "ad6aaec6aa4629aba89485e145b1e223d64cb47b",
    "Nombre": "Jaime Naranjo Ortiz",
    "Nacio": "1951-01-12",
    "DiputadoId": 74,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "1990-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "404_47",
    "Nombre": "Joaquín Palma Irarrázaval",
    "Nacio": "1943-02-02",
    "Murio": "2013-08-17",
    "DiputadoId": 84
  },
  {
    "Id": "81accc2670f24b6f988b95ec84cdb629094f9d62",
    "Nombre": "Fanny Sonnia Pollarolo Villa",
    "Nacio": "1935-03-07",
    "DiputadoId": 91
  },
  {
    "Id": "751caf683988f0242193eff50c04f116ba1c1e6f",
    "Nombre": "Felipe Valenzuela Herrera",
    "Nacio": "1941-10-08",
    "DiputadoId": 111
  },
  {
    "Id": "404_13",
    "Nombre": "Osvaldo Vega Vera",
    "Nacio": "1928-07-24",
    "Murio": "2006-03-01",
    "DiputadoId": 114
  },
  {
    "Id": "13fd133063a4a6febc9fb9618499f442cf80dbc2",
    "Nombre": "Andrés Jaime Palma Irarrázaval",
    "Nacio": "1955-07-21",
    "DiputadoId": 83
  },
  {
    "Id": "404_14",
    "Nombre": "Jaime Rocha Manrique",
    "Nacio": "1938-11-04",
    "Murio": "2012-10-01",
    "DiputadoId": 98
  },
  {
    "Id": "3e2d5707e8537d90f2541d14c79daa330e0caee1",
    "Nombre": "Sergio Velasco De la Cerda",
    "Nacio": "1945-12-21",
    "DiputadoId": 115
  },
  {
    "Id": "f58852b4a7425ed142b898c99399c221ce1c6d53",
    "Nombre": "Juan Ramón Núñez Valenzuela",
    "Nacio": "1943-10-18",
    "DiputadoId": 76
  },
  {
    "Id": "404_15",
    "Nombre": "María Rozas Velásquez",
    "Nacio": "1955-11-08",
    "Murio": "2011-05-06",
    "DiputadoId": 121
  },
  {
    "Id": "6d12f047a5200eed5c4289cf422430b79853b9cb",
    "Nombre": "José Miguel Hernández Saffirio",
    "Nacio": "1949-07-18",
    "DiputadoId": 42
  },
  {
    "Id": "9927ee7af4a7ad0d278d3a5775ce1e4fc7e0a5f5",
    "Nombre": "José Luis Monge Sánchez",
    "Nacio": "1948-09-20",
    "DiputadoId": 67
  },
  {
    "Id": "d4c9d5effea8e506a26efd5d45812d2fe9b03188",
    "Nombre": "Gerardo José María Hurtado Ruiz-Tagle",
    "Nacio": "1945-03-05",
    "Murio": "2018-09-24",
    "DiputadoId": 448
  },
  {
    "Id": "404_16",
    "Nombre": "Octavio Jara Wolff",
    "Nacio": "1944-07-22",
    "Murio": "2001-12-30",
    "DiputadoId": 449
  },
  {
    "Id": "d84732d8110e4a6198819757e19686b4a8748975",
    "Nombre": "Edmundo Segundo Salas De La Fuente",
    "Nacio": "1935-09-09",
    "DiputadoId": 220
  },
  {
    "Id": "235405d0d7560bf7f8ee1472f672a8f71994742e",
    "Nombre": "Evelyn Rose Matthei Fornet",
    "Nacio": "1953-11-11",
    "DiputadoId": 467
  },
  {
    "Id": "eeab87c911ff41072d779ccfb432a53d6ca92c52",
    "Nombre": "Eugenio Fernando Munizaga Rodríguez",
    "Nacio": "1941-04-06",
    "Murio": "2018-05-11",
    "DiputadoId": 472
  },
  {
    "Id": "404_17",
    "Nombre": "Armando Arancibia Calderón",
    "Nacio": "1941-01-06",
    "Murio": "2016-02-24",
    "DiputadoId": 407
  },
  {
    "Id": "c8c4b6eb68f77a4d1bce8781e7faada9e00a1f81",
    "Nombre": "Andrés Aylwin Azocar",
    "Nacio": "1925-06-20",
    "Murio": "2018-08-20",
    "DiputadoId": 410
  },
  {
    "Id": "5454d201e4e3ccd03fd080b12cdb817f8b84d280",
    "Nombre": "Carlos Ramón Juan Bombal Otaegui",
    "Nacio": "1950-11-26",
    "DiputadoId": 415
  },
  {
    "Id": "f8931b8cfec52e09148afca81a3a5d5c8d468f4a",
    "Nombre": "Carlos Raúl Cantero Ojeda",
    "Nacio": "1956-11-11",
    "DiputadoId": 417
  },
  {
    "Id": "5e9d4c94963b6c8f703e4626b86ca322f81e0a0b",
    "Nombre": "Carlos Emilio Dupré Silva",
    "Nacio": "1944-01-12",
    "DiputadoId": 426
  },
  {
    "Id": "521f0a43365137f100cb811bf9f7c5bb215cd9e2",
    "Nombre": "Ramón Julio Elizalde Hevia",
    "Nacio": "1940-02-25",
    "DiputadoId": 428
  },
  {
    "Id": "a450d1bd3674a5b12f787a0875cda8b1e2bb0e74",
    "Nombre": "Álvaro Antonio Elizalde Soto",
    "Nacio": "1969-10-15",
    "SenadorId": 1219,
    "Militancias": [
      {
        "PartidoId": "PS"
      }
    ]
  },
  {
    "Id": "23fe2cf5a5526ab59545f244f1c92188efdea416",
    "Nombre": "Jaime Luis Estévez Valencia",
    "Nacio": "1946-09-27",
    "DiputadoId": 433
  },
  {
    "Id": "404_18",
    "Nombre": "Miguel Angel Fantuzzi Hernández",
    "Nacio": "1940-06-12",
    "Murio": "2002-12-06",
    "DiputadoId": 434
  },
  {
    "Id": "213d3307c49f31893ae772c83d8da4e2d8de2182",
    "Nombre": "Rubén Gajardo Chacón",
    "Nacio": "1936-04-26",
    "DiputadoId": 437
  },
  {
    "Id": "dd1cd2ca4caebfd3f7c949d904c8d8cde511fe14",
    "Nombre": "Teodoro Javier Ribera Neumann",
    "Nacio": "1958-05-25",
    "DiputadoId": 491
  },
  {
    "Id": "d66daeb940f0247885c5efd49bab6f6c3ddfb9ee",
    "Nombre": "Claudio Rodríguez Cataldo",
    "Nacio": "1954-09-24",
    "DiputadoId": 493
  },
  {
    "Id": "d3b74ff5e6360500c52178f6081b00d2c196b87b",
    "Nombre": "Hosaín Sabag Castillo",
    "Nacio": "1937-05-05",
    "DiputadoId": 495
  },
  {
    "Id": "77b8885c62393f455ac28aeb66954b3118efc925",
    "Nombre": "Jorge Jaime Schaulsohn Brodsky",
    "Nacio": "1952-12-22",
    "DiputadoId": 497
  },
  {
    "Id": "770b55b1de6665510992f5b6be7b161b9aca7629",
    "Nombre": "Vicente Agustín Sota Barros",
    "Nacio": "1924-04-28",
    "Murio": "2017-08-16",
    "DiputadoId": 502
  },
  {
    "Id": "d3172a1ac1db6cdc7888a6c382524150d657f16c",
    "Nombre": "Juan Enrique Taladriz García",
    "Nacio": "1946-03-03",
    "DiputadoId": 503
  },
  {
    "Id": "404_19",
    "Nombre": "Isidoro Tohá González",
    "Nacio": "1929-01-24",
    "Murio": "2007-06-16",
    "DiputadoId": 504
  },
  {
    "Id": "0721cd1f01270dfb6c1d136ec7a75264e0e6d2b1",
    "Nombre": "Raúl Armando Urrutia Avila",
    "Nacio": "1950-05-01",
    "DiputadoId": 507
  },
  {
    "Id": "651d6adfea7a8108b1d8c0beac5bab33288886bb",
    "Nombre": "Carlos Raúl Valcarce Medina",
    "Nacio": "1950-04-26",
    "DiputadoId": 509
  },
  {
    "Id": "b062fa5ff56e0aea818d06cdcf6c703cd090ad10",
    "Nombre": "José Antonio César Bernardo del Carmen Viera-Gallo Quesney",
    "Nacio": "1943-12-02",
    "DiputadoId": 514
  },
  {
    "Id": "3887990645f3868ffc5e09772891ff4d86d650b8",
    "Nombre": "Andrés Allamand Zavala",
    "Nacio": "1956-02-07",
    "DiputadoId": 405,
    "SenadorId": 905,
    "Familia": {
      "Esposa": [
        {
          "Id": "61fb9b9d34a0f8c6a82cac1183c8224f0a459f91",
          "Nombre": "Marcela Cubillos Sigall"
        }
      ]
    },
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "6e1b1a4eb84f9586d5220aa68c8d07481b41dc23",
    "Nombre": "Laura Mariana Aylwin Oyarzún",
    "Nacio": "1949-06-13",
    "DiputadoId": 411
  },
  {
    "Id": "404_20",
    "Nombre": "Ignacio Balbontín Arteaga",
    "Nacio": "1940-06-18",
    "Murio": "2015-08-18",
    "DiputadoId": 412
  },
  {
    "Id": "0c07ae0e2d1efbd1bc5277129e85f514f3d9edd2",
    "Nombre": "Iván Alfonso De la Maza Maillet",
    "Nacio": "1940-10-18",
    "DiputadoId": 425
  },
  {
    "Id": "850157b8c8690800b43fa2daad3adde4f66c42aa",
    "Nombre": "Luis Valentín Ferrada Valenzuela",
    "Nacio": "1948-09-28",
    "DiputadoId": 435
  },
  {
    "Id": "154b107aa5312951817279407489f8e935640fc1",
    "Nombre": "Harry Rolando Jürgensen Caesar",
    "Nacio": "1942-05-30",
    "DiputadoId": 452
  },
  {
    "Id": "d7ecdce6e8befb2cea4409f2be4622cb33edde04",
    "Nombre": "José Amador Makluf Campos",
    "Nacio": "1942-06-20",
    "DiputadoId": 463
  },
  {
    "Id": "9c0f9843c0db5f78cc5988a006475837c41cd50b",
    "Nombre": "Valentín Jesús Solís Cabezas",
    "Nacio": "1959-11-24",
    "DiputadoId": 500
  },
  {
    "Id": "c6f05b4ee5744abd8b5c57b30abd76ab2fdf74f9",
    "Nombre": "Erick Alonso Villegas González",
    "Nacio": "1953-11-11",
    "DiputadoId": 516
  },
  {
    "Id": "67c743f5c6beba6623bb779a4fb20fa96ca7d7ce",
    "Nombre": "Martita Elvira Alemania Wörner Tapia",
    "Nacio": "1947-01-18",
    "DiputadoId": 519
  },
  {
    "Id": "404_21",
    "Nombre": "Héctor Zambrano Opazo",
    "Nacio": "1939-04-16",
    "DiputadoId": 520
  },
  {
    "Id": "9cd4b2e87abf986cdcede3bec2f639784f14976c",
    "Nombre": "Hugo Alamos Vásquez",
    "Nacio": "1932-08-22",
    "DiputadoId": 603
  },
  {
    "Id": "8dd3626c71993fe0e2649a59a07d9d4b723a0f06",
    "Nombre": "Gustavo Alessandri Balmaceda",
    "Nacio": "1961-03-08",
    "DiputadoId": 604
  },
  {
    "Id": "789155ed418bca597b6e38123206bb631cb9be19",
    "Nombre": "Carlos Hernán Bosselin Correa",
    "Nacio": "1943-12-31",
    "DiputadoId": 612
  },
  {
    "Id": "f15d6b21e17f7b86c35d3f47199ac9ac29b69c20",
    "Nombre": "Jaime Alfonso Campos Quiroga",
    "Nacio": "1953-02-16",
    "DiputadoId": 614
  },
  {
    "Id": "404_22",
    "Nombre": "Gustavo Cardemil Alfaro",
    "Nacio": "1920-04-10",
    "Murio": "2008-07-11",
    "DiputadoId": 617
  },
  {
    "Id": "f3749d01b2c178bb0afbe6700190adce3ca62cee",
    "Nombre": "Baldemar Carrasco Muñoz",
    "Nacio": "1931-09-24",
    "DiputadoId": 618
  },
  {
    "Id": "3c1c434b45781214aea237cf16e8e1a5028931f4",
    "Nombre": "Mario Enrique Devaud Ojeda",
    "Nacio": "1955-08-23",
    "DiputadoId": 626
  },
  {
    "Id": "5181292982e4a7b4082edeb9a0617dbbeeeedb10",
    "Nombre": "Dionisio Ventura Faulbaum Mayorga",
    "Nacio": "1961-01-30",
    "DiputadoId": 634
  },
  {
    "Id": "0525edf0aa884c2454585a1cb10dd85c21bb4b1d",
    "Nombre": "Juan Pedro Guzmán Alvarez",
    "Nacio": "1943-12-30",
    "DiputadoId": 639
  },
  {
    "Id": "09a9a595e2d9b1d760686a8d83a124d38cad765c",
    "Nombre": "Antonio Carlos Horvath Kiss",
    "Nacio": "1950-01-03",
    "Murio": "2018-05-23",
    "DiputadoId": 641
  },
  {
    "Id": "404_23",
    "Nombre": "Claudio Huepe García",
    "Nacio": "1939-12-25",
    "Murio": "2009-05-11",
    "DiputadoId": 643
  },
  {
    "Id": "70ae7a720c89d696f8d35fb2e30d4ecbf1edc098",
    "Nombre": "Sergio Raúl Jara Catalán",
    "Nacio": "1946-10-09",
    "DiputadoId": 645
  },
  {
    "Id": "45289cddc8295fab47baa0a362d0713fc218d8a3",
    "Nombre": "Vladislav Dusan Kuzmicic Calderón",
    "Nacio": "1945-10-23",
    "DiputadoId": 649
  },
  {
    "Id": "404_24",
    "Nombre": "María Maluenda Campos",
    "Nacio": "1920-03-06",
    "Murio": "2011-08-29",
    "DiputadoId": 656
  },
  {
    "Id": "404_25",
    "Nombre": "Juan Martínez Sepúlveda",
    "Nacio": "1943-09-25",
    "DiputadoId": 658
  },
  {
    "Id": "2bfb76735d69f429bc3cb8c3fbbadef4aaab9627",
    "Nombre": "Manuel José Ramón Matta Aragay",
    "Nacio": "1946-11-10",
    "DiputadoId": 660,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "1990-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "9d4496051a88fb7b8609e025e2eb43fc19421263",
    "Nombre": "José Andrés Rafael Zaldívar Larraín",
    "Nacio": "1936-03-18",
    "Militancias": [
      {
        "PartidoId": "DC"
      }
    ]
  },
  {
    "Id": "ec88810e51361ac3de36694afcd165163c785cba",
    "Nombre": "María Soledad Alvear Valenzuela",
    "Nacio": "1950-09-17"
  },
  {
    "Id": "e2401b6c7e3e3a307ed98d49da354370fa009c8b",
    "Nombre": "Enrique Manuel Jovino Novoa Vásquez",
    "Nacio": "1945-03-31"
  },
  {
    "Id": "721e53113c1f4840951fa5cb41aee9cd4a7d260a",
    "Nombre": "Sergio Mariano Ruiz-Esquide Jara",
    "Nacio": "1930-05-10"
  },
  {
    "Id": "2662735eed0ba02585802cb3d9eafe1cf9214fd8",
    "Nombre": "Hernán Larraín Fernández",
    "Nacio": "1947-09-21",
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "bfb0c1d21c74ed0076abf9db47a4122a4291ded3",
    "Nombre": "Federico Andrés Mekis Martínez",
    "Nacio": "1955-08-14",
    "DiputadoId": 662
  },
  {
    "Id": "abd7115626c750a07102053d95946bbde853a351",
    "Nombre": "Jorge Guillermo Molina Valdivieso",
    "Nacio": "1932-02-16",
    "DiputadoId": 664
  },
  {
    "Id": "7970df5ba7ad79190349d71bf425022209d5ebc6",
    "Nombre": "Jorge Carlos Morales Adriasola",
    "Nacio": "1931-10-02",
    "DiputadoId": 666
  },
  {
    "Id": "011ed5b03ff97f3f0a552e5f5c50ae7e2113f080",
    "Nombre": "Roberto Muñoz Barra",
    "Nacio": "1936-01-28",
    "DiputadoId": 668
  },
  {
    "Id": "404_26",
    "Nombre": "Luis Navarrete Carvacho",
    "Nacio": "1925-09-27",
    "Murio": "2006-11-30",
    "DiputadoId": 671
  },
  {
    "Id": "404_27",
    "Nombre": "Héctor Olivares Solis",
    "Nacio": "1924-08-22",
    "Murio": "2009-02-02",
    "DiputadoId": 673
  },
  {
    "Id": "404_28",
    "Nombre": "Eugenio Ortega Riquelme",
    "Nacio": "1940-06-14",
    "Murio": "2013-09-27",
    "DiputadoId": 675
  },
  {
    "Id": "404_29",
    "Nombre": "Mario Palestro Rojas",
    "Nacio": "1921-12-02",
    "Murio": "2000-04-10",
    "DiputadoId": 677
  },
  {
    "Id": "1ecbe2ca83a95159703fb3d81a8e64c42cf92039",
    "Nombre": "José Apolonio Peña Meza",
    "Nacio": "1951-10-05",
    "DiputadoId": 680
  },
  {
    "Id": "1110301e584978b7011ccce3a5aeb6c5f87faa82",
    "Nombre": "Juan Alberto Pérez Muñoz",
    "Nacio": "1948-03-13",
    "DiputadoId": 681
  },
  {
    "Id": "f1fc4e8d47d7dca20f00a21430e4a4da5585e9c3",
    "Nombre": "Gustavo Ramírez Vergara",
    "Nacio": "1932-05-03",
    "DiputadoId": 688
  },
  {
    "Id": "32c499a9a79d74d9cced63aab7a5f5bed8cda6f2",
    "Nombre": "Federico Ringeling Hunger",
    "Nacio": "1954-07-08",
    "DiputadoId": 693
  },
  {
    "Id": "404_30",
    "Nombre": "Hugo Rodríguez Guerrero",
    "Nacio": "1937-07-17",
    "DiputadoId": 697
  },
  {
    "Id": "404_31",
    "Nombre": "Laura Fiora Rodríguez Riccomini",
    "Nacio": "1957-04-01",
    "Murio": "1992-07-18",
    "DiputadoId": 698
  },
  {
    "Id": "404_32",
    "Nombre": "Hernán Rojo Avendaño",
    "Nacio": "1930-07-30",
    "Murio": "2012-12-20",
    "DiputadoId": 699
  },
  {
    "Id": "e0fa8019b21f77db12b54825064c72ce9fc84954",
    "Nombre": "Julio Rojos Astorga",
    "Nacio": "1953-01-13",
    "DiputadoId": 700
  },
  {
    "Id": "404_33",
    "Nombre": "Juan Akin Soto Morales",
    "Nacio": "1933-12-27",
    "Murio": "1992-12-15",
    "DiputadoId": 707
  },
  {
    "Id": "404_34",
    "Nombre": "Andrés Sotomayor Mardones",
    "Nacio": "1943-07-25",
    "Murio": "2014-04-06",
    "DiputadoId": 708
  },
  {
    "Id": "5c37b99208f123eace6b664aa2a660b24c0b35d4",
    "Nombre": "Guillermo Yunge Bustamante",
    "Nacio": "1953-09-26",
    "DiputadoId": 720
  },
  {
    "Id": "b8f7f9bc3dbccf1bc3a45bc535a4609ecc660dea",
    "Nombre": "Martín Manterola Urzúa",
    "Nacio": "1948-05-25",
    "DiputadoId": 721
  },
  {
    "Id": "23573619ac9cbb34bfaf7e7d276fa45dd6590a59",
    "Nombre": "Francisco Leandro Bayo Veloso",
    "Nacio": "1933-03-13",
    "DiputadoId": 132
  },
  {
    "Id": "d4074c1611486dc203ae6082c7d4248a0a0ee0bf",
    "Nombre": "Eliana María Angélica Caraball Martínez",
    "Nacio": "1937-04-27",
    "DiputadoId": 137
  },
  {
    "Id": "cf75b043d09251dcfcae83eaa3d967faa4b99ec1",
    "Nombre": "Camilo Enrique Escalona Medina",
    "Nacio": "1955-06-15",
    "DiputadoId": 150
  },
  {
    "Id": "ae93c3988da61dfbc07f29e37b48736ccd635432",
    "Nombre": "Mario Guillermo Escobar Urbina",
    "Nacio": "1952-03-09",
    "DiputadoId": 151
  },
  {
    "Id": "b9e90e3851bab8cfaab91062bd625597cb090c7d",
    "Nombre": "José Antonio Galilea Vidaurre",
    "Nacio": "1961-11-19",
    "DiputadoId": 155
  },
  {
    "Id": "6ffb37d9342660192a0446231d77e3e9dc677c6c",
    "Nombre": "Rodrigo Galilea Vial",
    "Nacio": "1966-11-03",
    "SenadorId": 1220,
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "b8f150b73325ddb2b986d35184520835e700558b",
    "Nombre": "Rosa Orfilia González Román",
    "Nacio": "1942-07-23",
    "Murio": "2019-01-21",
    "DiputadoId": 159
  },
  {
    "Id": "404_35",
    "Nombre": "Carlos Hidalgo González",
    "Nacio": "1955-06-10",
    "DiputadoId": 164
  },
  {
    "Id": "0c53e40681022805de7b04179eef5a385821bcd4",
    "Nombre": "Gonzalo José Salvador Ibáñez Santa María",
    "Nacio": "1945-12-30",
    "DiputadoId": 165
  },
  {
    "Id": "52adfb62e109ab32fd42c40caff6e66f46d7dad3",
    "Nombre": "Víctor Jeame Barrueto",
    "Nacio": "1953-07-01",
    "DiputadoId": 169
  },
  {
    "Id": "970c4af65d14509e9a1137f52c311607e5408421",
    "Nombre": "Jaime Jiménez Villavicencio",
    "Nacio": "1963-04-06",
    "DiputadoId": 170
  },
  {
    "Id": "e458ab5bcc9431c0b43110528aced48adc6b57f4",
    "Nombre": "Carlos Ignacio Kuschel Silva",
    "Nacio": "1953-03-16",
    "DiputadoId": 172,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "1990-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "404_36",
    "Nombre": "Eduardo Lagos Herrera",
    "Nacio": "1967-01-17",
    "DiputadoId": 173
  },
  {
    "Id": "3291162677ed8d4c17f0f579b2fce4442481015d",
    "Nombre": "Juan Pablo Letelier Morel",
    "Nacio": "1961-01-07",
    "DiputadoId": 176,
    "SenadorId": 912,
    "Militancias": [
      {
        "PartidoId": "PS"
      }
    ]
  },
  {
    "Id": "3f7a80659b6e81098829d335787cb42191cb9ee2",
    "Nombre": "Felipe Rudecindo Letelier Norambuena",
    "Nacio": "1956-05-11",
    "DiputadoId": 177
  },
  {
    "Id": "5faea4473141314c82ad6bd731def683de767183",
    "Nombre": "Juan Pablo Longueira Montes",
    "Nacio": "1958-08-12",
    "DiputadoId": 179
  },
  {
    "Id": "d9b582727064e07298c979cf93879a4312350fd1",
    "Nombre": "Zarko Cosme Luksic Sandoval",
    "Nacio": "1956-05-06",
    "DiputadoId": 181
  },
  {
    "Id": "ae95cdf299f47c0b86e280e7a1da21d3c2ee469d",
    "Nombre": "Darío Alexis Molina Sanhueza",
    "Nacio": "1966-06-20",
    "DiputadoId": 187
  },
  {
    "Id": "5a4e2f4ec50067cb6618fe0a1ca769c629b1a8d7",
    "Nombre": "Waldo Manuel Mora Longa",
    "Nacio": "1942-12-12",
    "DiputadoId": 190
  },
  {
    "Id": "6a31dcdcd0205c85deafe31952eafe3ed0e9638c",
    "Nombre": "Alejandro Navarro Brain",
    "Nacio": "1958-11-20",
    "DiputadoId": 195,
    "SenadorId": 915,
    "Militancias": [
      {
        "PartidoId": "PR"
      }
    ]
  },
  {
    "Id": "f6f15b5b5cecaac5db122775c4768acdc51c4171",
    "Nombre": "Cristián Pablo Pareto Vergara",
    "Nacio": "1963-10-19",
    "DiputadoId": 202
  },
  {
    "Id": "404_37",
    "Nombre": "Ramón Pérez Opazo",
    "Nacio": "1933-12-03",
    "DiputadoId": 206
  },
  {
    "Id": "f0c20add3bf30d5f28bcc18259f65d9bd20f15c1",
    "Nombre": "Víctor Manuel Rebolledo González",
    "Nacio": "1949-06-06",
    "DiputadoId": 211
  },
  {
    "Id": "90a5458deeec375e6ed7fe9b52370fd2096e8298",
    "Nombre": "Bolivar Leopoldo Sánchez Grunert",
    "Nacio": "1949-10-20",
    "DiputadoId": 221
  },
  {
    "Id": "48d0219fb3144c7d121393d7982898c66e87a8c3",
    "Nombre": "Rodolfo Samuel Seguel Molina",
    "Nacio": "1953-09-20",
    "DiputadoId": 222
  },
  {
    "Id": "3f4e1013b67ec04a074c8a8d2159e7b756f0af41",
    "Nombre": "Exequiel Armando Silva Ortiz",
    "Nacio": "1963-10-13",
    "DiputadoId": 224
  },
  {
    "Id": "404_38",
    "Nombre": "Mario Varela Herrera",
    "Nacio": "1953-11-12",
    "DiputadoId": 234
  },
  {
    "Id": "655dfc17d3daa2ea621529212694b9cff438d0c6",
    "Nombre": "Edmundo Villouta Concha",
    "Nacio": "1926-09-17",
    "DiputadoId": 239
  },
  {
    "Id": "404_39",
    "Nombre": "Arturo Longton Guerrero",
    "Nacio": "1948-06-25",
    "Murio": "2015-07-03",
    "DiputadoId": 178
  },
  {
    "Id": "832cb8a83698b3ba560bcde3a70b01008482581d",
    "Nombre": "Pedro Héctor Muñoz Aburto",
    "Nacio": "1944-07-01",
    "DiputadoId": 193
  },
  {
    "Id": "2124de4f86fa419c2868554f769da00378f3f5e0",
    "Nombre": "Aníbal Patricio Pérez Lobos",
    "Nacio": "1948-01-20",
    "DiputadoId": 205
  },
  {
    "Id": "5dc2b6e34ac2e3b8e0f6d48814c20915eea56a65",
    "Nombre": "Patricio Cornejo Vidaurrázaga",
    "Nacio": "1942-10-17",
    "DiputadoId": 140
  },
  {
    "Id": "c4806bac334f3c3f7a200442816344230b6662c4",
    "Nombre": "Guido Girardi Lavín",
    "Nacio": "1961-01-24",
    "DiputadoId": 158,
    "SenadorId": 909,
    "Militancias": [
      {
        "PartidoId": "PPD"
      }
    ]
  },
  {
    "Id": "aabe64e25fb636af7577f1a0733dcc5d8f70ad6d",
    "Nombre": "Edgardo Sebastián Riveros Marín",
    "Nacio": "1949-09-03",
    "DiputadoId": 213
  },
  {
    "Id": "27b44318995ba5a467c9b870bccb9711b230796b",
    "Nombre": "María Pía Guzmán Mena",
    "Nacio": "1957-06-23",
    "DiputadoId": 161
  },
  {
    "Id": "2ce02a9835808468e9febd586bf4d6bf23df9da3",
    "Nombre": "Cristián Antonio Leay Morán",
    "Nacio": "1954-02-09",
    "DiputadoId": 175
  },
  {
    "Id": "9a15bf80bb89e37813cf73eea57ce89e59b44087",
    "Nombre": "Carmen Ibáñez Soto",
    "Nacio": "1959-02-07",
    "DiputadoId": 166
  },
  {
    "Id": "f6b30a92e231fc8bc7e13760771e63c3d6d08674",
    "Nombre": "María Eugenia Mella Gajardo",
    "Nacio": "1952-03-04",
    "DiputadoId": 185
  },
  {
    "Id": "ccfd41fb072c4126dbbfe83e4203d19690a0c784",
    "Nombre": "Boris Tapia Martínez",
    "Nacio": "1941-08-27",
    "DiputadoId": 226
  },
  {
    "Id": "404_40",
    "Nombre": "Juan Concha Urbina",
    "Nacio": "1923-11-10",
    "Murio": "2010-05-10",
    "DiputadoId": 621
  },
  {
    "Id": "404_41",
    "Nombre": "Milenko Vilicic Karnincic",
    "Nacio": "1932-03-09",
    "Murio": "1993-07-04",
    "DiputadoId": 718
  },
  {
    "Id": "18b4f57698bd8732410fb1ed5ab461c3f10b0455",
    "Nombre": "Jaime Antonio Orpis Bouchon",
    "Nacio": "1956-09-16",
    "DiputadoId": 79,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Hasta": "2015-12-31T23:59:59"
      },{
        "PartidoId": "IND",
        "Desde": "2016-01-01T00:00:00"
      }
    ]
  },
  {
    "Id": "777f16ab5de04e8078239098e1fc5f1bfcb3d98c",
    "Nombre": "Andrés Pio Bernardino Chadwick Piñera",
    "Nacio": "1956-01-02",
    "DiputadoId": 424
  },
  {
    "Id": "560ff47960aad96420e050ca17b0ade653b8300c",
    "Nombre": "Sergio Morales Morales",
    "Nacio": "1945-10-22",
    "DiputadoId": 470
  },
  {
    "Id": "518d1e0dceb1a746bd8e2e849542c8cdb232d26f",
    "Nombre": "Luis Enrique Leblanc Valenzuela",
    "Nacio": "1950-04-12",
    "Murio": "2017-08-19",
    "DiputadoId": 652
  },
  {
    "Id": "52df7bbb49c7d3b9b66cbd6c0ce007122f3a0289",
    "Nombre": "Carlos Iván Smok Ubeda",
    "Nacio": "1952-10-01",
    "DiputadoId": 705
  },
  {
    "Id": "87b8efc9cf99fdc8b20e3b37075c6836bd6386f1",
    "Nombre": "Néstor Arturo Jofré Núñez",
    "Nacio": "1947-10-19",
    "DiputadoId": 242
  },
  {
    "Id": "2cda429aeea38ef989060f5ebd231a7a94439af0",
    "Nombre": "María Victoria Ovalle Ovalle",
    "Nacio": "1947-06-12",
    "DiputadoId": 81
  },
  {
    "Id": "d178a980b26ebb6fd0dc2c0cb63ef50210fff19d",
    "Nombre": "Jorge Alfredo Alejandro Soria Macchiavello",
    "Nacio": "1969-03-03",
    "DiputadoId": 106
  },
  {
    "Id": "d5c802468dd9380b26a9de59b6654c1dd3dccb50",
    "Nombre": "Jorge Alejandro Soria Quiroga",
    "Nacio": "1936-11-01",
    "SenadorId": 1213,
    "Militancias": [
      {
        "PartidoId": "PPD"
      }
    ]
  },
  {
    "Id": "566295064a20813edffeb2ad6db719a857cf21e3",
    "Nombre": "Rafael Prohens Espinosa",
    "Nacio": "1955-06-12",
    "SenadorId": 1214,
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "d8264897cc7b441284d6a0d5dfe90c3021db6c14",
    "Nombre": "Mario Francisco Bartolucci Johnston",
    "Nacio": "1949-12-24",
    "DiputadoId": 11
  },
  {
    "Id": "404_42",
    "Nombre": "Mario Hamuy Berr",
    "Nacio": "1926-08-10",
    "Murio": "2011-03-07",
    "DiputadoId": 445
  },
  {
    "Id": "404_43",
    "Nombre": "José Luis González Rodríguez",
    "Nacio": "1939-04-11",
    "DiputadoId": 443
  },
  {
    "Id": "aa3e292442348374dab27c4d75348c9f05d4f845",
    "Nombre": "Vicente Karelovic Vrandecic",
    "Nacio": "1933-06-26",
    "Murio": "2019-04-10",
    "DiputadoId": 453
  },
  {
    "Id": "d253f514d15f3f6ac7bf81be02bc08b9dfa3497c",
    "Nombre": "Romy María Veriana Rebolledo Leyton",
    "Nacio": "1960-10-31",
    "DiputadoId": 489
  },
  {
    "Id": "62b16e5e5dbf0247ce9976474366eaccaf97bd52",
    "Nombre": "Nicanor Araya de la Cruz",
    "Nacio": "1938-03-04",
    "DiputadoId": 607
  },
  {
    "Id": "44ddd17899941f33ef324ce888e46f496dd358e1",
    "Nombre": "Cristian Letelier Aguilar",
    "Nacio": "1954-05-18",
    "DiputadoId": 965
  },
  {
    "Id": "8896ce6b42582bce1f2fdd25ca35aa7d1bbe4ee8",
    "Nombre": "Flaminio Joel Rosales Guzmán",
    "Nacio": "1955-01-12",
    "DiputadoId": 966
  },
  {
    "Id": "49092a6d2e3f9c81de8f1cfccd43ce2711f699b2",
    "Nombre": "Issa Farid Kort Garriga",
    "Nacio": "1980-05-09",
    "DiputadoId": 967,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2011-08-10T00:00:00"
      }
    ]
  },
  {
    "Id": "42f7236c76d1cae9aa09fced1eebaaf323881295",
    "Nombre": "Renzo Aldo Trisotti Martínez",
    "Nacio": "1976-03-15",
    "DiputadoId": 1003,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "346a9078bd5ae8b844d8be33085106d00437e969",
    "Nombre": "Joaquín Lavín León",
    "Nacio": "1979-05-25",
    "DiputadoId": 989,
    "Familia": {
      "Esposa": [
        {
          "Id": "6ce82583393e2db066051435deff7163890075d6",
          "Nombre": "Cathy Carolina Barriga Guerra"
        }
      ]
    },
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "6ce82583393e2db066051435deff7163890075d6",
    "Nombre": "Cathy Carolina Barriga Guerra",
    "Nacio": "1973-04-09",
    "Familia": {
      "Marido": [
        {
          "Id": "346a9078bd5ae8b844d8be33085106d00437e969",
          "Nombre": "Joaquín Lavín León"
        }
      ]
    }
  },
  {
    "Id": "1f6e9f9d5f98a79f849a1f69699ab077e9723039",
    "Nombre": "Camila Antonia Amaranta Vallejo Dowling",
    "Nacio": "1988-04-28",
    "DiputadoId": 1006,
    "Militancias": [
      {
        "PartidoId": "PC",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "4907c57b640b2fcf604045875ed3fb4b0d0ab34e",
    "Nombre": "María Loreto Carvajal Ambiado",
    "Nacio": "1973-05-18",
    "DiputadoId": 974,
    "Militancias": [
      {
        "PartidoId": "PPD",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "c05fa2759b425a37f4f11b1380fe3c8250b59653",
    "Nombre": "Iván Flores García",
    "Nacio": "1955-06-15",
    "DiputadoId": 982,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "2221dbebad9181f9c81d7007e810f011828e2d36",
    "Nombre": "Juan Enrique Morano Cornejo",
    "Nacio": "1952-09-10",
    "DiputadoId": 992
  },
  {
    "Id": "3904534b62fa2fb99d9fbaefa359f5287a2116b7",
    "Nombre": "Marcela Ximena Hernando Pérez",
    "Nacio": "1960-02-12",
    "DiputadoId": 986,
    "Militancias": [
      {
        "PartidoId": "PRSD",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "74c950490073348916b9dc5977bb086e41c4ba47",
    "Nombre": "Paulina Andrea Núñez Urrutia",
    "Nacio": "1982-12-30",
    "DiputadoId": 994,
    "Familia": {
      "Marido": [
        {
          "Id": "f1ae04fac2e4b153570222f954e0c11c5907225a",
          "Nombre": "Cristián Monckeberg Bruner"
        }
      ]
    },
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "d4750b7f5aac4c2bc392d74e09c0fb825fdb068e",
    "Nombre": "Yasna Provoste Campillay",
    "Nacio": "1969-12-16",
    "DiputadoId": 998,
    "SenadorId": 1215,
    "Militancias": [
      {
        "PartidoId": "DC"
      }
    ]
  },
  {
    "Id": "c8b7aafb00dc7f0db1ace246a76e6e5b1590c1f8",
    "Nombre": "Sergio Alfredo Gahona Salazar",
    "Nacio": "1965-09-15",
    "DiputadoId": 985,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "28a86da8570ad798a6948108f26ddb8f2f120c7e",
    "Nombre": "Daniel Ignacio Núñez Arancibia",
    "Nacio": "1971-01-07",
    "DiputadoId": 993,
    "Militancias": [
      {
        "PartidoId": "PC",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "66455c68b97643086f759d504c3de9b66939930e",
    "Nombre": "Christian Erwin Urízar Muñoz",
    "Nacio": "1968-05-27",
    "DiputadoId": 1004
  },
  {
    "Id": "a86f647c1ff0a2cd66bd50079a3c2cd216ba2c02",
    "Nombre": "Osvaldo Alejandro Nicanor Urrutia Soto",
    "Nacio": "1951-11-28",
    "DiputadoId": 1005,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "729d68cac38dc848ea4d8aede349ad93adda4817",
    "Nombre": "Daniel Alejandro Farcas Guendelman",
    "Nacio": "1963-11-02",
    "DiputadoId": 980
  },
  {
    "Id": "e8a29fecef6930b8e2a8af3e2296a1e6319956b6",
    "Nombre": "Karol Cariola Oliva",
    "Nacio": "1987-04-01",
    "DiputadoId": 973,
    "Militancias": [
      {
        "PartidoId": "PC",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "1733df4e05e8eb253e6f6b21da20aa342591c6f7",
    "Nombre": "Maya Alejandra Fernández Allende",
    "Nacio": "1971-11-27",
    "DiputadoId": 981,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "b33cfa6501f2184011d0d49a35192c41a0e59926",
    "Nombre": "Kenneth Giorgio Jackson Drago",
    "Nacio": "1987-02-06",
    "DiputadoId": 987,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2012-12-01T00:00:00",
        "Hasta": "2018-03-10T23:59:59"
      },
      {
        "PartidoId": "RD",
        "Desde": "2016-06-22T00:00:00"
      }
    ]
  },
  {
    "Id": "404_44",
    "Nombre": "Michael Kast Schindele",
    "Nacio": "1924-01-01",
    "Murio": "2014-05-09",
    "Familia": {
      "Hijos": [
        {
          "Id": "404_45",
          "Nombre": "Miguel Kast Rist"
        },
        {
          "Id": "f1383e1210cdf254263e47a4ccfb223132ac43b4",
          "Nombre": "José Antonio Kast Rist"
        }
      ]
    }
  },
  {
    "Id": "404_45",
    "Nombre": "Miguel Kast Rist",
    "Nacio": "1948-12-18",
    "Murio": "1983-09-18",
    "Familia": {
      "Hijos": [
        {
          "Id": "3df3793b589bd887c8c9d59d4bb5b2a3e47c9134",
          "Nombre": "Felipe Kast Sommerhoff"
        },
        {
          "Id": "534851c47e9d747f2fb0b46e6c8548642949f5b4",
          "Nombre": "Pablo Andrés Kast Sommerhoff"
        }
      ]
    }
  },
  {
    "Id": "3df3793b589bd887c8c9d59d4bb5b2a3e47c9134",
    "Nombre": "Felipe Kast Sommerhoff",
    "Nacio": "1977-06-09",
    "DiputadoId": 988,
    "SenadorId": 1223,
    "Militancias": [
      {
        "PartidoId": "EVOPOLI"
      }
    ]
  },
  {
    "Id": "cbb692c38fa6b0861f6b991e6613f8a66ca73e2f",
    "Nombre": "Jaime Hernán Gonzalo Pilowsky Greene",
    "Nacio": "1965-12-03",
    "DiputadoId": 996
  },
  {
    "Id": "f420a56aa24b98b48dae0f39ea3daa2ef4d4ddfa",
    "Nombre": "Claudio Eugenio Arriagada Macaya",
    "Nacio": "1955-10-22",
    "DiputadoId": 969
  },
  {
    "Id": "fdc352e77947d91a24c88641162336085bc2793a",
    "Nombre": "Daniel Alexander Melo Contreras",
    "Nacio": "1979-02-18",
    "DiputadoId": 990
  },
  {
    "Id": "620f76c1d5b935fc0179cb906c40e79b1beb3a1c",
    "Nombre": "Jaime Andrés Bellolio Avaria",
    "Nacio": "1980-11-29",
    "DiputadoId": 970,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "6b10fff4fe9e676f08a37d469ced26ebe6d4713b",
    "Nombre": "Leonardo Soto Ferrada",
    "Nacio": "1966-05-15",
    "DiputadoId": 1002,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "65f2d1890a37d3cd48b02f997716fe491433ba05",
    "Nombre": "Juan Antonio Coloma Álamos",
    "Nacio": "1980-03-14",
    "DiputadoId": 976,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "1895da26f6472fa18b7d23bc652cce78153c917d",
    "Nombre": "Sergio Espejo Yaksic",
    "Nacio": "1967-03-15",
    "DiputadoId": 979
  },
  {
    "Id": "e4c559585a8664071d28cb59d94f01c7aa965d27",
    "Nombre": "Marcelo Omar Chávez Velásquez",
    "Nacio": "1975-02-19",
    "DiputadoId": 977
  },
  {
    "Id": "33b7370abb025a3f52e7e187d14eb0b8ce3c3762",
    "Nombre": "Roberto Poblete Zapata",
    "Nacio": "1955-01-08",
    "DiputadoId": 997
  },
  {
    "Id": "6185d8916c66d3c9ba92107c548a82c872f60665",
    "Nombre": "Diego Alfredo Paulsen Kehr",
    "Nacio": "1987-08-01",
    "DiputadoId": 995,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "a28bc9e57581b875991bbd40631f28eaf548391a",
    "Nombre": "Bernardo Jose Berger Fett",
    "Nacio": "1946-10-04",
    "DiputadoId": 971,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "c11d593b25f141f1f5e9ccb3a495f1eb4eba1546",
    "Nombre": "Gonzalo Guillermo Fuenzalida Figueroa",
    "Nacio": "1973-06-18",
    "DiputadoId": 984,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "1351731916727b402bbbd42f0ba6dbdfaa632499",
    "Nombre": "Felipe De Mussy Hiriart",
    "Nacio": "1982-09-28",
    "DiputadoId": 978
  },
  {
    "Id": "055f24aca33768c900c55fa3f7a2bec57cf51b6d",
    "Nombre": "Iván Aladino Fuentes Castillo",
    "Nacio": "1967-07-24",
    "DiputadoId": 983
  },
  {
    "Id": "fb2b25556adf2646abc1d6cfdbb491018f715194",
    "Nombre": "Gabriel Boric Font",
    "Nacio": "1986-02-11",
    "DiputadoId": 972,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "3d95c91970661925108d8b6d329f9663c31d5417",
    "Nombre": "Miguel Ángel Alvarado Ramírez",
    "Nacio": "1961-07-10",
    "DiputadoId": 1007
  },
  {
    "Id": "6ec0a41d8ff13cdf50e3a1dbcc72997af4800c89",
    "Nombre": "Raúl Florcita Alarcón Rojas",
    "Nacio": "1945-10-15",
    "DiputadoId": 1008,
    "Militancias": [
      {
        "PartidoId": "PH",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "186ff7d6d25014ce52298a30b372d415848ee95c",
    "Nombre": "Jorge Alessandri Vergara",
    "Nacio": "1979-06-08",
    "DiputadoId": 1009,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "3251dca193705fe3395f6691a481952a850f9e3c",
    "Nombre": "Sebastián Diego Álvarez Ramírez",
    "Nacio": "1970-11-13",
    "DiputadoId": 1010,
    "Militancias": [
      {
        "PartidoId": "EVOPOLI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "aecf1bfe4d6b5f1ba89182695dc0f8bf931c6085",
    "Nombre": "Sandra Haydee Amar Mancilla",
    "Nacio": "1955-11-24",
    "DiputadoId": 1011,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "a1754ae62a235fdfdcc5a84ccd34af14e40358c2",
    "Nombre": "Boris Anthony Barrera Moreno",
    "Nacio": "1970-05-03",
    "DiputadoId": 1012,
    "Militancias": [
      {
        "PartidoId": "PC",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "2f8d214e04d3f11a7d529e9c771d8372f235fa51",
    "Nombre": "Karim Antonio Bianchi Retamales",
    "Nacio": "1983-01-31",
    "DiputadoId": 1014,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "e2c6be59f716a66b21d18217b0351eafaf5c98db",
    "Nombre": "Miguel Ángel Calisto Águila",
    "Nacio": "1985-07-19",
    "DiputadoId": 1016,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "fe8fe6dbcd0ff3fbdcd0b402dffa2b9435a145f2",
    "Nombre": "Álvaro Jorge Carter Fernández",
    "Nacio": "1980-10-09",
    "DiputadoId": 1017,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "5c1bf64fab54b45467af36f7033b55be4b32b802",
    "Nombre": "Natalia Valentina Castillo Muñoz",
    "Nacio": "1982-08-01",
    "DiputadoId": 1018,
    "Militancias": [
      {
        "PartidoId": "RD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "9ef4a96bc8594bb934f10ca09a871481229003c2",
    "Nombre": "Ricardo Celis Araya",
    "Nacio": "1955-07-11",
    "DiputadoId": 1020,
    "Militancias": [
      {
        "PartidoId": "PPD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "4a9d66ff647febdfcd0be84d2021435b6e76fa3b",
    "Nombre": "Andrés Celis Montt",
    "Nacio": "1975-04-08",
    "DiputadoId": 1021,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "d2ec79d26dbd1546bef722eed8be210eb409ec45",
    "Nombre": "Sofía Slovena Cid Versalovic",
    "Nacio": "1971-09-29",
    "DiputadoId": 1022,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "2a9259110d10d0729cda41a079bea37e56f0f228",
    "Nombre": "Luciano Cruz-Coke Carvallo",
    "Nacio": "1970-07-01",
    "DiputadoId": 1024,
    "Militancias": [
      {
        "PartidoId": "EVOPOLI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "e1d6b03690b2a256c44f9c99fc3be2cc85bdcd26",
    "Nombre": "María Catalina Del Real Mihovilovic",
    "Nacio": "1968-11-07",
    "DiputadoId": 1025,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "62f5adb90cc7d54cf4fd84f9cefc2dcb65f4a48f",
    "Nombre": "Mario Guillermo Desbordes Jiménez",
    "Nacio": "1968-10-15",
    "DiputadoId": 1026,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "a1ee83001ff55754f555c72a6ac200f482589c15",
    "Nombre": "Jorge Andrés Durán Espinoza",
    "Nacio": "1980-12-17",
    "DiputadoId": 1027,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "78788f3312832ccb975c435468697f89125dde0f",
    "Nombre": "Francisco de Borja Eguiguren Correa",
    "Nacio": "1967-07-13",
    "DiputadoId": 1029,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "6e3254daedf71e65d35b52482f14c1bfe637ddcf",
    "Nombre": "Camila Alejandra Flores Oporto",
    "Nacio": "1987-02-09",
    "DiputadoId": 1030,
    "Familia": {
      "Marido": [
        {
          "Id": "3c7cf78c5639b90636dcb312bbc3c09c58e1deb4",
          "Nombre": "Percy Marín Vera",
          "Desde": "2017-01-01"
        }
      ]
    },
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "3c7cf78c5639b90636dcb312bbc3c09c58e1deb4",
    "Nombre": "Percy Marín Vera",
    "Nacio": "1969-09-22",
    "Familia": {
      "Esposa": [
        {
          "Id": "6e3254daedf71e65d35b52482f14c1bfe637ddcf",
          "Nombre": "Camila Alejandra Flores Oporto",
          "Desde": "2017-01-01"
        }
      ]
    }
  },
  {
    "Id": "9d96f9d4b5b092d4987d1b9dc333de264567412d",
    "Nombre": "Juan Manuel Fuenzalida Cobo",
    "Nacio": "1973-07-01",
    "DiputadoId": 1031,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "c18c7acf221e69cb950b0d40ee5848b9ab4f1eab",
    "Nombre": "Ramón Ernesto Galleguillos Castillo",
    "Nacio": "1953-07-26",
    "DiputadoId": 1032,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "5c892a483e1e66a78e0640b648269c26dedbdf40",
    "Nombre": "Renato Fabrizio Garín González",
    "Nacio": "1986-05-30",
    "DiputadoId": 1033,
    "Militancias": [
      {
        "PartidoId": "RD",
        "Hasta": "2019-04-23T23:59:59"
      }, {
        "PartidoId": "IND",
        "Desde": "2019-04-24T00:00:00"
      }
    ]
  },
  {
    "Id": "49fb25a927d2521189022eb52b93e1dab064645d",
    "Nombre": "Carmen Adelaida Hertz Cádiz",
    "Nacio": "1945-06-19",
    "DiputadoId": 1035,
    "Militancias": [
      {
        "PartidoId": "PC",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "2c65a090f5f8d1374e2d440ac59d958e03b335b1",
    "Nombre": "Tomás René Hirsch Goldschmidt",
    "Nacio": "1956-07-19",
    "DiputadoId": 1036,
    "Militancias": [
      {
        "PartidoId": "PH",
        "Hasta": "2020-05-05T23:59:59"
      }, {
        "PartidoId": "IND",
        "Desde": "2020-05-06T00:00:00"
      }
    ]
  },
  {
    "Id": "dbfb1eb63bfad28a469e5385aba1f05f5c1cd1ed",
    "Nombre": "Diego Eduardo Ibáñez Cotroneo",
    "Nacio": "1989-01-25",
    "DiputadoId": 1037,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "60498fb3a14a2389519f092afaddd1f8a260dca8",
    "Nombre": "Pamela Jiles Moreno",
    "Nacio": "1960-11-30",
    "DiputadoId": 1039,
    "Militancias": [
      {
        "PartidoId": "PH",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "fac6b73e5e34acdc3a635488da197d8ee00a101e",
    "Nombre": "Harry Kurt Thomas Jürgensen Rundshagen",
    "Nacio": "1968-09-03",
    "DiputadoId": 1040,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "786641cf735ba22b03fcfbc9bb305e4dff92d92b",
    "Nombre": "Sebastián Keitel Bianchi",
    "Nacio": "1973-02-14",
    "DiputadoId": 1042,
    "Militancias": [
      {
        "PartidoId": "EVOPOLI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "10eaa7dbabd15539e4efd62e03bc98e71215cdd1",
    "Nombre": "Carlos Antonio Karim Bianchi Chelech",
    "Nacio": "1960-11-04",
    "SenadorId": 907,
    "Militancias": [
      {
        "PartidoId": "IND"
      }
    ]
  },
  {
    "Id": "454e9afee3763902aa84638e4fa1794b6df6a124",
    "Nombre": "Raúl Alfonso Leiva Carvajal",
    "Nacio": "1974-03-24",
    "DiputadoId": 1044,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "4f656281076bb5e318d0a4ceb54dae105a08465d",
    "Nombre": "Aracely Andrea Leuquén Uribe",
    "Nacio": "1980-11-24",
    "DiputadoId": 1045,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "828b3d062b7100c577ac1bde6b26f38ba68b7ef1",
    "Nombre": "Andrés Longton Herrera",
    "Nacio": "1982-05-26",
    "DiputadoId": 1046,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "bfd1b69bd11c651b795d735aac31550f715edfcf",
    "Nombre": "Karin Claudia Luck Urban",
    "Nacio": "1971-07-19",
    "DiputadoId": 1047,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "bcbd042d33c4e84fc2ece8bbbfa653fe84995514",
    "Nombre": "Marta Carolina Marzán Pinto",
    "Nacio": "1963-12-22",
    "DiputadoId": 1048,
    "Militancias": [
      {
        "PartidoId": "PPD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "95e7a8be4d3b760628729c510999610efee1ff5b",
    "Nombre": "Cosme Leopoldo Mellado Pino",
    "Nacio": "1960-02-24",
    "DiputadoId": 1049,
    "Militancias": [
      {
        "PartidoId": "PRSD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "c7323f61b2b71700c6af24cf7178512a040ca218",
    "Nombre": "Miguel Alejandro Mellado Suazo",
    "Nacio": "1958-12-29",
    "DiputadoId": 1050,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "0a870a208f9bc4b8bed2f6a5da7d08d18723d513",
    "Nombre": "Claudia Nathalie Mix Jiménez",
    "Nacio": "1969-07-13",
    "DiputadoId": 1051,
    "Militancias": [
      {
        "PartidoId": "PPC",
        "Desde": "2018-03-11T00:00:00",
        "Hasta": "2019-02-20T00:00:01"
      },
      {
        "PartidoId": "IND",
        "Desde": "2019-02-21T00:00:01"
      }
    ]
  },
  {
    "Id": "ce97e00bb66bc235519161b66fcaf0df2bc7ed67",
    "Nombre": "Jose Sergio Andrés Molina Magofke",
    "Nacio": "1963-11-17",
    "DiputadoId": 1052,
    "Militancias": [
      {
        "PartidoId": "EVOPOLI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "a77af3defed125bc2105310e2f25e024b77568af",
    "Nombre": "Francesca Elizabeth Andrea Muñoz González",
    "Nacio": "1980-03-07",
    "DiputadoId": 1054,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "e9c33a18ef2454fdfefd65ba29c4014b9da1bcba",
    "Nombre": "Nicolás José Noman Garrido",
    "Nacio": "1981-05-07",
    "DiputadoId": 1055,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "6e817a421e49ec051594ce63ba9b819824fe39da",
    "Nombre": "Emilia Iris Nuyado Ancapichún",
    "Nacio": "1968-08-17",
    "DiputadoId": 1056,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "7e852a037b8330e0dfb2215fbf850d08c3aaaa07",
    "Nombre": "Erika Alejandra Olivera De La Fuente",
    "Nacio": "1976-01-04",
    "DiputadoId": 1057,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "c8c5ff8ad19345447a0b824004bcabc19cec4dee",
    "Nombre": "María Ximena Ossandón Irarrázabal",
    "Nacio": "1963-12-13",
    "DiputadoId": 1059,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "efa5e5b88c81fc2514a64a4b65612747923bb175",
    "Nombre": "Ximena Loreto Órdenes Neira",
    "Nacio": "1973-03-09",
    "SenadorId": 1224,
    "Militancias": [
      {
        "PartidoId": "IND"
      }
    ]
  },
  {
    "Id": "a17a7c6d98aae836dcd1e7427d552863e0df4538",
    "Nombre": "Manuel José Ossandón Irarrázabal",
    "Nacio": "1962-08-24",
    "SenadorId": 1120,
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "a9173ab6801df3a338ce46efa007be373dd8c4a9",
    "Nombre": "José Miguel Alberto Durana Semir",
    "Nacio": "1960-06-27",
    "SenadorId": 1210,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "1581560e6d8e21d28cb576c2be6c34167bfadda7",
    "Nombre": "Luis Rafael Pardo Sáinz",
    "Nacio": "1960-12-13",
    "DiputadoId": 1060,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "26d2778a624cf100839abe3ef7c0e9c5fbf77c08",
    "Nombre": "Irle Andrea Parra Sauterel",
    "Nacio": "1967-09-02",
    "DiputadoId": 1061,
    "Militancias": [
      {
        "PartidoId": "PPD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "35344e95a9303ce44617ce1b7b25178d344250d2",
    "Nombre": "José Miguel Insulza Salinas",
    "Nacio": "1943-06-02",
    "SenadorId": 1211,
    "Militancias": [
      {
        "PartidoId": "PS"
      }
    ]
  },
  {
    "Id": "f276159a3442acfba23a4ec8689468d857f67a3f",
    "Nombre": "Luz Eliana Ebensperger Orrego",
    "Nacio": "1964-03-08",
    "SenadorId": 1212,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  },
  {
    "Id": "c785e0c63e907a73d2046e0ad51dfdca82eaf52a",
    "Nombre": "Joanna Elena Pérez Olea",
    "Nacio": "1976-04-01",
    "DiputadoId": 1062,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "97d2308350a2df66b6868a5f212a0f2816d093b5",
    "Nombre": "Catalina Ilona Io Pérez Salinas",
    "Nacio": "1990-12-18",
    "DiputadoId": 1063,
    "Militancias": [
      {
        "PartidoId": "RD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "2a30bf33bd93871683b2e9b41d70dc1ddbf92546",
    "Nombre": "Pablo Samuel Prieto Lorca",
    "Nacio": "1959-05-04",
    "DiputadoId": [
      209,
      1064
    ],
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "211abb9c96ad41acf451540b9e64464e48ec67fa",
    "Nombre": "Guillermo Andrés Ramírez Diez",
    "Nacio": "1979-04-16",
    "DiputadoId": 1065,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "8d0de97b3939ee3d29e681ba1f9db0e3c2b209f4",
    "Nombre": "Rolando Ramón Rentería Moller",
    "Nacio": "1968-08-19",
    "DiputadoId": 1066,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "c0e938fb1aec8b3ef419b7171e65a15181585323",
    "Nombre": "Hugo Vicente Rey Martínez",
    "Nacio": "1973-12-06",
    "DiputadoId": 1067,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "3ea895fd175da7e93af8fd0b53e39b4d13d62d19",
    "Nombre": "Camila Ruzlay Rojas Valderrama",
    "Nacio": "1991-03-11",
    "DiputadoId": 1068,
    "Militancias": [
      {
        "PartidoId": "IND"
      }
    ]
  },
  {
    "Id": "6259e326e1d2545df582d9e6dc13724c0d51c7fc",
    "Nombre": "Leonidas Andrés Romero Sáez",
    "Nacio": "1955-10-15",
    "DiputadoId": 1069,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "4d8c25c4b5383c7dd31f624f547cc4ae09df841f",
    "Nombre": "Patricio Eduardo Rosas Barrientos",
    "Nacio": "1968-05-06",
    "DiputadoId": 1070,
    "Militancias": [
      {
        "PartidoId": "IND",
        "Desde": "2019-06-19T00:00:00"
      },
      {
        "PartidoId": "PS",
        "Desde": "2018-03-11T00:00:00",
        "Hasta": "2019-06-18T23:59:59"
      }
    ]
  },
  {
    "Id": "a7efcea2eb347545c713cd894dc440d253136ef2",
    "Nombre": "Gastón René Saavedra Chandía",
    "Nacio": "1955-11-22",
    "DiputadoId": 1071,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "cba749c2737acba362487b621fddd431dc19977e",
    "Nombre": "Gustavo Adolfo Sanhueza Dueñas",
    "Nacio": "1966-12-10",
    "DiputadoId": 1072,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "993f1791f847b959519b483c66211c000674d652",
    "Nombre": "Juan Rubén Santana Castillo",
    "Nacio": "1989-09-20",
    "DiputadoId": 1073,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "ae8acb6b389e0f549151b44a655c760210791e86",
    "Nombre": "Marisela del Carmen Santibáñez Novoa",
    "Nacio": "1975-04-24",
    "DiputadoId": 1074,
    "Militancias": [
      {
        "PartidoId": "PRO",
        "Hasta": "2019-04-16T23:59:59"
      }, {
        "PartidoId": "IND",
        "Desde": "2019-04-17T00:00:00",
        "Hasta": "2019-10-13T23:59:59"
      }, {
        "PartidoId": "PC",
        "Desde": "2019-10-14T00:00:00"
      }
    ]
  },
  {
    "Id": "89fa2938fd3634ef3be96cc3c23a2d1a2a549367",
    "Nombre": "Luis Alberto Rocafull López",
    "Nacio": "1958-09-17",
    "DiputadoId": 1000,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "21edd53c438e9cb74a0335fe3d379de35465e522",
    "Nombre": "Alexis Edgardo Sepúlveda Soto",
    "Nacio": "1969-12-29",
    "DiputadoId": 1076,
    "Militancias": [
      {
        "PartidoId": "PRSD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "e455bb4c64976893199838b9cd820d1cf890fe0b",
    "Nombre": "Jenny Paola Álvarez Vera",
    "Nacio": "1974-03-30",
    "DiputadoId": 968,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "b9a313a9882d3e9a64ea9c1323502db6d300c5ad",
    "Nombre": "Jorge Elías Brito Hasbún",
    "Nacio": "1990-01-12",
    "DiputadoId": 1015,
    "Militancias": [
      {
        "PartidoId": "RD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "315b8697519177e013cbd017c3975179b9e248ef",
    "Nombre": "Daniella Valentina Cicardini Milla",
    "Nacio": "1987-12-31",
    "DiputadoId": 975,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "3d88ffd940d25acf7fb592bece5a77cf0f8ce1d5",
    "Nombre": "Miguel Ernesto Crispi Serrano",
    "Nacio": "1985-04-09",
    "DiputadoId": 1023,
    "Militancias": [
      {
        "PartidoId": "RD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "2f93674b76c174a3d6810992ac42f7e1dee06aa1",
    "Nombre": "Eduardo Alfredo Durán Salinas",
    "Nacio": "1972-01-01",
    "DiputadoId": 1028,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "79879bee8dfb473d54de2385833bb05fc974c7e4",
    "Nombre": "Raúl Humberto Soto Mardones",
    "Nacio": "1987-11-20",
    "DiputadoId": 1077,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2018-03-11T00:00:00",
        "Hasta": "2019-08-25T23:59:59"
      },
      {
        "PartidoId": "IND",
        "Desde": "2019-08-26T00:00:00"
      }
    ]
  },
  {
    "Id": "86f42b80700730da9879fd1adc7f894ca8488fc6",
    "Nombre": "Jaime Manuel Tohá González",
    "Nacio": "1938-06-16",
    "DiputadoId": 1078,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "497e7fbc5f76e18e26aee8de51c489a20caf3a2c",
    "Nombre": "Sebastián Torrealba Alvarado",
    "Nacio": "1981-02-06",
    "DiputadoId": 1079,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "8521ae6e3dd42bb096e14ae4e2155487c1c67c76",
    "Nombre": "Virginia Eugenia Troncoso Hellman",
    "Nacio": "1951-02-18",
    "DiputadoId": 1080,
    "Militancias": [
      {
        "PartidoId": "UDI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "c55ec6d5e472a90ef45d1823cfc49380770408db",
    "Nombre": "Juan Francisco Undurraga Gazitúa",
    "Nacio": "1965-09-29",
    "DiputadoId": 1081,
    "Militancias": [
      {
        "PartidoId": "EVOPOLI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "e2e87a66636766293ff36f6e2507101fd9e9eb7c",
    "Nombre": "Cristóbal Ignacio de Loyola Urruticoechea Ríos",
    "Nacio": "1975-11-21",
    "DiputadoId": 1082,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "366b671de54fa9f9d72d781b0152ff9c04694a59",
    "Nombre": "Esteban Jorge Velásquez Núñez",
    "Nacio": "1962-12-26",
    "DiputadoId": 1083,
    "Militancias": [
      {
        "PartidoId": "FREVS",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "84c609878b9bdfb53f57161a6b815c8d35c4dd99",
    "Nombre": "Daniel Ángel Verdessi Belemmi",
    "Nacio": "1952-12-15",
    "DiputadoId": 1084,
    "Militancias": [
      {
        "PartidoId": "DC",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "534e80c6e34ce50a5b878292486c1a72b2eeb8e8",
    "Nombre": "Pablo Esteban Vidal Rojas",
    "Nacio": "1983-06-24",
    "DiputadoId": 1085,
    "Militancias": [
      {
        "PartidoId": "RD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "a187609375333f2f38148fc9763aa4018bf5c84f",
    "Nombre": "Gonzalo Rodolfo Winter Etcheberry",
    "Nacio": "1987-01-06",
    "DiputadoId": 1086,
    "Militancias": [
      {
        "PartidoId": "CS",
        "Hasta": "2018-04-04T23:59:59"
      }, {
        "PartidoId": "IND",
        "Desde": "2018-04-05T00:00:00"
      }
    ]
  },
  {
    "Id": "e18e87814bf4b4afb0d1cfa64fd7b2201ddafcae",
    "Nombre": "Gael Fernanda Yeomans Araya",
    "Nacio": "1988-12-04",
    "DiputadoId": 1087,
    "Militancias": [
      {
        "PartidoId": "RD",
        "Hasta": "2019-04-16T23:59:59"
      }, {
        "PartidoId": "IND",
        "Desde": "2019-04-17T00:00:00"
      }
    ]
  },
  {
    "Id": "b973b5dce1d3fbce0efd2a977c050d3356f13102",
    "Nombre": "Félix Marcelo González Gatica",
    "Nacio": "1972-05-26",
    "DiputadoId": 1034,
    "Militancias": [
      {
        "PartidoId": "PEV",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "d13423e8310281553a8a5b4078b27adcc4e3ed9a",
    "Nombre": "Marcos Artemio Ilabaca Cerda",
    "Nacio": "1970-10-05",
    "DiputadoId": 1038,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "534851c47e9d747f2fb0b46e6c8548642949f5b4",
    "Nombre": "Pablo Andrés Kast Sommerhoff",
    "Nacio": "1973-08-24",
    "DiputadoId": 1041,
    "Militancias": [
      {
        "PartidoId": "EVOPOLI",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "894a366ad83524e8b6ffa53ddd64ad9635472c23",
    "Nombre": "Amaro Jamil Jesús Labra Sepúlveda",
    "Nacio": "1949-10-25",
    "DiputadoId": 1043,
    "Militancias": [
      {
        "PartidoId": "PC",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "483550fa5e69ebff4f7bece7f4425ae98853063e",
    "Nombre": "Vlado Mirosevic Verdugo",
    "Nacio": "1987-05-23",
    "DiputadoId": 991,
    "Militancias": [
      {
        "PartidoId": "PL",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "a7134dd1ab48f00d28a3096b6e70767dd983d624",
    "Nombre": "Maite Orsini Pascal",
    "Nacio": "1988-02-23",
    "DiputadoId": 1058,
    "Militancias": [
      {
        "PartidoId": "RD",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "e11be9fea8e2477ffd3b25411f3a7d3833f52a04",
    "Nombre": "Jorge Evaldo Rathgeb Schifferli",
    "Nacio": "1967-12-28",
    "DiputadoId": 999,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "efb185c9a7e3ef170802dae0393a77587bbe347f",
    "Nombre": "Raúl Fernando Saldívar Auger",
    "Nacio": "1951-06-02",
    "DiputadoId": 1001,
    "Militancias": [
      {
        "PartidoId": "PS",
        "Desde": "2014-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "c54e2ef031e99d5ec17372eb58f25dbb0162dc83",
    "Nombre": "Diego Ignacio Schalper Sepúlveda",
    "Nacio": "1985-03-14",
    "DiputadoId": 1075,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "f957e80efafd2c96001de8ea463482b806183cf6",
    "Nombre": "Alejandro Javier Bernales Maldonado",
    "Nacio": "1979-02-02",
    "DiputadoId": 1013,
    "Militancias": [
      {
        "PartidoId": "PL",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "f2970a814d9aa08b583a8f99b182efc44d067b7d",
    "Nombre": "José Miguel Castro Bascuñán",
    "Nacio": "1974-08-05",
    "DiputadoId": 1019,
    "Militancias": [
      {
        "PartidoId": "RN",
        "Desde": "2018-03-11T00:00:00"
      }
    ]
  },
  {
    "Id": "875875b355eb4284b335e92cd9312c62bd6c56b5",
    "Nombre": "Juan Enrique Castro Prieto",
    "Nacio": "1959-11-01",
    "SenadorId": 1218,
    "Militancias": [
      {
        "PartidoId": "RN"
      }
    ]
  },
  {
    "Id": "3ac86c7211e55e354c5d67073786a1d13fd47392",
    "Nombre": "Cristhian Patricio Moreira Barros",
    "Nacio": "1961-09-05",
    "DiputadoId": 1053,
    "Militancias": [
      {
        "PartidoId": "UDI"
      }
    ]
  }
];

const aux: FigurasPublicas = {};
for (const pf of publicFigureList) {
  aux[pf.Id] = pf;
}

export const publicFigures = aux;

interface PublicFigureWithId extends FiguraPublica {
  Id: string
}

export const findPublicFigureByAlias = (name: string): PublicFigureWithId | undefined => {
  for (const id in aliases) {
    if (aliases[id].includes(name)) {
      return publicFigures[id];
    }
  }
  return undefined;
}

export const findPublicFigureIdByAlias = (name: string): string | undefined => {
  for (const id in aliases) {
    if (aliases[id].includes(name)) {
      return id;
    }
  }
  return undefined;
}

export const findPublicFigureIdByDeputyId = (deputyId: number): string => {
  for (const pfId in publicFigures) {
    const dId = publicFigures[pfId].DiputadoId;
    if ((Array.isArray(dId) && dId.includes(deputyId)) || (dId === deputyId))
      return pfId;
  }
  return '404404';
}

export const findPublicFigureIdBySenatorId = (senatorId: number): string => {
  for (const pfId in publicFigures) {
    const sId = publicFigures[pfId].SenadorId;
    if ((Array.isArray(sId) && sId.includes(senatorId)) || (sId === senatorId))
      return pfId;
  }
  return '404404';
}

function main() {
  writeFile("./data/figura_publica.json", JSON.stringify(publicFigures), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

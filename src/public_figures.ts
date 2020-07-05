import {PublicFigure, PublicFigureList} from "./public_figures.model";
import {writeFile} from "fs";
import {aliases} from "./aliases";

export const publicFigures: PublicFigureList = {
  "3baf8a82290dc441c78bfdb4587c7fa26a32faad=": {
    Name: "Manuel Jose Bernardino Piñera Carvallo",
    Born: "1917-09-22",
    Died: "1991-06-03",
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
  "f2efde45bec43eaa6f66bd9b1c17b39b8f0372eb": {
    Name: "Jose Manuel Alberto Piñera Echenique",
    Born: "1948-10-06"
  },
  "27de3825ccff9defc11dbdb4b30205b611b9ae3c": {
    Name: "Juan Pablo Bernardino Piñera Echenique",
    Born: ""
  },
  "f7b53fbddeb820a6983d71cf9a2db654f5b1f0c9": {
    Name: "Jose Miguel Carlos Piñera Echenique",
    Born: ""
  },
  "c5159ca874b81e63aba6e34540ef0e885ddce129": {
    Name: "Maria Teresa Magdalena Piñera Echenique",
    Born: ""
  },
  "f6c5d1485f954badc86cbe780c170deb28e0203c": {
    Name: "María Cecilia Morel Montes",
    Born: "1954-01-14"
  },
  "00147f72faa1569c741dffd3c30cfa48583d0e2e": {
    Name: "Magdalena Maria Piñera Morel",
    Born: ""
  },
  "14796adfd794a916ca481f65c8208ab617c8b7c0": {
    Name: "Maria Cecilia Piñera Morel",
    Born: ""
  },
  "b954694210f430ab49809f3b89b9c73ac39e437e": {
    Name: "Juan Sebastian Piñera Morel",
    Born: ""
  },
  "fa8d5d56b1886ce2f37a785a5f70cdfa0db9d32e": {
    Name: "Piñera Morel Cristobal",
    Born: ""
  },
  "92415f0988ac40b8f5eb98c048fc7ac336a20dc5": {
    Name: "Miguel Juan Sebastián Piñera Echenique",
    Born: "1949-12-01",
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
  },
  "5928db0687b7fe3ca49161c6eb8decc6e6499e71": {
    Name: "Rodrigo Javier Hinzpeter Kirberg",
    Born: "1965-10-27"
  },
  "9ca38b36196cb322423c0fbbb955fde0c647a034": {
    Name: "Alfredo German Moreno Charme",
    Born: "1956-08-04"
  },
  "dd18cb9820dd6da34d11d949ab9f1f5ec83f70e9": {
    Name: "Francisco Javier Errázuriz Talavera",
    Born: "1942-05-07"
  },
  "44a2cc3bd7511abe3f5dfb5345e2f7a37b9fab2a": {
    Name: "Hernán Alberto Büchi Buc",
    Born: "1949-03-06"
  },
  "de75abe036e34fabe565fcf59e526c284686485e": {
    Name: "Alejandro René Eleodoro Guillier Álvarez",
    Born: ""
  },
  "e254d432497742dccd5796d1640b80481be36dc6": {
    Name: "Alfredo Juan Sfeir Younis",
    Born: ""
  },
  "dcfdb2f5351719fcb640b38a9f3dcd678d00afc6": {
    Name: "Arturo Alessandri Besa",
    Born: ""
  },
  "7baf719d81741dce4b2e61fd76f9b1ca3af04767": {
    Name: "Eduardo Alberto Frei Ruiz Tagle",
    Born: ""
  },
  "d9aed12ec315c9bd144ca374a1cd8491582d148e": {
    Name: "Beatriz de Jesús Sánchez Muñoz",
    Born: ""
  },
  "a7cfb34869ff7c1f54c93450029dc74c3571bff9": {
    Name: "Carlos Cristian Reitze Campos",
    Born: ""
  },
  "1917ce6b3c93069e1ba9e52144838b5596fe7428": {
    Name: "Eduardo Antonio Artes Brichetti",
    Born: ""
  },
  "d11e1ddda049f8575e7dd22866abb811b80b58b8": {
    Name: "Frei Bolivar Erwin Arturo",
    Born: ""
  },
  "47b1f8d2abc59c13c48baedeaabe7d7de727d1df": {
    Name: "Juan Eugenio Pizarro Poblete",
    Born: ""
  },
  "fd3430942abf4fdc6589f3664bbb0cb5ed748c8d": {
    Name: "Franco Aldo Parisi Fernández",
    Born: ""
  },
  "404_01": {
    Name: "Gladys del Carmen Marín Millie",
    Born: ""
  },
  "ce22567c157e8e20d844e4864bfb4068b8681fca": {
    Name: "Joaquín José Lavín Infante",
    Born: ""
  },
  "9881b8975db18095be50029320433759009a412a": {
    Name: "Jorge Felix Arrate Mac-Niven",
    Born: ""
  },
  "1230fc6d16108035b0d8e7b99f292c2e53acbff3": {
    Name: "Artur Manfred Max Neef",
    Born: ""
  },
  "1d42127aa05f5c1aff423782c5616acf4f4f6761": {
    Name: "Marcel Henri Claude Reyes",
    Born: ""
  },
  "36d0c29759cfe2b36ffbed29f656e52a195b6e81": {
    Name: "Verónica Michelle Bachelet Jeria",
    Born: ""
  },
  "404_02": {
    Name: "Patricio Aylwin Azócar",
    Born: ""
  },
  "7891fd0925fd434cea3d6f136411c8956d356325": {
    Name: "Ricardo Jacob Israel Zipper",
    Born: ""
  },
  "d63d1a939deb6f22fb6798c31f9bf9e1cc6c791f": {
    Name: "Ricardo Froilán Lagos Escobar",
    Born: ""
  },
  "69943038131cc93104420671776ad663feb0df7f": {
    Name: "Roxana del Pilar Miranda Meneses",
    Born: ""
  },
  "404_03": {
    Name: "Sara María Larraín Ruiz-Tagle",
    Born: ""
  },
  "750e0ece12e42a4b98624599ab7673d9e6e00f9e": {
    Name: "Víctor Claudio José Pérez Varela",
    Born: "1954-10-18",
    DeputyId: 208
  },
  "079eae6d5c36fed844f0b0371e3f6bd913c813b4": {
    Name: "Jorge Esteban Pizarro Soto",
    Born: "1952-04-21",
    DeputyId: 485
  },
  "404_04": {
    Name: "Sergio Pizarro Mackay",
    Born: "1939-03-19",
    DeputyId: 684
  },
  "6f4a0dc257d1eae05ab081f6a5105a1d8a342afa": {
    Name: "José Alfonso Rodríguez Del Río",
    Born: "1948-01-29",
    DeputyId: 696
  },
  "9888b9956a2e2ed1191778d26421bed34b995b8d": {
    Name: "David Sergio Sandoval Plaza",
    Born: "1952-10-20",
    DeputyId: 951
  },
  "6693968029c6f94a6d3b6e3db2b25604ed3149c1": {
    Name: "Pedro Antonio Velásquez Seguel",
    Born: "1964-08-05",
    DeputyId: 961
  },
  "0c807508a65a121430f6a64296f67856a097276b": {
    Name: "Pedro Browne Urrejola",
    Born: "1972-06-29",
    DeputyId: 927
  },
  "d74a4c31e17f7f76f6d3b806386dedd0eb5f338e": {
    Name: "Aldo Vicente Cornejo González",
    Born: "1955-04-19",
    DeputyId: 933
  },
  "50d1a2bf0852c832380ce62ef565f56bbae40471": {
    Name: "Gustavo Adolfo Hasbún Selume",
    Born: "1972-08-02",
    DeputyId: 939
  },
  "23a6b461d26e48b0722445f4109ff87aab2a6eb4": {
    Name: "Andrea Molina Oliva",
    Born: "1970-03-28",
    DeputyId: 944
  },
  "a6a972dc570d6049954459543b8411f0973a8c67": {
    Name: "René Fernando Saffirio Espinoza",
    Born: "1955-10-09",
    DeputyId: 950
  },
  "18b106a5acb975ed7da383ac73428b5f78b15e74": {
    Name: "Carlos Vilches Guzmán",
    Born: "1944-10-20",
    DeputyId: 962
  },
  "a2ae86ab87f39d9e3b72fffc16bac13ed3c019da": {
    Name: "Guillermo León Teillier Del Valle",
    Born: "1943-10-29",
    DeputyId: 956
  },
  "341a19aa3f268074f94bcfe1161c63728090d5ca": {
    Name: "Mónica Javiera Blanco Suárez",
    Born: "1972-08-01",
    Family: {
      Husband: [
        {
          Id: "8087f501a599e8682fdf57fddd2bb2200f6ca500",
          Name: "Pedro Araya Guerrero"
        }
      ]
    }
  },
  "8087f501a599e8682fdf57fddd2bb2200f6ca500": {
    Name: "Pedro Araya Guerrero",
    Born: "",
    DeputyId: 808,
    Family: {
      Wife: [
        {
          Id: "341a19aa3f268074f94bcfe1161c63728090d5ca",
          Name: "Mónica Javiera Blanco Suárez"
        }
      ]
    }
  },
  "bf95d31ad2f6b8c7b0fbe06cd25ff131279958bf": {
    Name: "Enrique Luis Accorsi Opazo",
    Born: "1948-08-17",
    DeputyId: 800
  },
  "8e62d6ece16df86935d8898ee0d201d5c38ebf50": {
    Name: "Sergio Patricio Aguiló Melo",
    Born: "1953-02-09",
    DeputyId: 802
  },
  "fd0e672d2b699e4008c15d887aaf5f989afaddc8": {
    Name: "Isabel Allende Bussi",
    Born: "1945-01-18",
    DeputyId: 804
  },
  "166a104d8f78e693ca47af662653be5b3bedfc63": {
    Name: "Claudio Patricio Alvarado Andrade",
    Born: "1960-02-07",
    DeputyId: 805
  },
  "e4dcfc2a18d6c0441d99d6e881bc22ee99ae6e19": {
    Name: "Rodrigo Alejandro Álvarez Zenteno",
    Born: "1966-07-30",
    DeputyId: 807
  },
  "404_05": {
    Name: "Pedro Pablo Alvarez-Salamanca Büchi",
    Born: "1948-04-10",
    Died: "2008-09-03",
    DeputyId: 806
  },
  "affe819041bb5a899c44f207a4b139005af0b9b8": {
    Name: "Lily Jovanka Pérez San Martín",
    Born: "1963-05-10",
    DeputyId: 921
  },
  "77b9f16862919da5f711818101a88525dad485b9": {
    Name: "Gabriel Héctor Ascencio Mansilla",
    Born: "1953-10-25",
    DeputyId: 810
  },
  "bcc53f26caf73ac5187e938180b0ba8f5e3612cb": {
    Name: "José Ramón Barros Montero",
    Born: "1958-03-05",
    DeputyId: 811
  },
  "7bf69231b6814db8a18f4de4aca536630d8684c3": {
    Name: "Eugenio Francisco Bauer Jouanne",
    Born: "1947-05-20",
    DeputyId: 812
  },
  "d6c90b64e2bbc7ae3676e2a9bbd9f4a1f9e46493": {
    Name: "Germán Becker Alvear",
    Born: "1955-03-13",
    DeputyId: 813
  },
  "4a9bf3c579a62a76c4dc0e37f217b65eefa8297f": {
    Name: "Mario Vittorio Luca Bertolino Rendic",
    Born: "1954-02-03",
    DeputyId: 814
  },
  "90b64fe8a8a3fe2e2cf5c0f9f668116beec12bd4": {
    Name: "Jorge Alfonso Burgos Varela",
    Born: "1956-06-24",
    DeputyId: 816
  },
  "404_06": {
    Name: "Juan José Bustos Ramírez",
    Born: "1935-12-08",
    Died: "2008-08-07",
    DeputyId: 817
  },
  "94f760082b696dc9ab73c6571e80e245d78ad990": {
    Name: "Alberto Eugenio Cardemil Herrera",
    Born: "1945-11-01",
    DeputyId: 818
  },
  "6db008bafaf1bdbd28d91d27defeee84852989c3": {
    Name: "Guillermo Arturo Ceroni Fuentes",
    Born: "1946-07-30",
    DeputyId: 819
  },
  "d1345dd3a86caf1d819d89100528048787792c08": {
    Name: "Sergio Andrés Correa De la Cerda",
    Born: "1938-05-02",
    DeputyId: 821
  },
  "4d8c06d2074bbbe74cd32a03a834cd59519fa8fe": {
    Name: "María Angélica Cristi Marfil",
    Born: "1941-10-13",
    DeputyId: 822
  },
  "61fb9b9d34a0f8c6a82cac1183c8224f0a459f91": {
    Name: "Marcela Cubillos Sigall",
    Born: "1967-02-02",
    DeputyId: 823,
    Family: {
      Husband: [
        {
          Id: "3887990645f3868ffc5e09772891ff4d86d650b8",
          Name: "Andrés Allamand Zavala"
        }
      ]
    }
  },
  "404_07": {
    Name: "Roberto Delmastro Naso",
    Born: "1945-10-17",
    Died: "2014-12-26",
    DeputyId: 825
  },
  "7636c17378959fcac069b7634d2ccbdbeaaa82f1": {
    Name: "Eduardo Díaz Del Río",
    Born: "1973-12-17",
    DeputyId: 826
  },
  "aa95cbbe4d353c64364c763eb303f7e92870fcdd": {
    Name: "Julio Cristóbal Dittborn Cordua",
    Born: "1951-10-19",
    DeputyId: 828
  },
  "1156d1e31aedd50cff3efcba658894d43b71dc1f": {
    Name: "Andrés Egaña Respaldiza",
    Born: "1947-03-08",
    DeputyId: 830
  },
  "ff1b122ebe0554606992ac2458134e0e355e26a9": {
    Name: "José Francisco Encina Moriamez",
    Born: "1943-12-18",
    DeputyId: 832
  },
  "ca80e8efb58652bba826d237bd3dc7e44e1a80f2": {
    Name: "Maximiano Guillermo Errázuriz Eguiguren",
    Born: "1945-09-28",
    DeputyId: 834
  },
  "5ebdb3f8d79206e2992ccad8f45e0818e6b5750b": {
    Name: "Fidel Edgardo Espinoza Sandoval",
    Born: "1970-01-24",
    DeputyId: 837
  },
  "3eec05a4012e505df440fe1ca335585001941b3b": {
    Name: "Marcelo Iván Forni Lobos",
    Born: "1967-10-15",
    DeputyId: 840
  },
  "b5c0d847c1560287481cb23cb48024f8f932c264": {
    Name: "Pablo Alberto Galilea Carrillo",
    Born: "1963-01-31",
    DeputyId: 842
  },
  "cfab8c13eadeab651c7bfa0a8ada1e27479adbbc": {
    Name: "René Manuel García García",
    Born: "1950-05-24",
    DeputyId: 843
  },
  "fd4d76a64774dccdd03f2e1fddd9a6e929e7520a": {
    Name: "Alejandro García-Huidobro Sanfuentes",
    Born: "1952-04-19",
    DeputyId: 844
  },
  "f02afbdc08430ed0c1733ffcf9f40417d2b621f8": {
    Name: "Rodrigo René González Torres",
    Born: "1941-09-26",
    DeputyId: 848
  },
  "13c429cd0906ba2d58ef7784fae91ae2d4de3c97": {
    Name: "Patricio Alejandro Hales Dib",
    Born: "1946-09-11",
    DeputyId: 849
  },
  "920ea0d52e1d10f39f85842145c5e8a77b0b6655": {
    Name: "Javier Ricardo Hernández Hernández",
    Born: "1954-08-07",
    DeputyId: 850
  },
  "3998791aafd490ea9fe28112dff1ee370c16c598": {
    Name: "Ramón Enrique Jaramillo Becker",
    Born: "1937-07-11",
    DeputyId: 854
  },
  "66c0d38e537930fd2b5d2fa26fc851a6cf656eea": {
    Name: "Carlos Abel Jarpa Wevar",
    Born: "1944-11-14",
    DeputyId: 855
  },
  "f1383e1210cdf254263e47a4ccfb223132ac43b4": {
    Name: "José Antonio Kast Rist",
    Born: "1966-01-18",
    DeputyId: 857
  },
  "43160c6a5021cd0726066a101c80eb827c2a57d7": {
    Name: "José Antonio Leal Labrín",
    Born: "1950-01-10",
    DeputyId: 859
  },
  "3661bfd97fcd7d2aaba6c325de86d9682758157f": {
    Name: "Pablo Lorenzini Basso",
    Born: "1949-10-25",
    DeputyId: 862
  },
  "2daaf560909e7d0367ea9e00ce0d016a2338e4d7": {
    Name: "Rosauro Martínez Labbé",
    Born: "1950-11-11",
    DeputyId: 863
  },
  "7f539d0b85148eb91a68b8e660028d731bb98d63": {
    Name: "Juan Alfonso Manuel Masferrer Pellizzari",
    Born: "1940-11-19",
    DeputyId: 864
  },
  "0a71863a3a01b2a89b2bef99ea17c38ba477b7b7": {
    Name: "Patricio Melero Abaroa",
    Born: "1956-06-19",
    DeputyId: 865
  },
  "f4b2a7ad79e60f71aab0091bb19780a9f85a2d4b": {
    Name: "Fernando Meza Moncada",
    Born: "1946-07-14",
    DeputyId: 866
  },
  "e2db8f37f347a4672e68770bf7e3d33cdb253b20": {
    Name: "Nicolás Monckeberg Díaz",
    Born: "1973-07-31",
    DeputyId: 868
  },
  "f06efcc2f42908724ff6cba0317f5d831292d9f7": {
    Name: "Carlos Eduardo Montes Cisternas",
    Born: "1946-05-11",
    DeputyId: 870
  },
  "21b9d78f905fedf031c1fe4d907f1642eeba877d": {
    Name: "Iván Alejandro Moreira Barros",
    Born: "1956-12-08",
    DeputyId: 871
  },
  "19394fb3f76df5d8c376938f9d9b3cff9ae0f7db": {
    Name: "Jaime Francisco Mulet Martínez",
    Born: "1963-08-03",
    DeputyId: 872
  },
  "1d4303b4f9e90759a0a543956acc55eb98cab3bb": {
    Name: "Adriana Blanca Cristina Muñoz D'Albora",
    Born: "1948-09-25",
    DeputyId: 873
  },
  "5c052ff425db090c27c70594956a86cc1aa1340e": {
    Name: "Iván Ernesto Norambuena Farías",
    Born: "1958-09-04",
    DeputyId: 875
  },
  "fec6430feb56a80577aa08da5a98e4075509a0bf": {
    Name: "Sergio Rodrigo Ojeda Uribe",
    Born: "1943-03-12",
    DeputyId: 877
  },
  "58ab544c089a003c2a869470eb3b72e251ba64c1": {
    Name: "Carlos Olivares Zepeda",
    Born: "1952-05-25",
    DeputyId: 878
  },
  "75a26bf72a5127d5d0471a2476174bd904aeb5da": {
    Name: "José Miguel Ortiz Novoa",
    Born: "1941-11-22",
    DeputyId: 879
  },
  "6abb0029e7075a39d1f0a6d5a60345274aa0a038": {
    Name: "José Osvaldo Palma Flores",
    Born: "1952-10-02",
    DeputyId: 881
  },
  "6257ab27a8856b984abfbfcb8509bc0d664273de": {
    Name: "Luis Iván Paredes Fierro",
    Born: "1958-06-04",
    DeputyId: 882
  },
  "d88279d04b2e8fac208e8a428fb7399f65aab70a": {
    Name: "Darío Guillermo Paya Mira",
    Born: "1964-07-20",
    DeputyId: 884
  },
  "bc359cdd5993e17b74a2499e54a1b43ef50ad642": {
    Name: "José Pérez Arriagada",
    Born: "1940-12-29",
    DeputyId: 885
  },
  "f93c3509c5abe71d8bda66f16a94af42835d17f7": {
    Name: "Jaime Daniel Quintana Leal",
    Born: "1967-10-22",
    DeputyId: 886
  },
  "cf12e9c036c38f6e1c54af467b35e4e71021f4b9": {
    Name: "Carlos Recondo Lavanderos",
    Born: "1954-04-27",
    DeputyId: 887
  },
  "1847bd2259252c8807da8e179eaa9091f0a2a0ad": {
    Name: "Alberto Iván Francisco Robles Pantoja",
    Born: "1956-10-04",
    DeputyId: 888
  },
  "5a2b61efe371b51f60664ab83d2af0c58c8a1773": {
    Name: "Manuel Ernesto Rojas Molina",
    Born: "1959-11-03",
    DeputyId: 889
  },
  "e11e738197f06e0cf5744570c504bf0a908f30ba": {
    Name: "Fulvio Fabrizio Rossi Ciocca",
    Born: "1970-09-30",
    DeputyId: 890,
    Family: {
      Wife: [
        {
          Id: "41ea1dbc69614f729498098df01d26e5544945b4",
          Name: "Carolina Monserrat Tohá Morales"
        }
      ]
    }
  },
  "203075b0247f44015a837d8cebbb08bfa15e1f04": {
    Name: "María Antonieta Saa Díaz",
    Born: "1943-01-08",
    DeputyId: 892
  },
  "d81e4324d1014d67e50dd949e46c21f2c1d499b4": {
    Name: "Eduardo José Saffirio Suárez",
    Born: "1958-08-12",
    DeputyId: 894
  },
  "37de92421fb89ba6b7704ee4c1fc94a3114e7c3c": {
    Name: "Felipe Santiago Salaberry Soto",
    Born: "1966-01-09",
    DeputyId: 895
  },
  "e820846626f1c301f7006900a5abc87752b6fcfa": {
    Name: "Alejandra Amalia Sepúlveda Orbenes",
    Born: "1965-11-13",
    DeputyId: 897
  },
  "204ed206c178f5fb5d9216ad0f14e56cc421a5a0": {
    Name: "Laura Filomena Soto González",
    Born: "1931-12-15",
    DeputyId: 899
  },
  "941e75ee256d0d328ff9563c40e88b2b52ee9d4e": {
    Name: "Jorge Carlos Tarud Daccarett",
    Born: "1953-07-19",
    DeputyId: 902
  },
  "41ea1dbc69614f729498098df01d26e5544945b4": {
    Name: "Carolina Monserrat Tohá Morales",
    Born: "1965-05-12",
    DeputyId: 903,
    Family: {
      Husband: [
        {
          Id: "e11e738197f06e0cf5744570c504bf0a908f30ba",
          Name: "Fulvio Fabrizio Rossi Ciocca"
        }
      ]
    }
  },
  "cc440cbcfb797a24497699647e2bc3e46b320c98": {
    Name: "Eugenio Tuma Zedan",
    Born: "1945-07-29",
    DeputyId: 904
  },
  "6f4729bb734a6ca4436e9f2e56583e1b16a6e133": {
    Name: "Jorge Iván Ulloa Aguillón",
    Born: "1958-09-15",
    DeputyId: 906
  },
  "91d97c3d30fd7b7d67d2623f1734e556e72d7a21": {
    Name: "Gonzalo Cristian Uriarte Herrera",
    Born: "1964-12-28",
    DeputyId: 907
  },
  "2c338c4bb71004d962aafc427beb11c50873aa73": {
    Name: "Ignacio Urrutia Bonilla",
    Born: "1957-09-16",
    DeputyId: 908
  },
  "449e72cb31b10c1455768068658cb50662accee3": {
    Name: "Esteban Manuel Valenzuela Van Treek",
    Born: "1964-03-12",
    DeputyId: 910
  },
  "c822d5e5514ad803b25e683d1a5bbf1e5a3ae9b3": {
    Name: "Alfonso Guillermo José Vargas Lyng",
    Born: "1951-12-16",
    DeputyId: 912
  },
  "b520ff2f1956135306ec3da2837a5bf8a3906122": {
    Name: "Samuel Benito Venegas Rubio",
    Born: "1938-04-01",
    DeputyId: 914
  },
  "61e9ede6b9631c8a6c4c9f17111eb22a512a72c1": {
    Name: "Ximena Leonor Vidal Lázaro",
    Born: "1955-01-01",
    DeputyId: 916
  },
  "519abc66b27cb0e55563dcfdb006b069fe1ff25b": {
    Name: "Gastón Alejandro Von Mühlenbrock Zamora",
    Born: "1954-12-26",
    DeputyId: 917
  },
  "33a1d2981a5fda7a7b200a1463d2b4707cf66e8b": {
    Name: "Patricio Arturo Walker Prieto",
    Born: "1969-04-28",
    DeputyId: 918
  },
  "41defd5c010955b2ea6758ba38a76abdb011a5af": {
    Name: "René Augusto Aedo Ormeño",
    Born: "1960-02-04",
    DeputyId: 801
  },
  "825005b83fdc6b7c2a9979be5d5034b7cb43ef1a": {
    Name: "René Osvaldo Alinco Bustos",
    Born: "1958-06-02",
    DeputyId: 803
  },
  "0a175da8241d760c510462d8504a668db1969e08": {
    Name: "Gonzalo Enrique Arenas Hödar",
    Born: "1972-12-13",
    DeputyId: 809
  },
  "95fdf3dc2fff548a00a1878d988d39bc708380e0": {
    Name: "Sergio Bobadilla Muñoz",
    Born: "1958-03-25",
    DeputyId: 815
  },
  "7c8f365b1dd473b637ffba6f9e0111304f1efed3": {
    Name: "Francisco Javier Chahuán Chahuán",
    Born: "1971-05-20",
    DeputyId: 820
  },
  "ed64df3d9777e1446a529dbdfb8bea43e0eda7f6": {
    Name: "Alfonso Arturo De Urresti Longton",
    Born: "1966-03-07",
    DeputyId: 824
  },
  "e755cf731369acba42c0694a84a90c61ae9be7ef": {
    Name: "Marcelo Eduardo Díaz Díaz",
    Born: "1971-02-06",
    DeputyId: 827
  },
  "91855993317acaf09009828577a3662ae867b027": {
    Name: "Gonzalo Alejandro Duarte Leiva",
    Born: "1953-04-01",
    DeputyId: 829
  },
  "4b3eb52f3cd401c5cb90470c9417d10195857aaa": {
    Name: "Edmundo Eluchans Urenda",
    Born: "1950-01-21",
    DeputyId: 831
  },
  "f7e8eff419abb80f9ad6e96135a25a9c232e60ce": {
    Name: "Marco Antonio Enríquez-Ominami Gumucio",
    Born: "1973-06-12",
    DeputyId: 833
  },
  "f34bee9e3d88745897ea34a00ad2f1856b7c8290": {
    Name: "Alvaro Escobar Rufatt",
    Born: "1966-12-16",
    DeputyId: 835
  },
  "227ec4b1da1e022496dd3113e215443805987038": {
    Name: "Marcos Andrés Espinosa Monardes",
    Born: "1962-10-27",
    DeputyId: 836
  },
  "f9ca0e1cb600303c1a3e6992867bd58754e84400": {
    Name: "Abraham Enrique Estay Peñaloza",
    Born: "1958-03-30",
    DeputyId: 838
  },
  "4217c32701d35e0a83ef22dc7ae5b3f1b356fe93": {
    Name: "Ramón Alberto Farías Ponce",
    Born: "1955-08-23",
    DeputyId: 839
  },
  "00105400b5bdac932cc77100aa217235f6a0223c": {
    Name: "Francisco Renán Fuentealba Vildósola",
    Born: "1947-11-29",
    DeputyId: 841
  },
  "89108421e37a779419e7f1fafbf07fa9ebce4de1": {
    Name: "Guido Juan Primo Girardi Briere",
    Born: "1934-11-17",
    DeputyId: 845
  },
  "e0d34af26cbf6cf0b243f260a7583a81851b3b17": {
    Name: "Joaquín Godoy Ibáñez",
    Born: "1977-01-25",
    DeputyId: 846
  },
  "626a0c585f5d43482617a5b88eb0da4b56bb63ce": {
    Name: "Carolina Goic Boroevic",
    Born: "1972-12-20",
    DeputyId: 847
  },
  "957bf5a25758100a77fd525a3a2de1f75b19121e": {
    Name: "María Amelia Herrera Silva",
    Born: "1950-08-25",
    DeputyId: 851
  },
  "8976edbf365789ac91e9830ce5dbdf865e0a737d": {
    Name: "Jorge Insunza Gregorio de las Heras",
    Born: "1967-02-12",
    DeputyId: 852
  },
  "d2622c9f90697b2175326d61c58f81a58cfc1cfc": {
    Name: "Marta Eliana Isasi Barbieri",
    Born: "1966-01-15",
    DeputyId: 853
  },
  "a2817b6396ba02d9bb48d6f378ee96a05d02e38a": {
    Name: "Tucapel Francisco Jiménez Fuentes",
    Born: "1962-09-01",
    DeputyId: 856
  },
  "aad9cec89c403f1b741ae8c25b457596b5e6c247": {
    Name: "Juan Carlos Latorre Carmona",
    Born: "1949-03-29",
    DeputyId: 858
  },
  "7ac0d7c52c34a4552fe8259b8584cd413348c800": {
    Name: "Roberto Eduardo León Ramírez",
    Born: "1951-02-11",
    DeputyId: 860
  },
  "404_08": {
    Name: "Juan Lobos Krause",
    Born: "1960-12-05",
    Died: "2011-04-11",
    DeputyId: 861
  },
  "f1ae04fac2e4b153570222f954e0c11c5907225a": {
    Name: "Cristián Monckeberg Bruner",
    Born: "1968-05-12",
    DeputyId: 867,
    Family: {
      Wife: [
        {
          Id: "74c950490073348916b9dc5977bb086e41c4ba47",
          Name: "Paulina Andrea Núñez Urrutia"
        }
      ]
    }
  },
  "e700be824ab5bf0d0a3575b05c746a02723ab3f3": {
    Name: "Manuel Zacarías Monsalve Benavides",
    Born: "1965-06-09",
    DeputyId: 869
  },
  "23e713eba38b4979dc0c40efae89d9edd6df3187": {
    Name: "Claudia Andrea Nogueira Fernández",
    Born: "1969-11-26",
    DeputyId: 874
  },
  "ce746a01a9b7f3614359f1c0b0f08a95298d76e7": {
    Name: "Marco Antonio Núñez Lozano",
    Born: "1966-09-02",
    DeputyId: 876
  },
  "c463730de40457f774be2ce6a730ff33346f6d86": {
    Name: "Clemira Hugolina Pacheco Rivas",
    Born: "1961-05-05",
    DeputyId: 880
  },
  "e9076ed6fda4c65cd6d3894b77e0d609d4820cb9": {
    Name: "Denise Simone Pascal Allende",
    Born: "1940-07-19",
    DeputyId: 883
  },
  "22ce406aff662960edc5f13f58bfb5ff61b908ab": {
    Name: "Karla Elizabeth Rubilar Barahona",
    Born: "1977-04-17",
    DeputyId: 891
  },
  "a12f8cf07d3ab513104e8f6b383d93c89b318b62": {
    Name: "Jorge Eduardo Sabag Villalobos",
    Born: "1963-12-26",
    DeputyId: 893
  },
  "762e48a896ef57b708fede9b67c65bb449dac3c7": {
    Name: "Roberto Eduardo Sepúlveda Hermosilla",
    Born: "1955-08-17",
    DeputyId: 896
  },
  "218150a8a96f0e5437478186276888a6433ac681": {
    Name: "Gabriel Moisés Silber Romo",
    Born: "1976-09-15",
    DeputyId: 898
  },
  "6126fe92f78af135678e48187a6df58c7f965379": {
    Name: "Alejandro Miguel Anselmo Sule Fernández",
    Born: "1960-11-30",
    DeputyId: 900
  },
  "0abe57018ea404b5fdf4a0228f26b8ff3169a915": {
    Name: "Raúl Fernando Sunico Galdames",
    Born: "1964-07-28",
    DeputyId: 901
  },
  "03142f95932fd85a45ade8101b901f27c59e8aed": {
    Name: "Marisol Turres Figueroa",
    Born: "1964-07-13",
    DeputyId: 905
  },
  "cd93a0502f016b53dc16adbd64663da095635549": {
    Name: "Ximena Verónica Valcarce Becerra",
    Born: "1973-03-25",
    DeputyId: 909
  },
  "1b2008c416a41d6e6a8274852e2934fa6c882150": {
    Name: "Patricio Iván Vallespín López",
    Born: "1964-04-24",
    DeputyId: 911
  },
  "f0f3465b23d7ea49e1782d8f8b63ac80ac07fb09": {
    Name: "Mario Venegas Cárdenas",
    Born: "1957-12-03",
    DeputyId: 913
  },
  "2e8a3f535f96bc477802633120c2bb25eb03e7a6": {
    Name: "José Germán Verdugo Soto",
    Born: "1948-10-05",
    DeputyId: 915
  },
  "dd421289b2dae2249cde9d1539d9207c7bddf763": {
    Name: "Felipe Andrés Ward Edwards",
    Born: "1972-09-14",
    DeputyId: 919
  },
  "3813777d3972b00b1c6bc94e0b6d32309b365807": {
    Name: "Marcelo Gastón Schilling Rodríguez",
    Born: "1949-05-18",
    DeputyId: 920
  },
  "533ab43952c3ae9143ef644e458fa8fb2f981913": {
    Name: "Felipe Harboe Bascuñán",
    Born: "1972-07-20",
    DeputyId: 922
  },
  "1159e65598e59f1bbd7457782c46a56ee13e2041": {
    Name: "Pedro Pablo Alvarez-Salamanca Ramírez",
    Born: "1976-02-18",
    DeputyId: 923
  },
  "354bbe40cc5c8ea7ee0fb4228fd8a41cb9df6599": {
    Name: "Osvaldo Raúl Andrade Lara",
    Born: "1953-06-02",
    DeputyId: 924
  },
  "14a3a1b6a97c9700fe202990520cc1e32d29725a": {
    Name: "Pepe Auth Stewart",
    Born: "1957-03-06",
    DeputyId: 925
  },
  "c3ff25045877426130b60c04c5916e1e4ff9e822": {
    Name: "Nino Baltolu Rasera",
    Born: "1953-09-28",
    DeputyId: 926
  },
  "d214a925db83d1b0cc448fd5f8ae6c3e806d3cd5": {
    Name: "Giovanni Calderón Bassi",
    Born: "1971-07-08",
    DeputyId: 928
  },
  "f69961782fbdc6daf3534dba46b7939c39b43a2b": {
    Name: "Carlos Cristián Campos Jara",
    Born: "1972-11-18",
    DeputyId: 929
  },
  "9faae9e739db27b013d70406ec1c6d067d1b3023": {
    Name: "Lautaro César Carmona Soto",
    Born: "1952-04-26",
    DeputyId: 930
  },
  "ffcb123af9eb4104d0248db7080ae9598b4ee8c4": {
    Name: "Juan Luis Castro González",
    Born: "1960-04-18",
    DeputyId: 931
  },
  "f593cbfa24c461494d373bc0a0b431364345fe07": {
    Name: "Eduardo Antonio Cerda García",
    Born: "1933-01-01",
    DeputyId: 932
  },
  "33803c45f2b401ba15698c5cb47067942269f8f5": {
    Name: "Fuad Chahin Valenzuela",
    Born: "1976-12-01",
    DeputyId: 934
  },
  "7d90e0b1b78dffa67aafc7f6aaaac6dd35db08d2": {
    Name: "José Manuel Rojo Edwards Silva",
    Born: "1977-07-15",
    DeputyId: 935
  },
  "c851d86d80b79fca54d1f42b091425920386bd16": {
    Name: "Cristina Girardi Lavín",
    Born: "1962-01-09",
    DeputyId: 936
  },
  "4014db182a90735941e77289b7c73b9f724f8a24": {
    Name: "Hugo Humberto Gutiérrez Gálvez",
    Born: "1961-10-05",
    DeputyId: 937
  },
  "8ab21be259db2d874842d0c955ac7a3f8dcf4ca2": {
    Name: "Romilio Gutiérrez Pino",
    Born: "1962-02-17",
    DeputyId: 938
  },
  "9085ba5bb5ae21c6cba63c38bbfb0a8a168cd6fe": {
    Name: "María José Hoffmann Opazo",
    Born: "1976-12-28",
    DeputyId: 940
  },
  "3f6633b0b0dc461e790bc31c743aad12a64b3661": {
    Name: "Luis Segundo Lemus Aracena",
    Born: "1961-12-23",
    DeputyId: 941
  },
  "a3ea8b261f99d706f7b2495eee00f66dff1124bd": {
    Name: "Javier Ignacio Macaya Danús",
    Born: "1978-11-11",
    DeputyId: 942
  },
  "1497ab3f6ec400a61aedf93165427a7bc62c810b": {
    Name: "Miodrag Arturo Marinovic Solo de Zaldívar",
    Born: "1967-01-07",
    DeputyId: 943
  },
  "0366831ccfef44f300d4d68fea448f1be4657c20": {
    Name: "Celso René Morales Muñoz",
    Born: "1957-07-10",
    DeputyId: 945
  },
  "4a4e216254987bb1b1a44c6b6e6ed3705a9a9e20": {
    Name: "Leopoldo Alfredo Pérez Lahsen",
    Born: "1957-03-28",
    DeputyId: 946
  },
  "e7e7e09f2b80d23faf4166af614478acbbf66e82": {
    Name: "Ricardo Enrique Rincón González",
    Born: "1966-03-22",
    DeputyId: 947
  },
  "9ceb0bd5cae62fa5bf13286dd13698206ecd6fc7": {
    Name: "Gaspar Alberto Rivas Sánchez",
    Born: "1978-05-17",
    DeputyId: 948
  },
  "6129caaea5a8c211449dfe4fad4aa0d0f1f56177": {
    Name: "Marcela Constanza Sabat Fernández",
    Born: "1981-04-04",
    DeputyId: 949
  },
  "a4bd09f20ba59fbe8a9dae8cf6bb95e800237d56": {
    Name: "Juan Alejandro Santana Tirachini",
    Born: "1965-07-18",
    DeputyId: 952
  },
  "581f60584c1461bcea09cc3bd8e458c26e591dd9": {
    Name: "Frank Carlos Sauerbaum Muñoz",
    Born: "1972-11-21",
    DeputyId: 953
  },
  "5aed7dd6709bdec9a5c4ad127375ee8a2900ba94": {
    Name: "Ernesto Silva Méndez",
    Born: "1975-08-15",
    DeputyId: 954
  },
  "5df3c245625b6aa2a15c7fb4544433af506e77fe": {
    Name: "Luis Arturo Squella Ovalle",
    Born: "1978-09-25",
    DeputyId: 955
  },
  "f3c5b38778c9994c1e60e05aaeb056e905e49834": {
    Name: "Víctor Torres Jeldes",
    Born: "1975-10-11",
    DeputyId: 957
  },
  "8f687dbb159434410c793e9c32f0a604f819ad67": {
    Name: "Joaquín Tuma Zedan",
    Born: "1941-07-09",
    DeputyId: 958
  },
  "18e45149981258ad04537dd80114d866a0626d73": {
    Name: "Enrique Van Rysselberghe Herrera",
    Born: "1976-09-17",
    DeputyId: 959
  },
  "ec007ed1d15521092c3eadd43cb81410267177eb": {
    Name: "Orlando Severo Vargas Pizarro",
    Born: "1952-07-13",
    DeputyId: 960
  },
  "5395ad654bbc4bd870f11078c3c91185d893af03": {
    Name: "Matías Vicente Walker Prieto",
    Born: "1973-07-19",
    DeputyId: 963
  },
  "d90bc5faa6707d6c67716fe544b5643d5cdff97c": {
    Name: "Mónica Beatriz Zalaquett Said",
    Born: "1962-05-04",
    DeputyId: 964
  },
  "a47a2bafbd85abf2cf7134d93cc26983e6cb9902": {
    Name: "Mario Alberto Acuña Cisternas",
    Born: "1951-09-26",
    DeputyId: 1
  },
  "0d234f22bb83124348e13bbf6baada186f3fb3ba": {
    Name: "Gustavo Alessandri Valdés",
    Born: "1929-04-30",
    Died: "2017-07-18",
    DeputyId: 3
  },
  "0d2080ec1b3812ae0e537db6374349240abb660a": {
    Name: "Nelson Jaime Avila Contreras",
    Born: "1942-11-29",
    DeputyId: 10
  },
  "aa96f70d14ac2fdd43fb7a1f034d992d4bd11d15": {
    Name: "Carlos Caminondo Sáez",
    Born: "1937-12-28",
    DeputyId: 15
  },
  "df2e563fec34c046ac79f34ef5b57c4173315900": {
    Name: "Juan Antonio Coloma Correa",
    Born: "1956-07-15",
    DeputyId: 19
  },
  "7d38f3cf1f368a7d0a7932b9442ae32341a07c31": {
    Name: "Sergio Benedicto Elgueta Barrientos",
    Born: "1933-02-04",
    DeputyId: 27
  },
  "eac42f3fa0fb1bd04e04ff7fcf5e056d13b8c1b3": {
    Name: "Alberto Miguel Espina Otero",
    Born: "1956-11-04",
    DeputyId: 30
  },
  "f2a67e42a8bd881f0a2453fd1bc3b0eb53ff8292": {
    Name: "José Gilberto García Ruminot",
    Born: "1955-05-22",
    DeputyId: 35
  },
  "2dbfaf90f4db592bed429b97f7fa6408b47a64fe": {
    Name: "Juan Enrique Fernando Krauss Rusque",
    Born: "1932-01-08",
    DeputyId: 50
  },
  "13d40340bc7b2c25834286cf47dabc88e024a320": {
    Name: "Iván Mesías Lehú",
    Born: "1935-04-03",
    DeputyId: 65
  },
  "dee4c71dda15e211e8a79a0fa47c6fbb36b0db32": {
    Name: "Gastón Luis Pareto González",
    Born: "1928-08-29",
    DeputyId: 85
  },
  "defe16917a16276ae3bb8ec7a22fcf566183335e": {
    Name: "Marina Victoria Prochelle Aguilar",
    Born: "1941-12-09",
    DeputyId: 92
  },
  "241ee9e0147b97224fd6edbec75a16eb7944e6c5": {
    Name: "Baldo Petar Prokuriça Prokuriça",
    Born: "1958-07-02",
    DeputyId: 93
  },
  "c20c3a91314d330890465809ad0cb4e15e12c52e": {
    Name: "Víctor Fernando Reyes Alvarado",
    Born: "1945-07-02",
    DeputyId: 95
  },
  "92ffb2ad6b48785f6210fba9faa949fadc9486c7": {
    Name: "Antonella Sciaraffia Estrada",
    Born: "1966-02-03",
    DeputyId: 103
  },
  "cc296f226cb3737db9fedcce737f4861fe00856e": {
    Name: "Salvador Pedro Urrutia Cárdenas",
    Born: "1942-07-07",
    DeputyId: 110
  },
  "7c8a4f5c3c3eb3fb810097e523f27de6de5fe7b1": {
    Name: "Jacqueline Van Rysselberghe Herrera",
    Born: "1965-02-03"
  },
  "404_09": {
    Name: "Enrique Van Rysselberghe Varela",
    Born: "1937-04-04",
    DeputyId: 112,
    Family: {
      Children: [
        {
          Id: "18e45149981258ad04537dd80114d866a0626d73",
          Name: "Enrique Van Rysselberghe Herrera"
        },
        {
          Id: "7c8a4f5c3c3eb3fb810097e523f27de6de5fe7b1",
          Name: "Jacqueline Van Rysselberghe Herrera"
        }
      ]
    }
  },
  "c5351013dd25d571fd373ef214c734856fdd5f1c": {
    Name: "Ignacio Walker Prieto",
    Born: "1956-01-01",
    DeputyId: 119
  },
  "d360a0ee40199b7873c368e255fea01e8399aa01": {
    Name: "Rafael Luis Arratia Valdebenito",
    Born: "1946-05-12",
    DeputyId: 8
  },
  "404_48": {
    Name: "Manuel Bustos Huerta",
    Born: "1943-12-02",
    Died: "1999-09-27",
    DeputyId: 13
  },
  "404_10": {
    Name: "Haroldo Fossa Rojas",
    Born: "1935-08-19",
    Died: "2006-09-07",
    DeputyId: 31
  },
  "404_11": {
    Name: "Homero Gutiérrez Román",
    Born: "1929-10-13",
    DeputyId: 39
  },
  "875b7552f8c510f100222eb80bb1d3d2a054e326": {
    Name: "Francisco Segundo Huenchumilla Jaramillo",
    Born: "1944-03-22",
    DeputyId: 43
  },
  "0f70fcd106f0228c66322680324d9c27da47e4f3": {
    Name: "José Tomás Jocelyn-Holt Letelier",
    Born: "1963-01-16",
    DeputyId: 49
  },
  "d575aa412197eefafbbfd8a3828fb316908278b5": {
    Name: "Gutenberg Alejandro Martínez Ocamica",
    Born: "1950-08-29",
    DeputyId: 62
  },
  "ad6aaec6aa4629aba89485e145b1e223d64cb47b": {
    Name: "Jaime Naranjo Ortiz",
    Born: "1951-01-12",
    DeputyId: 74
  },
  "404_47": {
    Name: "Joaquín Palma Irarrázaval",
    Born: "1943-02-02",
    Died: "2013-08-17",
    DeputyId: 84
  },
  "81accc2670f24b6f988b95ec84cdb629094f9d62": {
    Name: "Fanny Sonnia Pollarolo Villa",
    Born: "1935-03-07",
    DeputyId: 91
  },
  "751caf683988f0242193eff50c04f116ba1c1e6f": {
    Name: "Felipe Valenzuela Herrera",
    Born: "1941-10-08",
    DeputyId: 111
  },
  "404_13": {
    Name: "Osvaldo Vega Vera",
    Born: "1928-07-24",
    Died: "2006-03-01",
    DeputyId: 114
  },
  "13fd133063a4a6febc9fb9618499f442cf80dbc2": {
    Name: "Andrés Jaime Palma Irarrázaval",
    Born: "1955-07-21",
    DeputyId: 83
  },
  "404_14": {
    Name: "Jaime Rocha Manrique",
    Born: "1938-11-04",
    Died: "2012-10-01",
    DeputyId: 98
  },
  "3e2d5707e8537d90f2541d14c79daa330e0caee1": {
    Name: "Sergio Velasco De la Cerda",
    Born: "1945-12-21",
    DeputyId: 115
  },
  "f58852b4a7425ed142b898c99399c221ce1c6d53": {
    Name: "Juan Ramón Núñez Valenzuela",
    Born: "1943-10-18",
    DeputyId: 76
  },
  "404_15": {
    Name: "María Rozas Velásquez",
    Born: "1955-11-08",
    Died: "2011-05-06",
    DeputyId: 121
  },
  "6d12f047a5200eed5c4289cf422430b79853b9cb": {
    Name: "José Miguel Hernández Saffirio",
    Born: "1949-07-18",
    DeputyId: 42
  },
  "9927ee7af4a7ad0d278d3a5775ce1e4fc7e0a5f5": {
    Name: "José Luis Monge Sánchez",
    Born: "1948-09-20",
    DeputyId: 67
  },
  "d4c9d5effea8e506a26efd5d45812d2fe9b03188": {
    Name: "Gerardo José María Hurtado Ruiz-Tagle",
    Born: "1945-03-05",
    Died: "2018-09-24",
    DeputyId: 448
  },
  "404_16": {
    Name: "Octavio Jara Wolff",
    Born: "1944-07-22",
    Died: "2001-12-30",
    DeputyId: 449
  },
  "d84732d8110e4a6198819757e19686b4a8748975": {
    Name: "Edmundo Segundo Salas De La Fuente",
    Born: "1935-09-09",
    DeputyId: 220
  },
  "235405d0d7560bf7f8ee1472f672a8f71994742e": {
    Name: "Evelyn Rose Matthei Fornet",
    Born: "1953-11-11",
    DeputyId: 467
  },
  "eeab87c911ff41072d779ccfb432a53d6ca92c52": {
    Name: "Eugenio Fernando Munizaga Rodríguez",
    Born: "1941-04-06",
    Died: "2018-05-11",
    DeputyId: 472
  },
  "404_17": {
    Name: "Armando Arancibia Calderón",
    Born: "1941-01-06",
    Died: "2016-02-24",
    DeputyId: 407
  },
  "c8c4b6eb68f77a4d1bce8781e7faada9e00a1f81": {
    Name: "Andrés Aylwin Azocar",
    Born: "1925-06-20",
    Died: "2018-08-20",
    DeputyId: 410
  },
  "5454d201e4e3ccd03fd080b12cdb817f8b84d280": {
    Name: "Carlos Ramón Juan Bombal Otaegui",
    Born: "1950-11-26",
    DeputyId: 415
  },
  "f8931b8cfec52e09148afca81a3a5d5c8d468f4a": {
    Name: "Carlos Raúl Cantero Ojeda",
    Born: "1956-11-11",
    DeputyId: 417
  },
  "5e9d4c94963b6c8f703e4626b86ca322f81e0a0b": {
    Name: "Carlos Emilio Dupré Silva",
    Born: "1944-01-12",
    DeputyId: 426
  },
  "521f0a43365137f100cb811bf9f7c5bb215cd9e2": {
    Name: "Ramón Julio Elizalde Hevia",
    Born: "1940-02-25",
    DeputyId: 428
  },
  "23fe2cf5a5526ab59545f244f1c92188efdea416": {
    Name: "Jaime Luis Estévez Valencia",
    Born: "1946-09-27",
    DeputyId: 433
  },
  "404_18": {
    Name: "Miguel Angel Fantuzzi Hernández",
    Born: "1940-06-12",
    Died: "2002-12-06",
    DeputyId: 434
  },
  "213d3307c49f31893ae772c83d8da4e2d8de2182": {
    Name: "Rubén Gajardo Chacón",
    Born: "1936-04-26",
    DeputyId: 437
  },
  "dd1cd2ca4caebfd3f7c949d904c8d8cde511fe14": {
    Name: "Teodoro Javier Ribera Neumann",
    Born: "1958-05-25",
    DeputyId: 491
  },
  "d66daeb940f0247885c5efd49bab6f6c3ddfb9ee": {
    Name: "Claudio Rodríguez Cataldo",
    Born: "1954-09-24",
    DeputyId: 493
  },
  "d3b74ff5e6360500c52178f6081b00d2c196b87b": {
    Name: "Hosain Sabag Castillo",
    Born: "1937-05-05",
    DeputyId: 495
  },
  "77b8885c62393f455ac28aeb66954b3118efc925": {
    Name: "Jorge Jaime Schaulsohn Brodsky",
    Born: "1952-12-22",
    DeputyId: 497
  },
  "770b55b1de6665510992f5b6be7b161b9aca7629": {
    Name: "Vicente Agustín Sota Barros",
    Born: "1924-04-28",
    Died: "2017-08-16",
    DeputyId: 502
  },
  "d3172a1ac1db6cdc7888a6c382524150d657f16c": {
    Name: "Juan Enrique Taladriz García",
    Born: "1946-03-03",
    DeputyId: 503
  },
  "404_19": {
    Name: "Isidoro Tohá González",
    Born: "1929-01-24",
    Died: "2007-06-16",
    DeputyId: 504
  },
  "0721cd1f01270dfb6c1d136ec7a75264e0e6d2b1": {
    Name: "Raúl Armando Urrutia Avila",
    Born: "1950-05-01",
    DeputyId: 507
  },
  "651d6adfea7a8108b1d8c0beac5bab33288886bb": {
    Name: "Carlos Raúl Valcarce Medina",
    Born: "1950-04-26",
    DeputyId: 509
  },
  "b062fa5ff56e0aea818d06cdcf6c703cd090ad10": {
    Name: "José Antonio César Bernardo del Carmen Viera-Gallo Quesney",
    Born: "1943-12-02",
    DeputyId: 514
  },
  "3887990645f3868ffc5e09772891ff4d86d650b8": {
    Name: "Andrés Allamand Zavala",
    Born: "1956-02-07",
    DeputyId: 405,
    Family: {
      Wife: [
        {
          Id: "61fb9b9d34a0f8c6a82cac1183c8224f0a459f91",
          Name: "Marcela Cubillos Sigall"
        }
      ]
    }
  },
  "6e1b1a4eb84f9586d5220aa68c8d07481b41dc23": {
    Name: "Laura Mariana Aylwin Oyarzún",
    Born: "1949-06-13",
    DeputyId: 411
  },
  "404_20": {
    Name: "Ignacio Balbontín Arteaga",
    Born: "1940-06-18",
    Died: "2015-08-18",
    DeputyId: 412
  },
  "0c07ae0e2d1efbd1bc5277129e85f514f3d9edd2": {
    Name: "Iván Alfonso De la Maza Maillet",
    Born: "1940-10-18",
    DeputyId: 425
  },
  "850157b8c8690800b43fa2daad3adde4f66c42aa": {
    Name: "Luis Valentín Ferrada Valenzuela",
    Born: "1948-09-28",
    DeputyId: 435
  },
  "154b107aa5312951817279407489f8e935640fc1": {
    Name: "Harry Rolando Jürgensen Caesar",
    Born: "1942-05-30",
    DeputyId: 452
  },
  "d7ecdce6e8befb2cea4409f2be4622cb33edde04": {
    Name: "José Amador Makluf Campos",
    Born: "1942-06-20",
    DeputyId: 463
  },
  "9c0f9843c0db5f78cc5988a006475837c41cd50b": {
    Name: "Valentín Jesús Solís Cabezas",
    Born: "1959-11-24",
    DeputyId: 500
  },
  "c6f05b4ee5744abd8b5c57b30abd76ab2fdf74f9": {
    Name: "Erick Alonso Villegas González",
    Born: "1953-11-11",
    DeputyId: 516
  },
  "67c743f5c6beba6623bb779a4fb20fa96ca7d7ce": {
    Name: "Martita Elvira Alemania Wörner Tapia",
    Born: "1947-01-18",
    DeputyId: 519
  },
  "404_21": {
    Name: "Héctor Zambrano Opazo",
    Born: "1939-04-16",
    DeputyId: 520
  },
  "9cd4b2e87abf986cdcede3bec2f639784f14976c": {
    Name: "Hugo Alamos Vásquez",
    Born: "1932-08-22",
    DeputyId: 603
  },
  "8dd3626c71993fe0e2649a59a07d9d4b723a0f06": {
    Name: "Gustavo Alessandri Balmaceda",
    Born: "1961-03-08",
    DeputyId: 604
  },
  "789155ed418bca597b6e38123206bb631cb9be19": {
    Name: "Carlos Hernán Bosselin Correa",
    Born: "1943-12-31",
    DeputyId: 612
  },
  "f15d6b21e17f7b86c35d3f47199ac9ac29b69c20": {
    Name: "Jaime Alfonso Campos Quiroga",
    Born: "1953-02-16",
    DeputyId: 614
  },
  "404_22": {
    Name: "Gustavo Cardemil Alfaro",
    Born: "1920-04-10",
    Died: "2008-07-11",
    DeputyId: 617
  },
  "f3749d01b2c178bb0afbe6700190adce3ca62cee": {
    Name: "Baldemar Carrasco Muñoz",
    Born: "1931-09-24",
    DeputyId: 618
  },
  "3c1c434b45781214aea237cf16e8e1a5028931f4": {
    Name: "Mario Enrique Devaud Ojeda",
    Born: "1955-08-23",
    DeputyId: 626
  },
  "5181292982e4a7b4082edeb9a0617dbbeeeedb10": {
    Name: "Dionisio Ventura Faulbaum Mayorga",
    Born: "1961-01-30",
    DeputyId: 634
  },
  "0525edf0aa884c2454585a1cb10dd85c21bb4b1d": {
    Name: "Juan Pedro Guzmán Alvarez",
    Born: "1943-12-30",
    DeputyId: 639
  },
  "09a9a595e2d9b1d760686a8d83a124d38cad765c": {
    Name: "Antonio Carlos Horvath Kiss",
    Born: "1950-01-03",
    Died: "2018-05-23",
    DeputyId: 641
  },
  "404_23": {
    Name: "Claudio Huepe García",
    Born: "1939-12-25",
    Died: "2009-05-11",
    DeputyId: 643
  },
  "70ae7a720c89d696f8d35fb2e30d4ecbf1edc098": {
    Name: "Sergio Raúl Jara Catalán",
    Born: "1946-10-09",
    DeputyId: 645
  },
  "45289cddc8295fab47baa0a362d0713fc218d8a3": {
    Name: "Vladislav Dusan Kuzmicic Calderón",
    Born: "1945-10-23",
    DeputyId: 649
  },
  "404_24": {
    Name: "María Maluenda Campos",
    Born: "1920-03-06",
    Died: "2011-08-29",
    DeputyId: 656
  },
  "404_25": {
    Name: "Juan Martínez Sepúlveda",
    Born: "1943-09-25",
    DeputyId: 658
  },
  "2bfb76735d69f429bc3cb8c3fbbadef4aaab9627": {
    Name: "Manuel José Ramón Matta Aragay",
    Born: "1946-11-10",
    DeputyId: 660
  },
  "bfb0c1d21c74ed0076abf9db47a4122a4291ded3": {
    Name: "Federico Andrés Mekis Martínez",
    Born: "1955-08-14",
    DeputyId: 662
  },
  "abd7115626c750a07102053d95946bbde853a351": {
    Name: "Jorge Guillermo Molina Valdivieso",
    Born: "1932-02-16",
    DeputyId: 664
  },
  "7970df5ba7ad79190349d71bf425022209d5ebc6": {
    Name: "Jorge Carlos Morales Adriasola",
    Born: "1931-10-02",
    DeputyId: 666
  },
  "011ed5b03ff97f3f0a552e5f5c50ae7e2113f080": {
    Name: "Roberto Muñoz Barra",
    Born: "1936-01-28",
    DeputyId: 668
  },
  "404_26": {
    Name: "Luis Navarrete Carvacho",
    Born: "1925-09-27",
    Died: "2006-11-30",
    DeputyId: 671
  },
  "404_27": {
    Name: "Héctor Olivares Solis",
    Born: "1924-08-22",
    Died: "2009-02-02",
    DeputyId: 673
  },
  "404_28": {
    Name: "Eugenio Ortega Riquelme",
    Born: "1940-06-14",
    Died: "2013-09-27",
    DeputyId: 675
  },
  "404_29": {
    Name: "Mario Palestro Rojas",
    Born: "1921-12-02",
    Died: "2000-04-10",
    DeputyId: 677
  },
  "1ecbe2ca83a95159703fb3d81a8e64c42cf92039": {
    Name: "José Apolonio Peña Meza",
    Born: "1951-10-05",
    DeputyId: 680
  },
  "1110301e584978b7011ccce3a5aeb6c5f87faa82": {
    Name: "Juan Alberto Pérez Muñoz",
    Born: "1948-03-13",
    DeputyId: 681
  },
  "f1fc4e8d47d7dca20f00a21430e4a4da5585e9c3": {
    Name: "Gustavo Ramírez Vergara",
    Born: "1932-05-03",
    DeputyId: 688
  },
  "32c499a9a79d74d9cced63aab7a5f5bed8cda6f2": {
    Name: "Federico Ringeling Hunger",
    Born: "1954-07-08",
    DeputyId: 693
  },
  "404_30": {
    Name: "Hugo Rodríguez Guerrero",
    Born: "1937-07-17",
    DeputyId: 697
  },
  "404_31": {
    Name: "Laura Fiora Rodríguez Riccomini",
    Born: "1957-04-01",
    Died: "1992-07-18",
    DeputyId: 698
  },
  "404_32": {
    Name: "Hernán Rojo Avendaño",
    Born: "1930-07-30",
    Died: "2012-12-20",
    DeputyId: 699
  },
  "e0fa8019b21f77db12b54825064c72ce9fc84954": {
    Name: "Julio Rojos Astorga",
    Born: "1953-01-13",
    DeputyId: 700
  },
  "404_33": {
    Name: "Juan Akin Soto Morales",
    Born: "1933-12-27",
    Died: "1992-12-15",
    DeputyId: 707
  },
  "404_34": {
    Name: "Andrés Sotomayor Mardones",
    Born: "1943-07-25",
    Died: "2014-04-06",
    DeputyId: 708
  },
  "5c37b99208f123eace6b664aa2a660b24c0b35d4": {
    Name: "Guillermo Yunge Bustamante",
    Born: "1953-09-26",
    DeputyId: 720
  },
  "b8f7f9bc3dbccf1bc3a45bc535a4609ecc660dea": {
    Name: "Martín Manterola Urzúa",
    Born: "1948-05-25",
    DeputyId: 721
  },
  "23573619ac9cbb34bfaf7e7d276fa45dd6590a59": {
    Name: "Francisco Leandro Bayo Veloso",
    Born: "1933-03-13",
    DeputyId: 132
  },
  "d4074c1611486dc203ae6082c7d4248a0a0ee0bf": {
    Name: "Eliana María Angélica Caraball Martínez",
    Born: "1937-04-27",
    DeputyId: 137
  },
  "cf75b043d09251dcfcae83eaa3d967faa4b99ec1": {
    Name: "Camilo Enrique Escalona Medina",
    Born: "1955-06-15",
    DeputyId: 150
  },
  "ae93c3988da61dfbc07f29e37b48736ccd635432": {
    Name: "Mario Guillermo Escobar Urbina",
    Born: "1952-03-09",
    DeputyId: 151
  },
  "b9e90e3851bab8cfaab91062bd625597cb090c7d": {
    Name: "José Antonio Galilea Vidaurre",
    Born: "1961-11-19",
    DeputyId: 155
  },
  "b8f150b73325ddb2b986d35184520835e700558b": {
    Name: "Rosa Orfilia González Román",
    Born: "1942-07-23",
    Died: "2019-01-21",
    DeputyId: 159
  },
  "404_35": {
    Name: "Carlos Hidalgo González",
    Born: "1955-06-10",
    DeputyId: 164
  },
  "0c53e40681022805de7b04179eef5a385821bcd4": {
    Name: "Gonzalo José Salvador Ibáñez Santa María",
    Born: "1945-12-30",
    DeputyId: 165
  },
  "52adfb62e109ab32fd42c40caff6e66f46d7dad3": {
    Name: "Víctor Jeame Barrueto",
    Born: "1953-07-01",
    DeputyId: 169
  },
  "970c4af65d14509e9a1137f52c311607e5408421": {
    Name: "Jaime Jiménez Villavicencio",
    Born: "1963-04-06",
    DeputyId: 170
  },
  "e458ab5bcc9431c0b43110528aced48adc6b57f4": {
    Name: "Carlos Ignacio Kuschel Silva",
    Born: "1953-03-16",
    DeputyId: 172
  },
  "404_36": {
    Name: "Eduardo Lagos Herrera",
    Born: "1967-01-17",
    DeputyId: 173
  },
  "3291162677ed8d4c17f0f579b2fce4442481015d": {
    Name: "Juan Pablo Letelier Morel",
    Born: "1961-01-07",
    DeputyId: 176
  },
  "3f7a80659b6e81098829d335787cb42191cb9ee2": {
    Name: "Felipe Rudecindo Letelier Norambuena",
    Born: "1956-05-11",
    DeputyId: 177
  },
  "5faea4473141314c82ad6bd731def683de767183": {
    Name: "Juan Pablo Longueira Montes",
    Born: "1958-08-12",
    DeputyId: 179
  },
  "d9b582727064e07298c979cf93879a4312350fd1": {
    Name: "Zarko Cosme Luksic Sandoval",
    Born: "1956-05-06",
    DeputyId: 181
  },
  "ae95cdf299f47c0b86e280e7a1da21d3c2ee469d": {
    Name: "Darío Alexis Molina Sanhueza",
    Born: "1966-06-20",
    DeputyId: 187
  },
  "5a4e2f4ec50067cb6618fe0a1ca769c629b1a8d7": {
    Name: "Waldo Manuel Mora Longa",
    Born: "1942-12-12",
    DeputyId: 190
  },
  "6a31dcdcd0205c85deafe31952eafe3ed0e9638c": {
    Name: "Alejandro Navarro Brain",
    Born: "1958-11-20",
    DeputyId: 195
  },
  "f6f15b5b5cecaac5db122775c4768acdc51c4171": {
    Name: "Cristián Pablo Pareto Vergara",
    Born: "1963-10-19",
    DeputyId: 202
  },
  "404_37": {
    Name: "Ramón Pérez Opazo",
    Born: "1933-12-03",
    DeputyId: 206
  },
  "f0c20add3bf30d5f28bcc18259f65d9bd20f15c1": {
    Name: "Víctor Manuel Rebolledo González",
    Born: "1949-06-06",
    DeputyId: 211
  },
  "90a5458deeec375e6ed7fe9b52370fd2096e8298": {
    Name: "Bolivar Leopoldo Sánchez Grunert",
    Born: "1949-10-20",
    DeputyId: 221
  },
  "48d0219fb3144c7d121393d7982898c66e87a8c3": {
    Name: "Rodolfo Samuel Seguel Molina",
    Born: "1953-09-20",
    DeputyId: 222
  },
  "3f4e1013b67ec04a074c8a8d2159e7b756f0af41": {
    Name: "Exequiel Armando Silva Ortiz",
    Born: "1963-10-13",
    DeputyId: 224
  },
  "404_38": {
    Name: "Mario Varela Herrera",
    Born: "1953-11-12",
    DeputyId: 234
  },
  "655dfc17d3daa2ea621529212694b9cff438d0c6": {
    Name: "Edmundo Villouta Concha",
    Born: "1926-09-17",
    DeputyId: 239
  },
  "404_39": {
    Name: "Arturo Longton Guerrero",
    Born: "1948-06-25",
    Died: "2015-07-03",
    DeputyId: 178
  },
  "832cb8a83698b3ba560bcde3a70b01008482581d": {
    Name: "Pedro Héctor Muñoz Aburto",
    Born: "1944-07-01",
    DeputyId: 193
  },
  "2124de4f86fa419c2868554f769da00378f3f5e0": {
    Name: "Aníbal Patricio Pérez Lobos",
    Born: "1948-01-20",
    DeputyId: 205
  },
  "5dc2b6e34ac2e3b8e0f6d48814c20915eea56a65": {
    Name: "Patricio Cornejo Vidaurrázaga",
    Born: "1942-10-17",
    DeputyId: 140
  },
  "c4806bac334f3c3f7a200442816344230b6662c4": {
    Name: "Guido Girardi Lavín",
    Born: "1961-01-24",
    DeputyId: 158
  },
  "aabe64e25fb636af7577f1a0733dcc5d8f70ad6d": {
    Name: "Edgardo Sebastián Riveros Marín",
    Born: "1949-09-03",
    DeputyId: 213
  },
  "27b44318995ba5a467c9b870bccb9711b230796b": {
    Name: "María Pía Guzmán Mena",
    Born: "1957-06-23",
    DeputyId: 161
  },
  "2ce02a9835808468e9febd586bf4d6bf23df9da3": {
    Name: "Cristián Antonio Leay Morán",
    Born: "1954-02-09",
    DeputyId: 175
  },
  "9a15bf80bb89e37813cf73eea57ce89e59b44087": {
    Name: "Carmen Ibáñez Soto",
    Born: "1959-02-07",
    DeputyId: 166
  },
  "f6b30a92e231fc8bc7e13760771e63c3d6d08674": {
    Name: "María Eugenia Mella Gajardo",
    Born: "1952-03-04",
    DeputyId: 185
  },
  "ccfd41fb072c4126dbbfe83e4203d19690a0c784": {
    Name: "Boris Tapia Martínez",
    Born: "1941-08-27",
    DeputyId: 226
  },
  "404_40": {
    Name: "Juan Concha Urbina",
    Born: "1923-11-10",
    Died: "2010-05-10",
    DeputyId: 621
  },
  "404_41": {
    Name: "Milenko Vilicic Karnincic",
    Born: "1932-03-09",
    Died: "1993-07-04",
    DeputyId: 718
  },
  "18b4f57698bd8732410fb1ed5ab461c3f10b0455": {
    Name: "Jaime Antonio Orpis Bouchon",
    Born: "1956-09-16",
    DeputyId: 79
  },
  "777f16ab5de04e8078239098e1fc5f1bfcb3d98c": {
    Name: "Andrés Pio Bernardino Chadwick Piñera",
    Born: "1956-01-02",
    DeputyId: 424
  },
  "560ff47960aad96420e050ca17b0ade653b8300c": {
    Name: "Sergio Morales Morales",
    Born: "1945-10-22",
    DeputyId: 470
  },
  "518d1e0dceb1a746bd8e2e849542c8cdb232d26f": {
    Name: "Luis Enrique Leblanc Valenzuela",
    Born: "1950-04-12",
    Died: "2017-08-19",
    DeputyId: 652
  },
  "52df7bbb49c7d3b9b66cbd6c0ce007122f3a0289": {
    Name: "Carlos Iván Smok Ubeda",
    Born: "1952-10-01",
    DeputyId: 705
  },
  "87b8efc9cf99fdc8b20e3b37075c6836bd6386f1": {
    Name: "Néstor Arturo Jofré Núñez",
    Born: "1947-10-19",
    DeputyId: 242
  },
  "2cda429aeea38ef989060f5ebd231a7a94439af0": {
    Name: "María Victoria Ovalle Ovalle",
    Born: "1947-06-12",
    DeputyId: 81
  },
  "d178a980b26ebb6fd0dc2c0cb63ef50210fff19d": {
    Name: "Jorge Alfredo Alejandro Soria Macchiavello",
    Born: "1969-03-03",
    DeputyId: 106
  },
  "d8264897cc7b441284d6a0d5dfe90c3021db6c14": {
    Name: "Mario Francisco Bartolucci Johnston",
    Born: "1949-12-24",
    DeputyId: 11
  },
  "404_42": {
    Name: "Mario Hamuy Berr",
    Born: "1926-08-10",
    Died: "2011-03-07",
    DeputyId: 445
  },
  "404_43": {
    Name: "José Luis González Rodríguez",
    Born: "1939-04-11",
    DeputyId: 443
  },
  "aa3e292442348374dab27c4d75348c9f05d4f845": {
    Name: "Vicente Karelovic Vrandecic",
    Born: "1933-06-26",
    Died: "2019-04-10",
    DeputyId: 453
  },
  "d253f514d15f3f6ac7bf81be02bc08b9dfa3497c": {
    Name: "Romy María Veriana Rebolledo Leyton",
    Born: "1960-10-31",
    DeputyId: 489
  },
  "62b16e5e5dbf0247ce9976474366eaccaf97bd52": {
    Name: "Nicanor Araya de la Cruz",
    Born: "1938-03-04",
    DeputyId: 607
  },
  "44ddd17899941f33ef324ce888e46f496dd358e1": {
    Name: "Cristian Letelier Aguilar",
    Born: "1954-05-18",
    DeputyId: 965
  },
  "8896ce6b42582bce1f2fdd25ca35aa7d1bbe4ee8": {
    Name: "Flaminio Joel Rosales Guzmán",
    Born: "1955-01-12",
    DeputyId: 966
  },
  "49092a6d2e3f9c81de8f1cfccd43ce2711f699b2": {
    Name: "Issa Farid Kort Garriga",
    Born: "1980-05-09",
    DeputyId: 967
  },
  "42f7236c76d1cae9aa09fced1eebaaf323881295": {
    Name: "Renzo Aldo Trisotti Martínez",
    Born: "1976-03-15",
    DeputyId: 1003
  },
  "346a9078bd5ae8b844d8be33085106d00437e969": {
    Name: "Joaquín Lavín León",
    Born: "1979-05-25",
    DeputyId: 989,
    Family: {
      Wife: [
        {
          Id: "6ce82583393e2db066051435deff7163890075d6",
          Name: "Cathy Carolina Barriga Guerra"
        }
      ]
    }
  },
  "6ce82583393e2db066051435deff7163890075d6": {
    Name: "Cathy Carolina Barriga Guerra",
    Born: "1973-04-09",
    Family: {
      Husband: [
        {
          Id: "346a9078bd5ae8b844d8be33085106d00437e969",
          Name: "Joaquín Lavín León"
        }
      ]
    }
  },
  "1f6e9f9d5f98a79f849a1f69699ab077e9723039": {
    Name: "Camila Antonia Amaranta Vallejo Dowling",
    Born: "1988-04-28",
    DeputyId: 1006
  },
  "4907c57b640b2fcf604045875ed3fb4b0d0ab34e": {
    Name: "María Loreto Carvajal Ambiado",
    Born: "1973-05-18",
    DeputyId: 974
  },
  "c05fa2759b425a37f4f11b1380fe3c8250b59653": {
    Name: "Iván Flores García",
    Born: "1955-06-15",
    DeputyId: 982
  },
  "2221dbebad9181f9c81d7007e810f011828e2d36": {
    Name: "Juan Enrique Morano Cornejo",
    Born: "1952-09-10",
    DeputyId: 992
  },
  "3904534b62fa2fb99d9fbaefa359f5287a2116b7": {
    Name: "Marcela Ximena Hernando Pérez",
    Born: "1960-02-12",
    DeputyId: 986
  },
  "74c950490073348916b9dc5977bb086e41c4ba47": {
    Name: "Paulina Andrea Núñez Urrutia",
    Born: "1982-12-30",
    DeputyId: 994,
    Family: {
      Husband: [
        {
          Id: "f1ae04fac2e4b153570222f954e0c11c5907225a",
          Name: "Cristián Monckeberg Bruner"
        }
      ]
    }
  },
  "d4750b7f5aac4c2bc392d74e09c0fb825fdb068e": {
    Name: "Yasna Provoste Campillay",
    Born: "1969-12-16",
    DeputyId: 998
  },
  "c8b7aafb00dc7f0db1ace246a76e6e5b1590c1f8": {
    Name: "Sergio Alfredo Gahona Salazar",
    Born: "1965-09-15",
    DeputyId: 985
  },
  "28a86da8570ad798a6948108f26ddb8f2f120c7e": {
    Name: "Daniel Ignacio Núñez Arancibia",
    Born: "1971-01-07",
    DeputyId: 993
  },
  "66455c68b97643086f759d504c3de9b66939930e": {
    Name: "Christian Erwin Urízar Muñoz",
    Born: "1968-05-27",
    DeputyId: 1004
  },
  "a86f647c1ff0a2cd66bd50079a3c2cd216ba2c02": {
    Name: "Osvaldo Alejandro Nicanor Urrutia Soto",
    Born: "1951-11-28",
    DeputyId: 1005
  },
  "729d68cac38dc848ea4d8aede349ad93adda4817": {
    Name: "Daniel Alejandro Farcas Guendelman",
    Born: "1963-11-02",
    DeputyId: 980
  },
  "e8a29fecef6930b8e2a8af3e2296a1e6319956b6": {
    Name: "Karol Cariola Oliva",
    Born: "1987-04-01",
    DeputyId: 973
  },
  "1733df4e05e8eb253e6f6b21da20aa342591c6f7": {
    Name: "Maya Alejandra Fernández Allende",
    Born: "1971-11-27",
    DeputyId: 981
  },
  "b33cfa6501f2184011d0d49a35192c41a0e59926": {
    Name: "Kenneth Giorgio Jackson Drago",
    Born: "1987-02-06",
    DeputyId: 987
  },
  "404_44": {
    Name: "Michael Kast Schindele",
    Born: "1924-01-01",
    Died: "2014-05-09",
    Family: {
      Children: [
        {
          Id: "404_45",
          Name: "Miguel Kast Rist"
        },
        {
          Id: "f1383e1210cdf254263e47a4ccfb223132ac43b4",
          Name: "José Antonio Kast Rist"
        }
      ]
    }
  },
  "404_45": {
    Name: "Miguel Kast Rist",
    Born: "1948-12-18",
    Died: "1983-09-18",
    Family: {
      Children: [
        {
          Id: "3df3793b589bd887c8c9d59d4bb5b2a3e47c9134",
          Name: "Felipe Kast Sommerhoff"
        },
        {
          Id: "534851c47e9d747f2fb0b46e6c8548642949f5b4",
          Name: "Pablo Andrés Kast Sommerhoff"
        }
      ]
    }
  },
  "3df3793b589bd887c8c9d59d4bb5b2a3e47c9134": {
    Name: "Felipe Kast Sommerhoff",
    Born: "1977-06-09",
    DeputyId: 988
  },
  "cbb692c38fa6b0861f6b991e6613f8a66ca73e2f": {
    Name: "Jaime Hernán Gonzalo Pilowsky Greene",
    Born: "1965-12-03",
    DeputyId: 996
  },
  "f420a56aa24b98b48dae0f39ea3daa2ef4d4ddfa": {
    Name: "Claudio Eugenio Arriagada Macaya",
    Born: "1955-10-22",
    DeputyId: 969
  },
  "fdc352e77947d91a24c88641162336085bc2793a": {
    Name: "Daniel Alexander Melo Contreras",
    Born: "1979-02-18",
    DeputyId: 990
  },
  "620f76c1d5b935fc0179cb906c40e79b1beb3a1c": {
    Name: "Jaime Andrés Bellolio Avaria",
    Born: "1980-11-29",
    DeputyId: 970
  },
  "6b10fff4fe9e676f08a37d469ced26ebe6d4713b": {
    Name: "Leonardo Soto Ferrada",
    Born: "1966-05-15",
    DeputyId: 1002
  },
  "65f2d1890a37d3cd48b02f997716fe491433ba05": {
    Name: "Juan Antonio Coloma Álamos",
    Born: "1980-03-14",
    DeputyId: 976
  },
  "1895da26f6472fa18b7d23bc652cce78153c917d": {
    Name: "Sergio Espejo Yaksic",
    Born: "1967-03-15",
    DeputyId: 979
  },
  "e4c559585a8664071d28cb59d94f01c7aa965d27": {
    Name: "Marcelo Omar Chávez Velásquez",
    Born: "1975-02-19",
    DeputyId: 977
  },
  "33b7370abb025a3f52e7e187d14eb0b8ce3c3762": {
    Name: "Roberto Poblete Zapata",
    Born: "1955-01-08",
    DeputyId: 997
  },
  "6185d8916c66d3c9ba92107c548a82c872f60665": {
    Name: "Diego Alfredo Paulsen Kehr",
    Born: "1987-08-01",
    DeputyId: 995
  },
  "a28bc9e57581b875991bbd40631f28eaf548391a": {
    Name: "Bernardo Jose Berger Fett",
    Born: "1946-10-04",
    DeputyId: 971
  },
  "c11d593b25f141f1f5e9ccb3a495f1eb4eba1546": {
    Name: "Gonzalo Guillermo Fuenzalida Figueroa",
    Born: "1973-06-18",
    DeputyId: 984
  },
  "1351731916727b402bbbd42f0ba6dbdfaa632499": {
    Name: "Felipe De Mussy Hiriart",
    Born: "1982-09-28",
    DeputyId: 978
  },
  "055f24aca33768c900c55fa3f7a2bec57cf51b6d": {
    Name: "Iván Aladino Fuentes Castillo",
    Born: "1967-07-24",
    DeputyId: 983
  },
  "fb2b25556adf2646abc1d6cfdbb491018f715194": {
    Name: "Gabriel Boric Font",
    Born: "1986-02-11",
    DeputyId: 972
  },
  "3d95c91970661925108d8b6d329f9663c31d5417": {
    Name: "Miguel Ángel Alvarado Ramírez",
    Born: "1961-07-10",
    DeputyId: 1007
  },
  "6ec0a41d8ff13cdf50e3a1dbcc72997af4800c89": {
    Name: "Raúl Florcita Alarcón Rojas",
    Born: "1945-10-15",
    DeputyId: 1008
  },
  "186ff7d6d25014ce52298a30b372d415848ee95c": {
    Name: "Jorge Alessandri Vergara",
    Born: "1979-06-08",
    DeputyId: 1009
  },
  "3251dca193705fe3395f6691a481952a850f9e3c": {
    Name: "Sebastián Diego Álvarez Ramírez",
    Born: "1970-11-13",
    DeputyId: 1010
  },
  "aecf1bfe4d6b5f1ba89182695dc0f8bf931c6085": {
    Name: "Sandra Haydee Amar Mancilla",
    Born: "1955-11-24",
    DeputyId: 1011
  },
  "a1754ae62a235fdfdcc5a84ccd34af14e40358c2": {
    Name: "Boris Anthony Barrera Moreno",
    Born: "1970-05-03",
    DeputyId: 1012
  },
  "2f8d214e04d3f11a7d529e9c771d8372f235fa51": {
    Name: "Karim Antonio Bianchi Retamales",
    Born: "1983-01-31",
    DeputyId: 1014
  },
  "e2c6be59f716a66b21d18217b0351eafaf5c98db": {
    Name: "Miguel Ángel Calisto Águila",
    Born: "1985-07-19",
    DeputyId: 1016
  },
  "fe8fe6dbcd0ff3fbdcd0b402dffa2b9435a145f2": {
    Name: "Álvaro Jorge Carter Fernández",
    Born: "1980-10-09",
    DeputyId: 1017
  },
  "5c1bf64fab54b45467af36f7033b55be4b32b802": {
    Name: "Natalia Valentina Castillo Muñoz",
    Born: "1982-08-01",
    DeputyId: 1018
  },
  "9ef4a96bc8594bb934f10ca09a871481229003c2": {
    Name: "Ricardo Celis Araya",
    Born: "1955-07-11",
    DeputyId: 1020
  },
  "4a9d66ff647febdfcd0be84d2021435b6e76fa3b": {
    Name: "Andrés Celis Montt",
    Born: "1975-04-08",
    DeputyId: 1021
  },
  "d2ec79d26dbd1546bef722eed8be210eb409ec45": {
    Name: "Sofía Slovena Cid Versalovic",
    Born: "1971-09-29",
    DeputyId: 1022
  },
  "2a9259110d10d0729cda41a079bea37e56f0f228": {
    Name: "Luciano Cruz-Coke Carvallo",
    Born: "1970-07-01",
    DeputyId: 1024
  },
  "e1d6b03690b2a256c44f9c99fc3be2cc85bdcd26": {
    Name: "María Catalina Del Real Mihovilovic",
    Born: "1968-11-07",
    DeputyId: 1025
  },
  "62f5adb90cc7d54cf4fd84f9cefc2dcb65f4a48f": {
    Name: "Mario Guillermo Desbordes Jiménez",
    Born: "1968-10-15",
    DeputyId: 1026
  },
  "a1ee83001ff55754f555c72a6ac200f482589c15": {
    Name: "Jorge Andrés Durán Espinoza",
    Born: "1980-12-17",
    DeputyId: 1027
  },
  "78788f3312832ccb975c435468697f89125dde0f": {
    Name: "Francisco de Borja Eguiguren Correa",
    Born: "1967-07-13",
    DeputyId: 1029
  },
  "6e3254daedf71e65d35b52482f14c1bfe637ddcf": {
    Name: "Camila Alejandra Flores Oporto",
    Born: "1987-02-09",
    DeputyId: 1030,
    Family: {
      Husband: [
        {
          Id: "3c7cf78c5639b90636dcb312bbc3c09c58e1deb4",
          Name: "Percy Marín Vera",
          From: "2017-01-01"
        }
      ]
    }
  },
  "3c7cf78c5639b90636dcb312bbc3c09c58e1deb4": {
    Name: "Percy Marín Vera",
    Born: "1969-09-22",
    Family: {
      Wife: [
        {
          Id: "6e3254daedf71e65d35b52482f14c1bfe637ddcf",
          Name: "Camila Alejandra Flores Oporto",
          From: "2017-01-01"
        }
      ]
    }
  },
  "9d96f9d4b5b092d4987d1b9dc333de264567412d": {
    Name: "Juan Manuel Fuenzalida Cobo",
    Born: "1973-07-01",
    DeputyId: 1031
  },
  "c18c7acf221e69cb950b0d40ee5848b9ab4f1eab": {
    Name: "Ramón Ernesto Galleguillos Castillo",
    Born: "1953-07-26",
    DeputyId: 1032
  },
  "5c892a483e1e66a78e0640b648269c26dedbdf40": {
    Name: "Renato Fabrizio Garín González",
    Born: "1986-05-30",
    DeputyId: 1033
  },
  "49fb25a927d2521189022eb52b93e1dab064645d": {
    Name: "Carmen Adelaida Hertz Cádiz",
    Born: "1945-06-19",
    DeputyId: 1035
  },
  "2c65a090f5f8d1374e2d440ac59d958e03b335b1": {
    Name: "Tomás René Hirsch Goldschmidt",
    Born: "1956-07-19",
    DeputyId: 1036
  },
  "dbfb1eb63bfad28a469e5385aba1f05f5c1cd1ed": {
    Name: "Diego Eduardo Ibáñez Cotroneo",
    Born: "1989-01-25",
    DeputyId: 1037
  },
  "60498fb3a14a2389519f092afaddd1f8a260dca8": {
    Name: "Pamela Jiles Moreno",
    Born: "1960-11-30",
    DeputyId: 1039
  },
  "fac6b73e5e34acdc3a635488da197d8ee00a101e": {
    Name: "Harry Kurt Thomas Jürgensen Rundshagen",
    Born: "1968-09-03",
    DeputyId: 1040
  },
  "786641cf735ba22b03fcfbc9bb305e4dff92d92b": {
    Name: "Sebastián Keitel Bianchi",
    Born: "1973-02-14",
    DeputyId: 1042
  },
  "454e9afee3763902aa84638e4fa1794b6df6a124": {
    Name: "Raúl Alfonso Leiva Carvajal",
    Born: "1974-03-24",
    DeputyId: 1044
  },
  "4f656281076bb5e318d0a4ceb54dae105a08465d": {
    Name: "Aracely Andrea Leuquén Uribe",
    Born: "1980-11-24",
    DeputyId: 1045
  },
  "828b3d062b7100c577ac1bde6b26f38ba68b7ef1": {
    Name: "Andrés Longton Herrera",
    Born: "1982-05-26",
    DeputyId: 1046
  },
  "bfd1b69bd11c651b795d735aac31550f715edfcf": {
    Name: "Karin Claudia Luck Urban",
    Born: "1971-07-19",
    DeputyId: 1047
  },
  "bcbd042d33c4e84fc2ece8bbbfa653fe84995514": {
    Name: "Marta Carolina Marzán Pinto",
    Born: "1963-12-22",
    DeputyId: 1048
  },
  "95e7a8be4d3b760628729c510999610efee1ff5b": {
    Name: "Cosme Leopoldo Mellado Pino",
    Born: "1960-02-24",
    DeputyId: 1049
  },
  "c7323f61b2b71700c6af24cf7178512a040ca218": {
    Name: "Miguel Alejandro Mellado Suazo",
    Born: "1958-12-29",
    DeputyId: 1050
  },
  "0a870a208f9bc4b8bed2f6a5da7d08d18723d513": {
    Name: "Claudia Nathalie Mix Jiménez",
    Born: "1969-07-13",
    DeputyId: 1051
  },
  "ce97e00bb66bc235519161b66fcaf0df2bc7ed67": {
    Name: "Jose Sergio Andrés Molina Magofke",
    Born: "1963-11-17",
    DeputyId: 1052
  },
  "a77af3defed125bc2105310e2f25e024b77568af": {
    Name: "Francesca Elizabeth Andrea Muñoz González",
    Born: "1980-03-07",
    DeputyId: 1054
  },
  "e9c33a18ef2454fdfefd65ba29c4014b9da1bcba": {
    Name: "Nicolás José Noman Garrido",
    Born: "1981-05-07",
    DeputyId: 1055
  },
  "6e817a421e49ec051594ce63ba9b819824fe39da": {
    Name: "Emilia Iris Nuyado Ancapichún",
    Born: "1968-08-17",
    DeputyId: 1056
  },
  "7e852a037b8330e0dfb2215fbf850d08c3aaaa07": {
    Name: "Erika Alejandra Olivera De La Fuente",
    Born: "1976-01-04",
    DeputyId: 1057
  },
  "c8c5ff8ad19345447a0b824004bcabc19cec4dee": {
    Name: "María Ximena Ossandón Irarrázabal",
    Born: "1963-12-13",
    DeputyId: 1059
  },
  "1581560e6d8e21d28cb576c2be6c34167bfadda7": {
    Name: "Luis Rafael Pardo Sáinz",
    Born: "1960-12-13",
    DeputyId: 1060
  },
  "26d2778a624cf100839abe3ef7c0e9c5fbf77c08": {
    Name: "Irle Andrea Parra Sauterel",
    Born: "1967-09-02",
    DeputyId: 1061
  },
  "c785e0c63e907a73d2046e0ad51dfdca82eaf52a": {
    Name: "Joanna Elena Pérez Olea",
    Born: "1976-04-01",
    DeputyId: 1062
  },
  "97d2308350a2df66b6868a5f212a0f2816d093b5": {
    Name: "Catalina Ilona Io Pérez Salinas",
    Born: "1990-12-18",
    DeputyId: 1063
  },
  "2a30bf33bd93871683b2e9b41d70dc1ddbf92546": {
    Name: "Pablo Samuel Prieto Lorca",
    Born: "1959-05-04",
    DeputyId: [
      209,
      1064
    ]
  },
  "211abb9c96ad41acf451540b9e64464e48ec67fa": {
    Name: "Guillermo Andrés Ramírez Diez",
    Born: "1979-04-16",
    DeputyId: 1065
  },
  "8d0de97b3939ee3d29e681ba1f9db0e3c2b209f4": {
    Name: "Rolando Ramón Rentería Moller",
    Born: "1968-08-19",
    DeputyId: 1066
  },
  "c0e938fb1aec8b3ef419b7171e65a15181585323": {
    Name: "Hugo Vicente Rey Martínez",
    Born: "1973-12-06",
    DeputyId: 1067
  },
  "3ea895fd175da7e93af8fd0b53e39b4d13d62d19": {
    Name: "Camila Ruzlay Rojas Valderrama",
    Born: "1991-03-11",
    DeputyId: 1068
  },
  "6259e326e1d2545df582d9e6dc13724c0d51c7fc": {
    Name: "Leonidas Andrés Romero Sáez",
    Born: "1955-10-15",
    DeputyId: 1069
  },
  "4d8c25c4b5383c7dd31f624f547cc4ae09df841f": {
    Name: "Patricio Eduardo Rosas Barrientos",
    Born: "1968-05-06",
    DeputyId: 1070
  },
  "a7efcea2eb347545c713cd894dc440d253136ef2": {
    Name: "Gastón René Saavedra Chandía",
    Born: "1955-11-22",
    DeputyId: 1071
  },
  "cba749c2737acba362487b621fddd431dc19977e": {
    Name: "Gustavo Adolfo Sanhueza Dueñas",
    Born: "1966-12-10",
    DeputyId: 1072
  },
  "993f1791f847b959519b483c66211c000674d652": {
    Name: "Juan Rubén Santana Castillo",
    Born: "1989-09-20",
    DeputyId: 1073
  },
  "ae8acb6b389e0f549151b44a655c760210791e86": {
    Name: "Marisela del Carmen Santibáñez Novoa",
    Born: "1975-04-24",
    DeputyId: 1074
  },
  "89fa2938fd3634ef3be96cc3c23a2d1a2a549367": {
    Name: "Luis Alberto Rocafull López",
    Born: "1958-09-17",
    DeputyId: 1000
  },
  "21edd53c438e9cb74a0335fe3d379de35465e522": {
    Name: "Alexis Edgardo Sepúlveda Soto",
    Born: "1969-12-29",
    DeputyId: 1076
  },
  "e455bb4c64976893199838b9cd820d1cf890fe0b": {
    Name: "Jenny Paola Álvarez Vera",
    Born: "1974-03-30",
    DeputyId: 968
  },
  "b9a313a9882d3e9a64ea9c1323502db6d300c5ad": {
    Name: "Jorge Elías Brito Hasbún",
    Born: "1990-01-12",
    DeputyId: 1015
  },
  "315b8697519177e013cbd017c3975179b9e248ef": {
    Name: "Daniella Valentina Cicardini Milla",
    Born: "1987-12-31",
    DeputyId: 975
  },
  "3d88ffd940d25acf7fb592bece5a77cf0f8ce1d5": {
    Name: "Miguel Ernesto Crispi Serrano",
    Born: "1985-04-09",
    DeputyId: 1023
  },
  "2f93674b76c174a3d6810992ac42f7e1dee06aa1": {
    Name: "Eduardo Alfredo Durán Salinas",
    Born: "1972-01-01",
    DeputyId: 1028
  },
  "79879bee8dfb473d54de2385833bb05fc974c7e4": {
    Name: "Raúl Humberto Soto Mardones",
    Born: "1987-11-20",
    DeputyId: 1077
  },
  "86f42b80700730da9879fd1adc7f894ca8488fc6": {
    Name: "Jaime Manuel Tohá González",
    Born: "1938-06-16",
    DeputyId: 1078
  },
  "497e7fbc5f76e18e26aee8de51c489a20caf3a2c": {
    Name: "Sebastián Torrealba Alvarado",
    Born: "1981-02-06",
    DeputyId: 1079
  },
  "8521ae6e3dd42bb096e14ae4e2155487c1c67c76": {
    Name: "Virginia Eugenia Troncoso Hellman",
    Born: "1951-02-18",
    DeputyId: 1080
  },
  "c55ec6d5e472a90ef45d1823cfc49380770408db": {
    Name: "Juan Francisco Undurraga Gazitúa",
    Born: "1965-09-29",
    DeputyId: 1081
  },
  "e2e87a66636766293ff36f6e2507101fd9e9eb7c": {
    Name: "Cristóbal Ignacio de Loyola Urruticoechea Ríos",
    Born: "1975-11-21",
    DeputyId: 1082
  },
  "366b671de54fa9f9d72d781b0152ff9c04694a59": {
    Name: "Esteban Jorge Velásquez Núñez",
    Born: "1962-12-26",
    DeputyId: 1083
  },
  "84c609878b9bdfb53f57161a6b815c8d35c4dd99": {
    Name: "Daniel Ángel Verdessi Belemmi",
    Born: "1952-12-15",
    DeputyId: 1084
  },
  "534e80c6e34ce50a5b878292486c1a72b2eeb8e8": {
    Name: "Pablo Esteban Vidal Rojas",
    Born: "1983-06-24",
    DeputyId: 1085
  },
  "a187609375333f2f38148fc9763aa4018bf5c84f": {
    Name: "Gonzalo Rodolfo Winter Etcheberry",
    Born: "1987-01-06",
    DeputyId: 1086
  },
  "e18e87814bf4b4afb0d1cfa64fd7b2201ddafcae": {
    Name: "Gael Fernanda Yeomans Araya",
    Born: "1988-12-04",
    DeputyId: 1087
  },
  "b973b5dce1d3fbce0efd2a977c050d3356f13102": {
    Name: "Félix Marcelo González Gatica",
    Born: "1972-05-26",
    DeputyId: 1034
  },
  "d13423e8310281553a8a5b4078b27adcc4e3ed9a": {
    Name: "Marcos Artemio Ilabaca Cerda",
    Born: "1970-10-05",
    DeputyId: 1038
  },
  "534851c47e9d747f2fb0b46e6c8548642949f5b4": {
    Name: "Pablo Andrés Kast Sommerhoff",
    Born: "1973-08-24",
    DeputyId: 1041
  },
  "894a366ad83524e8b6ffa53ddd64ad9635472c23": {
    Name: "Amaro Jamil Jesús Labra Sepúlveda",
    Born: "1949-10-25",
    DeputyId: 1043
  },
  "483550fa5e69ebff4f7bece7f4425ae98853063e": {
    Name: "Vlado Mirosevic Verdugo",
    Born: "1987-05-23",
    DeputyId: 991
  },
  "a7134dd1ab48f00d28a3096b6e70767dd983d624": {
    Name: "Maite Orsini Pascal",
    Born: "1988-02-23",
    DeputyId: 1058
  },
  "e11be9fea8e2477ffd3b25411f3a7d3833f52a04": {
    Name: "Jorge Evaldo Rathgeb Schifferli",
    Born: "1967-12-28",
    DeputyId: 999
  },
  "efb185c9a7e3ef170802dae0393a77587bbe347f": {
    Name: "Raúl Fernando Saldívar Auger",
    Born: "1951-06-02",
    DeputyId: 1001
  },
  "c54e2ef031e99d5ec17372eb58f25dbb0162dc83": {
    Name: "Diego Ignacio Schalper Sepúlveda",
    Born: "1985-03-14",
    DeputyId: 1075
  },
  "f957e80efafd2c96001de8ea463482b806183cf6": {
    Name: "Alejandro Javier Bernales Maldonado",
    Born: "1979-02-02",
    DeputyId: 1013
  },
  "f2970a814d9aa08b583a8f99b182efc44d067b7d": {
    Name: "José Miguel Castro Bascuñán",
    Born: "1974-08-05",
    DeputyId: 1019
  },
  "3ac86c7211e55e354c5d67073786a1d13fd47392": {
    Name: "Cristhian Patricio Moreira Barros",
    Born: "1961-09-05",
    DeputyId: 1053
  }
};

export const findPublicFigureByAlias = (name: string): PublicFigure | undefined => {
  for (const id in aliases) {
    if (aliases[id].includes(name)) {
      for (const pfId in publicFigures) {
        if (pfId === id) {
          return publicFigures[pfId];
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

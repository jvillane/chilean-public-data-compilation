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
        }, {
          Id: "27de3825ccff9defc11dbdb4b30205b611b9ae3c",
          Name: "Juan Pablo Bernardino Piñera Echenique"
        }, {
          Id: "92415f0988ac40b8f5eb98c048fc7ac336a20dc5",
          Name: "Miguel Juan Sebastián Piñera Echenique"
        }, {
          Id: "f7b53fbddeb820a6983d71cf9a2db654f5b1f0c9",
          Name: "Jose Miguel Carlos Piñera Echenique"
        }, {
          Id: "c5159ca874b81e63aba6e34540ef0e885ddce129",
          Name: "Maria Teresa Magdalena Piñera Echenique"
        }
      ]
    }
  }, {
    Id: "f2efde45bec43eaa6f66bd9b1c17b39b8f0372eb",
    Name: "Jose Manuel Alberto Piñera Echenique",
    Birthday: "1948-10-06"
  }, {
    Id: "27de3825ccff9defc11dbdb4b30205b611b9ae3c",
    Name: "Juan Pablo Bernardino Piñera Echenique",
    Birthday: ""
  }, {
    Id: "f7b53fbddeb820a6983d71cf9a2db654f5b1f0c9",
    Name: "Jose Miguel Carlos Piñera Echenique",
    Birthday: ""
  }, {
    Id: "c5159ca874b81e63aba6e34540ef0e885ddce129",
    Name: "Maria Teresa Magdalena Piñera Echenique",
    Birthday: ""
  }, {
    Id: "f6c5d1485f954badc86cbe780c170deb28e0203c",
    Name: "María Cecilia Morel Montes",
    Birthday: "1954-01-14"
  }, {
    Id: "00147f72faa1569c741dffd3c30cfa48583d0e2e",
    Name: "Magdalena Maria Piñera Morel",
    Birthday: ""
  }, {
    Id: "14796adfd794a916ca481f65c8208ab617c8b7c0",
    Name: "Maria Cecilia Piñera Morel",
    Birthday: ""
  }, {
    Id: "b954694210f430ab49809f3b89b9c73ac39e437e",
    Name: "Juan Sebastian Piñera Morel",
    Birthday: ""
  }, {
    Id: "fa8d5d56b1886ce2f37a785a5f70cdfa0db9d32e",
    Name: "Piñera Morel Cristobal",
    Birthday: ""
  }, {
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
        }, {
          Id: "14796adfd794a916ca481f65c8208ab617c8b7c0",
          Name: "Maria Cecilia Piñera Morel"
        }, {
          Id: "b954694210f430ab49809f3b89b9c73ac39e437e",
          Name: "Juan Sebastian Piñera Morel"
        }, {
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
  }, {
    Id: '750e0ece12e42a4b98624599ab7673d9e6e00f9e',
    Name: 'Víctor Claudio José Pérez Varela',
    Birthday: '1954-10-18',
    DeputyId: 208
  }, {
    Id: '079eae6d5c36fed844f0b0371e3f6bd913c813b4',
    Name: 'Jorge Esteban Pizarro Soto',
    Birthday: '1952-04-21',
    DeputyId: 485
  }, {
    Id: '404_04',
    Name: 'Sergio Pizarro Mackay',
    Birthday: '1939-03-19',
    DeputyId: 684
  }, {
    Id: '6f4a0dc257d1eae05ab081f6a5105a1d8a342afa',
    Name: 'José Alfonso Rodríguez Del Río',
    Birthday: '1948-01-29',
    DeputyId: 696
  }, {
    Id: '9888b9956a2e2ed1191778d26421bed34b995b8d',
    Name: 'David Sergio Sandoval Plaza',
    Birthday: '1952-10-20',
    DeputyId: 951
  }, {
    Id: '6693968029c6f94a6d3b6e3db2b25604ed3149c1',
    Name: 'Pedro Antonio Velásquez Seguel',
    Birthday: '1964-08-05',
    DeputyId: 961
  }, {
    Id: '0c807508a65a121430f6a64296f67856a097276b',
    Name: 'Pedro Browne Urrejola',
    Birthday: '1972-06-29',
    DeputyId: 927
  }, {
    Id: 'd74a4c31e17f7f76f6d3b806386dedd0eb5f338e',
    Name: 'Aldo Vicente Cornejo González',
    Birthday: '1955-04-19',
    DeputyId: 933
  }, {
    Id: '50d1a2bf0852c832380ce62ef565f56bbae40471',
    Name: 'Gustavo Adolfo Hasbún Selume',
    Birthday: '1972-08-02',
    DeputyId: 939
  }, {
    Id: '23a6b461d26e48b0722445f4109ff87aab2a6eb4',
    Name: 'Andrea Molina Oliva',
    Birthday: '1970-03-28',
    DeputyId: 944
  }, {
    Id: 'a6a972dc570d6049954459543b8411f0973a8c67',
    Name: 'René Fernando Saffirio Espinoza',
    Birthday: '1955-10-09',
    DeputyId: 950
  }, {
    Id: '18b106a5acb975ed7da383ac73428b5f78b15e74',
    Name: 'Carlos Vilches Guzmán',
    Birthday: '1944-10-20',
    DeputyId: 962
  }, {
    Id: 'a2ae86ab87f39d9e3b72fffc16bac13ed3c019da',
    Name: 'Guillermo León Teillier Del Valle',
    Birthday: '1943-10-29',
    DeputyId: 956
  }, {
    Id: '341a19aa3f268074f94bcfe1161c63728090d5ca',
    Name: 'Mónica Javiera Blanco Suárez',
    Birthday: '1972-08-01',
    Family: {
      Husband: [{
        Id: '8087f501a599e8682fdf57fddd2bb2200f6ca500',
        Name: 'Pedro Araya Guerrero'
      }]
    }
  }, {
    Id: '8087f501a599e8682fdf57fddd2bb2200f6ca500',
    Name: 'Pedro Araya Guerrero',
    Birthday: '',
    DeputyId: 808,
    Family: {
      Wife: [{
        Id: '341a19aa3f268074f94bcfe1161c63728090d5ca',
        Name: 'Mónica Javiera Blanco Suárez'
      }]
    }
  }, {
    Id: 'bf95d31ad2f6b8c7b0fbe06cd25ff131279958bf',
    Name: 'Enrique Luis Accorsi Opazo',
    Birthday: '1948-08-17',
    DeputyId: 800
  }, {
    Id: '8e62d6ece16df86935d8898ee0d201d5c38ebf50',
    Name: 'Sergio Patricio Aguiló Melo',
    Birthday: '1953-02-09',
    DeputyId: 802
  }, {
    Id: 'fd0e672d2b699e4008c15d887aaf5f989afaddc8',
    Name: 'Isabel Allende Bussi',
    Birthday: '1945-01-18',
    DeputyId: 804
  }, {
    Id: '166a104d8f78e693ca47af662653be5b3bedfc63',
    Name: 'Claudio Patricio Alvarado Andrade',
    Birthday: '1960-02-07',
    DeputyId: 805
  }, {
    Id: 'e4dcfc2a18d6c0441d99d6e881bc22ee99ae6e19',
    Name: 'Rodrigo Alejandro Álvarez Zenteno',
    Birthday: '1966-07-30',
    DeputyId: 807
  }, {
    Id: '404_05',
    Name: 'Pedro Pablo Alvarez-Salamanca Büchi',
    Birthday: '1948-04-10',
    Death: '2008-09-03',
    DeputyId: 806
  }, {
    Id: 'affe819041bb5a899c44f207a4b139005af0b9b8',
    Name: 'Lily Jovanka Pérez San Martín',
    Birthday: '1963-05-10',
    DeputyId: 921
  }, {
    Id: '77b9f16862919da5f711818101a88525dad485b9',
    Name: 'Gabriel Héctor Ascencio Mansilla',
    Birthday: '1953-10-25',
    DeputyId: 810
  }, {
    Id: 'bcc53f26caf73ac5187e938180b0ba8f5e3612cb',
    Name: 'José Ramón Barros Montero',
    Birthday: '1958-03-05',
    DeputyId: 811
  }, {
    Id: '7bf69231b6814db8a18f4de4aca536630d8684c3',
    Name: 'Eugenio Francisco Bauer Jouanne',
    Birthday: '1947-05-20',
    DeputyId: 812
  }, {
    Id: 'd6c90b64e2bbc7ae3676e2a9bbd9f4a1f9e46493',
    Name: 'Germán Becker Alvear',
    Birthday: '1955-03-13',
    DeputyId: 813
  }, {
    Id: '4a9bf3c579a62a76c4dc0e37f217b65eefa8297f',
    Name: 'Mario Vittorio Luca Bertolino Rendic',
    Birthday: '1954-02-03',
    DeputyId: 814
  }, {
    Id: '90b64fe8a8a3fe2e2cf5c0f9f668116beec12bd4',
    Name: 'Jorge Alfonso Burgos Varela',
    Birthday: '1956-06-24',
    DeputyId: 816
  }, {
    Id: '404_06',
    Name: 'Juan José Bustos Ramírez',
    Birthday: '1935-12-08',
    Death: '2008-08-07',
    DeputyId: 817
  }, {
    Id: '94f760082b696dc9ab73c6571e80e245d78ad990',
    Name: 'Alberto Eugenio Cardemil Herrera',
    Birthday: '1945-11-01',
    DeputyId: 818
  }, {
    Id: '6db008bafaf1bdbd28d91d27defeee84852989c3',
    Name: 'Guillermo Arturo Ceroni Fuentes',
    Birthday: '1946-07-30',
    DeputyId: 819
  }, {
    Id: 'd1345dd3a86caf1d819d89100528048787792c08',
    Name: 'Sergio Andrés Correa De la Cerda',
    Birthday: '1938-05-02',
    DeputyId: 821
  }, {
    Id: '4d8c06d2074bbbe74cd32a03a834cd59519fa8fe',
    Name: 'María Angélica Cristi Marfil',
    Birthday: '1941-10-13',
    DeputyId: 822
  }, {
    Id: '61fb9b9d34a0f8c6a82cac1183c8224f0a459f91',
    Name: 'Marcela Cubillos Sigall',
    Birthday: '1967-02-02',
    DeputyId: 823,
    Family: {
      Husband: [{
        Id: '3887990645f3868ffc5e09772891ff4d86d650b8',
        Name: 'Andrés Allamand Zavala'
      }]
    }
  }, {
    Id: '404_07',
    Name: 'Roberto Delmastro Naso',
    Birthday: '1945-10-17',
    Death: '2014-12-26',
    DeputyId: 825
  }, {
    Id: '7636c17378959fcac069b7634d2ccbdbeaaa82f1',
    Name: 'Eduardo Díaz Del Río',
    Birthday: '1973-12-17',
    DeputyId: 826
  }, {
    Id: 'aa95cbbe4d353c64364c763eb303f7e92870fcdd',
    Name: 'Julio Cristóbal Dittborn Cordua',
    Birthday: '1951-10-19',
    DeputyId: 828
  }, {
    Id: '1156d1e31aedd50cff3efcba658894d43b71dc1f',
    Name: 'Andrés Egaña Respaldiza',
    Birthday: '1947-03-08',
    DeputyId: 830
  }, {
    Id: 'ff1b122ebe0554606992ac2458134e0e355e26a9',
    Name: 'José Francisco Encina Moriamez',
    Birthday: '1943-12-18',
    DeputyId: 832
  }, {
    Id: 'ca80e8efb58652bba826d237bd3dc7e44e1a80f2',
    Name: 'Maximiano Guillermo Errázuriz Eguiguren',
    Birthday: '1945-09-28',
    DeputyId: 834
  }, {
    Id: '5ebdb3f8d79206e2992ccad8f45e0818e6b5750b',
    Name: 'Fidel Edgardo Espinoza Sandoval',
    Birthday: '1970-01-24',
    DeputyId: 837
  }, {
    Id: '3eec05a4012e505df440fe1ca335585001941b3b',
    Name: 'Marcelo Iván Forni Lobos',
    Birthday: '1967-10-15',
    DeputyId: 840
  }, {
    Id: 'b5c0d847c1560287481cb23cb48024f8f932c264',
    Name: 'Pablo Alberto Galilea Carrillo',
    Birthday: '1963-01-31',
    DeputyId: 842
  }, {
    Id: 'cfab8c13eadeab651c7bfa0a8ada1e27479adbbc',
    Name: 'René Manuel García García',
    Birthday: '1950-05-24',
    DeputyId: 843
  }, {
    Id: 'fd4d76a64774dccdd03f2e1fddd9a6e929e7520a',
    Name: 'Alejandro García-Huidobro Sanfuentes',
    Birthday: '1952-04-19',
    DeputyId: 844
  }, {
    Id: 'f02afbdc08430ed0c1733ffcf9f40417d2b621f8',
    Name: 'Rodrigo René González Torres',
    Birthday: '1941-09-26',
    DeputyId: 848
  }, {
    Id: '13c429cd0906ba2d58ef7784fae91ae2d4de3c97',
    Name: 'Patricio Alejandro Hales Dib',
    Birthday: '1946-09-11',
    DeputyId: 849
  }, {
    Id: '920ea0d52e1d10f39f85842145c5e8a77b0b6655',
    Name: 'Javier Ricardo Hernández Hernández',
    Birthday: '1954-08-07',
    DeputyId: 850
  }, {
    Id: '3998791aafd490ea9fe28112dff1ee370c16c598',
    Name: 'Ramón Enrique Jaramillo Becker',
    Birthday: '1937-07-11',
    DeputyId: 854
  }, {
    Id: '66c0d38e537930fd2b5d2fa26fc851a6cf656eea',
    Name: 'Carlos Abel Jarpa Wevar',
    Birthday: '1944-11-14',
    DeputyId: 855
  }, {
    Id: 'f1383e1210cdf254263e47a4ccfb223132ac43b4',
    Name: 'José Antonio Kast Rist',
    Birthday: '1966-01-18',
    DeputyId: 857
  }, {
    Id: '43160c6a5021cd0726066a101c80eb827c2a57d7',
    Name: 'José Antonio Leal Labrín',
    Birthday: '1950-01-10',
    DeputyId: 859
  }, {
    Id: '3661bfd97fcd7d2aaba6c325de86d9682758157f',
    Name: 'Pablo Lorenzini Basso',
    Birthday: '1949-10-25',
    DeputyId: 862
  }, {
    Id: '2daaf560909e7d0367ea9e00ce0d016a2338e4d7',
    Name: 'Rosauro Martínez Labbé',
    Birthday: '1950-11-11',
    DeputyId: 863
  }, {
    Id: '7f539d0b85148eb91a68b8e660028d731bb98d63',
    Name: 'Juan Alfonso Manuel Masferrer Pellizzari',
    Birthday: '1940-11-19',
    DeputyId: 864
  }, {
    Id: '0a71863a3a01b2a89b2bef99ea17c38ba477b7b7',
    Name: 'Patricio Melero Abaroa',
    Birthday: '1956-06-19',
    DeputyId: 865
  }, {
    Id: 'f4b2a7ad79e60f71aab0091bb19780a9f85a2d4b',
    Name: 'Fernando Meza Moncada',
    Birthday: '1946-07-14',
    DeputyId: 866
  }, {
    Id: 'e2db8f37f347a4672e68770bf7e3d33cdb253b20',
    Name: 'Nicolás Monckeberg Díaz',
    Birthday: '1973-07-31',
    DeputyId: 868
  }, {
    Id: 'f06efcc2f42908724ff6cba0317f5d831292d9f7',
    Name: 'Carlos Eduardo Montes Cisternas',
    Birthday: '1946-05-11',
    DeputyId: 870
  }, {
    Id: '21b9d78f905fedf031c1fe4d907f1642eeba877d',
    Name: 'Iván Alejandro Moreira Barros',
    Birthday: '1956-12-08',
    DeputyId: 871
  }, {
    Id: '19394fb3f76df5d8c376938f9d9b3cff9ae0f7db',
    Name: 'Jaime Francisco Mulet Martínez',
    Birthday: '1963-08-03',
    DeputyId: 872
  }, {
    Id: '1d4303b4f9e90759a0a543956acc55eb98cab3bb',
    Name: "Adriana Blanca Cristina Muñoz D'Albora",
    Birthday: '1948-09-25',
    DeputyId: 873
  }, {
    Id: '5c052ff425db090c27c70594956a86cc1aa1340e',
    Name: 'Iván Ernesto Norambuena Farías',
    Birthday: '1958-09-04',
    DeputyId: 875
  }, {
    Id: 'fec6430feb56a80577aa08da5a98e4075509a0bf',
    Name: 'Sergio Rodrigo Ojeda Uribe',
    Birthday: '1943-03-12',
    DeputyId: 877
  }, {
    Id: '58ab544c089a003c2a869470eb3b72e251ba64c1',
    Name: 'Carlos Olivares Zepeda',
    Birthday: '1952-05-25',
    DeputyId: 878
  }, {
    Id: '75a26bf72a5127d5d0471a2476174bd904aeb5da',
    Name: 'José Miguel Ortiz Novoa',
    Birthday: '1941-11-22',
    DeputyId: 879
  }, {
    Id: '6abb0029e7075a39d1f0a6d5a60345274aa0a038',
    Name: 'José Osvaldo Palma Flores',
    Birthday: '1952-10-02',
    DeputyId: 881
  }, {
    Id: '6257ab27a8856b984abfbfcb8509bc0d664273de',
    Name: 'Luis Iván Paredes Fierro',
    Birthday: '1958-06-04',
    DeputyId: 882
  }, {
    Id: 'd88279d04b2e8fac208e8a428fb7399f65aab70a',
    Name: 'Darío Guillermo Paya Mira',
    Birthday: '1964-07-20',
    DeputyId: 884
  }, {
    Id: 'bc359cdd5993e17b74a2499e54a1b43ef50ad642',
    Name: 'José Pérez Arriagada',
    Birthday: '1940-12-29',
    DeputyId: 885
  }, {
    Id: 'f93c3509c5abe71d8bda66f16a94af42835d17f7',
    Name: 'Jaime Daniel Quintana Leal',
    Birthday: '1967-10-22',
    DeputyId: 886
  }, {
    Id: 'cf12e9c036c38f6e1c54af467b35e4e71021f4b9',
    Name: 'Carlos Recondo Lavanderos',
    Birthday: '1954-04-27',
    DeputyId: 887
  }, {
    Id: '1847bd2259252c8807da8e179eaa9091f0a2a0ad',
    Name: 'Alberto Iván Francisco Robles Pantoja',
    Birthday: '1956-10-04',
    DeputyId: 888
  }, {
    Id: '5a2b61efe371b51f60664ab83d2af0c58c8a1773',
    Name: 'Manuel Ernesto Rojas Molina',
    Birthday: '1959-11-03',
    DeputyId: 889
  }, {
    Id: 'e11e738197f06e0cf5744570c504bf0a908f30ba',
    Name: 'Fulvio Fabrizio Rossi Ciocca',
    Birthday: '1970-09-30',
    DeputyId: 890,
    Family: {
      Wife: [{
        Id: '41ea1dbc69614f729498098df01d26e5544945b4',
        Name: 'Carolina Monserrat Tohá Morales'
      }]
    }
  }, {
    Id: '203075b0247f44015a837d8cebbb08bfa15e1f04',
    Name: 'María Antonieta Saa Díaz',
    Birthday: '1943-01-08',
    DeputyId: 892
  }, {
    Id: 'd81e4324d1014d67e50dd949e46c21f2c1d499b4',
    Name: 'Eduardo José Saffirio Suárez',
    Birthday: '1958-08-12',
    DeputyId: 894
  }, {
    Id: '37de92421fb89ba6b7704ee4c1fc94a3114e7c3c',
    Name: 'Felipe Santiago Salaberry Soto',
    Birthday: '1966-01-09',
    DeputyId: 895
  }, {
    Id: 'e820846626f1c301f7006900a5abc87752b6fcfa',
    Name: 'Alejandra Amalia Sepúlveda Orbenes',
    Birthday: '1965-11-13',
    DeputyId: 897
  }, {
    Id: '204ed206c178f5fb5d9216ad0f14e56cc421a5a0',
    Name: 'Laura Filomena Soto González',
    Birthday: '1931-12-15',
    DeputyId: 899
  }, {
    Id: '941e75ee256d0d328ff9563c40e88b2b52ee9d4e',
    Name: 'Jorge Carlos Tarud Daccarett',
    Birthday: '1953-07-19',
    DeputyId: 902
  }, {
    Id: '41ea1dbc69614f729498098df01d26e5544945b4',
    Name: 'Carolina Monserrat Tohá Morales',
    Birthday: '1965-05-12',
    DeputyId: 903,
    Family: {
      Husband: [{
        Id: 'e11e738197f06e0cf5744570c504bf0a908f30ba',
        Name: 'Fulvio Fabrizio Rossi Ciocca'
      }]
    }
  }, {
    Id: 'cc440cbcfb797a24497699647e2bc3e46b320c98',
    Name: 'Eugenio Tuma Zedan',
    Birthday: '1945-07-29',
    DeputyId: 904
  }, {
    Id: '6f4729bb734a6ca4436e9f2e56583e1b16a6e133',
    Name: 'Jorge Iván Ulloa Aguillón',
    Birthday: '1958-09-15',
    DeputyId: 906
  }, {
    Id: '91d97c3d30fd7b7d67d2623f1734e556e72d7a21',
    Name: 'Gonzalo Cristian Uriarte Herrera',
    Birthday: '1964-12-28',
    DeputyId: 907
  }, {
    Id: '2c338c4bb71004d962aafc427beb11c50873aa73',
    Name: 'Ignacio Urrutia Bonilla',
    Birthday: '1957-09-16',
    DeputyId: 908
  }, {
    Id: '449e72cb31b10c1455768068658cb50662accee3',
    Name: 'Esteban Manuel Valenzuela Van Treek',
    Birthday: '1964-03-12',
    DeputyId: 910
  }, {
    Id: 'c822d5e5514ad803b25e683d1a5bbf1e5a3ae9b3',
    Name: 'Alfonso Guillermo José Vargas Lyng',
    Birthday: '1951-12-16',
    DeputyId: 912
  }, {
    Id: 'b520ff2f1956135306ec3da2837a5bf8a3906122',
    Name: 'Samuel Benito Venegas Rubio',
    Birthday: '1938-04-01',
    DeputyId: 914
  }, {
    Id: '61e9ede6b9631c8a6c4c9f17111eb22a512a72c1',
    Name: 'Ximena Leonor Vidal Lázaro',
    Birthday: '1955-01-01',
    DeputyId: 916
  }, {
    Id: '519abc66b27cb0e55563dcfdb006b069fe1ff25b',
    Name: 'Gastón Alejandro Von Mühlenbrock Zamora',
    Birthday: '1954-12-26',
    DeputyId: 917
  }, {
    Id: '33a1d2981a5fda7a7b200a1463d2b4707cf66e8b',
    Name: 'Patricio Arturo Walker Prieto',
    Birthday: '1969-04-28',
    DeputyId: 918
  }, {
    Id: '41defd5c010955b2ea6758ba38a76abdb011a5af',
    Name: 'René Augusto Aedo Ormeño',
    Birthday: '1960-02-04',
    DeputyId: 801
  }, {
    Id: '825005b83fdc6b7c2a9979be5d5034b7cb43ef1a',
    Name: 'René Osvaldo Alinco Bustos',
    Birthday: '1958-06-02',
    DeputyId: 803
  }, {
    Id: '0a175da8241d760c510462d8504a668db1969e08',
    Name: 'Gonzalo Enrique Arenas Hödar',
    Birthday: '1972-12-13',
    DeputyId: 809
  }, {
    Id: '95fdf3dc2fff548a00a1878d988d39bc708380e0',
    Name: 'Sergio Bobadilla Muñoz',
    Birthday: '1958-03-25',
    DeputyId: 815
  }, {
    Id: '7c8f365b1dd473b637ffba6f9e0111304f1efed3',
    Name: 'Francisco Javier Chahuán Chahuán',
    Birthday: '1971-05-20',
    DeputyId: 820
  }, {
    Id: 'ed64df3d9777e1446a529dbdfb8bea43e0eda7f6',
    Name: 'Alfonso Arturo De Urresti Longton',
    Birthday: '1966-03-07',
    DeputyId: 824
  }, {
    Id: 'e755cf731369acba42c0694a84a90c61ae9be7ef',
    Name: 'Marcelo Eduardo Díaz Díaz',
    Birthday: '1971-02-06',
    DeputyId: 827
  }, {
    Id: '91855993317acaf09009828577a3662ae867b027',
    Name: 'Gonzalo Alejandro Duarte Leiva',
    Birthday: '1953-04-01',
    DeputyId: 829
  }, {
    Id: '4b3eb52f3cd401c5cb90470c9417d10195857aaa',
    Name: 'Edmundo Eluchans Urenda',
    Birthday: '1950-01-21',
    DeputyId: 831
  }, {
    Id: 'f7e8eff419abb80f9ad6e96135a25a9c232e60ce',
    Name: 'Marco Antonio Enríquez-Ominami Gumucio',
    Birthday: '1973-06-12',
    DeputyId: 833
  }, {
    Id: 'f34bee9e3d88745897ea34a00ad2f1856b7c8290',
    Name: 'Alvaro Escobar Rufatt',
    Birthday: '1966-12-16',
    DeputyId: 835
  }, {
    Id: '227ec4b1da1e022496dd3113e215443805987038',
    Name: 'Marcos Andrés Espinosa Monardes',
    Birthday: '1962-10-27',
    DeputyId: 836
  }, {
    Id: 'f9ca0e1cb600303c1a3e6992867bd58754e84400',
    Name: 'Abraham Enrique Estay Peñaloza',
    Birthday: '1958-03-30',
    DeputyId: 838
  }, {
    Id: '4217c32701d35e0a83ef22dc7ae5b3f1b356fe93',
    Name: 'Ramón Alberto Farías Ponce',
    Birthday: '1955-08-23',
    DeputyId: 839
  }, {
    Id: '00105400b5bdac932cc77100aa217235f6a0223c',
    Name: 'Francisco Renán Fuentealba Vildósola',
    Birthday: '1947-11-29',
    DeputyId: 841
  }, {
    Id: '89108421e37a779419e7f1fafbf07fa9ebce4de1',
    Name: 'Guido Juan Primo Girardi Briere',
    Birthday: '1934-11-17',
    DeputyId: 845
  }, {
    Id: 'e0d34af26cbf6cf0b243f260a7583a81851b3b17',
    Name: 'Joaquín Godoy Ibáñez',
    Birthday: '1977-01-25',
    DeputyId: 846
  }, {
    Id: '626a0c585f5d43482617a5b88eb0da4b56bb63ce',
    Name: 'Carolina Goic Boroevic',
    Birthday: '1972-12-20',
    DeputyId: 847
  }, {
    Id: '957bf5a25758100a77fd525a3a2de1f75b19121e',
    Name: 'María Amelia Herrera Silva',
    Birthday: '1950-08-25',
    DeputyId: 851
  }, {
    Id: '8976edbf365789ac91e9830ce5dbdf865e0a737d',
    Name: 'Jorge Insunza Gregorio de las Heras',
    Birthday: '1967-02-12',
    DeputyId: 852
  }, {
    Id: 'd2622c9f90697b2175326d61c58f81a58cfc1cfc',
    Name: 'Marta Eliana Isasi Barbieri',
    Birthday: '1966-01-15',
    DeputyId: 853
  }, {
    Id: 'a2817b6396ba02d9bb48d6f378ee96a05d02e38a',
    Name: 'Tucapel Francisco Jiménez Fuentes',
    Birthday: '1962-09-01',
    DeputyId: 856
  }, {
    Id: 'aad9cec89c403f1b741ae8c25b457596b5e6c247',
    Name: 'Juan Carlos Latorre Carmona',
    Birthday: '1949-03-29',
    DeputyId: 858
  }, {
    Id: '7ac0d7c52c34a4552fe8259b8584cd413348c800',
    Name: 'Roberto Eduardo León Ramírez',
    Birthday: '1951-02-11',
    DeputyId: 860
  }, {
    Id: '404_08',
    Name: 'Juan Lobos Krause',
    Birthday: '1960-12-05',
    Death: '2011-04-11',
    DeputyId: 861
  }, {
    Id: 'f1ae04fac2e4b153570222f954e0c11c5907225a',
    Name: 'Cristián Monckeberg Bruner',
    Birthday: '1968-05-12',
    DeputyId: 867
  }, {
    Id: 'e700be824ab5bf0d0a3575b05c746a02723ab3f3',
    Name: 'Manuel Zacarías Monsalve Benavides',
    Birthday: '1965-06-09',
    DeputyId: 869
  }, {
    Id: '23e713eba38b4979dc0c40efae89d9edd6df3187',
    Name: 'Claudia Andrea Nogueira Fernández',
    Birthday: '1969-11-26',
    DeputyId: 874
  }, {
    Id: 'ce746a01a9b7f3614359f1c0b0f08a95298d76e7',
    Name: 'Marco Antonio Núñez Lozano',
    Birthday: '1966-09-02',
    DeputyId: 876
  }, {
    Id: 'c463730de40457f774be2ce6a730ff33346f6d86',
    Name: 'Clemira Hugolina Pacheco Rivas',
    Birthday: '1961-05-05',
    DeputyId: 880
  }, {
    Id: 'e9076ed6fda4c65cd6d3894b77e0d609d4820cb9',
    Name: 'Denise Simone Pascal Allende',
    Birthday: '1940-07-19',
    DeputyId: 883
  }, {
    Id: '22ce406aff662960edc5f13f58bfb5ff61b908ab',
    Name: 'Karla Elizabeth Rubilar Barahona',
    Birthday: '1977-04-17',
    DeputyId: 891
  }, {
    Id: 'a12f8cf07d3ab513104e8f6b383d93c89b318b62',
    Name: 'Jorge Eduardo Sabag Villalobos',
    Birthday: '1963-12-26',
    DeputyId: 893
  }, {
    Id: '762e48a896ef57b708fede9b67c65bb449dac3c7',
    Name: 'Roberto Eduardo Sepúlveda Hermosilla',
    Birthday: '1955-08-17',
    DeputyId: 896
  }, {
    Id: '218150a8a96f0e5437478186276888a6433ac681',
    Name: 'Gabriel Moisés Silber Romo',
    Birthday: '1976-09-15',
    DeputyId: 898
  }, {
    Id: '6126fe92f78af135678e48187a6df58c7f965379',
    Name: 'Alejandro Miguel Anselmo Sule Fernández',
    Birthday: '1960-11-30',
    DeputyId: 900
  }, {
    Id: '0abe57018ea404b5fdf4a0228f26b8ff3169a915',
    Name: 'Raúl Fernando Sunico Galdames',
    Birthday: '1964-07-28',
    DeputyId: 901
  }, {
    Id: '03142f95932fd85a45ade8101b901f27c59e8aed',
    Name: 'Marisol Turres Figueroa',
    Birthday: '1964-07-13',
    DeputyId: 905
  }, {
    Id: 'cd93a0502f016b53dc16adbd64663da095635549',
    Name: 'Ximena Verónica Valcarce Becerra',
    Birthday: '1973-03-25',
    DeputyId: 909
  }, {
    Id: '1b2008c416a41d6e6a8274852e2934fa6c882150',
    Name: 'Patricio Iván Vallespín López',
    Birthday: '1964-04-24',
    DeputyId: 911
  }, {
    Id: 'f0f3465b23d7ea49e1782d8f8b63ac80ac07fb09',
    Name: 'Mario Venegas Cárdenas',
    Birthday: '1957-12-03',
    DeputyId: 913
  }, {
    Id: '2e8a3f535f96bc477802633120c2bb25eb03e7a6',
    Name: 'José Germán Verdugo Soto',
    Birthday: '1948-10-05',
    DeputyId: 915
  }, {
    Id: 'dd421289b2dae2249cde9d1539d9207c7bddf763',
    Name: 'Felipe Andrés Ward Edwards',
    Birthday: '1972-09-14',
    DeputyId: 919
  }, {
    Id: '3813777d3972b00b1c6bc94e0b6d32309b365807',
    Name: 'Marcelo Gastón Schilling Rodríguez',
    Birthday: '1949-05-18',
    DeputyId: 920
  }, {
    Id: '533ab43952c3ae9143ef644e458fa8fb2f981913',
    Name: 'Felipe Harboe Bascuñán',
    Birthday: '1972-07-20',
    DeputyId: 922
  }, {
    Id: '1159e65598e59f1bbd7457782c46a56ee13e2041',
    Name: 'Pedro Pablo Alvarez-Salamanca Ramírez',
    Birthday: '1976-02-18',
    DeputyId: 923
  }, {
    Id: '354bbe40cc5c8ea7ee0fb4228fd8a41cb9df6599',
    Name: 'Osvaldo Raúl Andrade Lara',
    Birthday: '1953-06-02',
    DeputyId: 924
  }, {
    Id: '14a3a1b6a97c9700fe202990520cc1e32d29725a',
    Name: 'Pepe Auth Stewart',
    Birthday: '1957-03-06',
    DeputyId: 925
  }, {
    Id: 'c3ff25045877426130b60c04c5916e1e4ff9e822',
    Name: 'Nino Baltolu Rasera',
    Birthday: '1953-09-28',
    DeputyId: 926
  }, {
    Id: 'd214a925db83d1b0cc448fd5f8ae6c3e806d3cd5',
    Name: 'Giovanni Calderón Bassi',
    Birthday: '1971-07-08',
    DeputyId: 928
  }, {
    Id: 'f69961782fbdc6daf3534dba46b7939c39b43a2b',
    Name: 'Carlos Cristián Campos Jara',
    Birthday: '1972-11-18',
    DeputyId: 929
  }, {
    Id: '9faae9e739db27b013d70406ec1c6d067d1b3023',
    Name: 'Lautaro César Carmona Soto',
    Birthday: '1952-04-26',
    DeputyId: 930
  }, {
    Id: 'ffcb123af9eb4104d0248db7080ae9598b4ee8c4',
    Name: 'Juan Luis Castro González',
    Birthday: '1960-04-18',
    DeputyId: 931
  }, {
    Id: 'f593cbfa24c461494d373bc0a0b431364345fe07',
    Name: 'Eduardo Antonio Cerda García',
    Birthday: '1933-01-01',
    DeputyId: 932
  }, {
    Id: '33803c45f2b401ba15698c5cb47067942269f8f5',
    Name: 'Fuad Chahin Valenzuela',
    Birthday: '1976-12-01',
    DeputyId: 934
  }, {
    Id: '7d90e0b1b78dffa67aafc7f6aaaac6dd35db08d2',
    Name: 'José Manuel Rojo Edwards Silva',
    Birthday: '1977-07-15',
    DeputyId: 935
  }, {
    Id: 'c851d86d80b79fca54d1f42b091425920386bd16',
    Name: 'Cristina Girardi Lavín',
    Birthday: '1962-01-09',
    DeputyId: 936
  }, {
    Id: '4014db182a90735941e77289b7c73b9f724f8a24',
    Name: 'Hugo Humberto Gutiérrez Gálvez',
    Birthday: '1961-10-05',
    DeputyId: 937
  }, {
    Id: '8ab21be259db2d874842d0c955ac7a3f8dcf4ca2',
    Name: 'Romilio Gutiérrez Pino',
    Birthday: '1962-02-17',
    DeputyId: 938
  }, {
    Id: '9085ba5bb5ae21c6cba63c38bbfb0a8a168cd6fe',
    Name: 'María José Hoffmann Opazo',
    Birthday: '1976-12-28',
    DeputyId: 940
  }, {
    Id: '3f6633b0b0dc461e790bc31c743aad12a64b3661',
    Name: 'Luis Segundo Lemus Aracena',
    Birthday: '1961-12-23',
    DeputyId: 941
  }, {
    Id: 'a3ea8b261f99d706f7b2495eee00f66dff1124bd',
    Name: 'Javier Ignacio Macaya Danús',
    Birthday: '1978-11-11',
    DeputyId: 942
  }, {
    Id: '1497ab3f6ec400a61aedf93165427a7bc62c810b',
    Name: 'Miodrag Arturo Marinovic Solo de Zaldívar',
    Birthday: '1967-01-07',
    DeputyId: 943
  }, {
    Id: '0366831ccfef44f300d4d68fea448f1be4657c20',
    Name: 'Celso René Morales Muñoz',
    Birthday: '1957-07-10',
    DeputyId: 945
  }, {
    Id: '4a4e216254987bb1b1a44c6b6e6ed3705a9a9e20',
    Name: 'Leopoldo Alfredo Pérez Lahsen',
    Birthday: '1957-03-28',
    DeputyId: 946
  }, {
    Id: 'e7e7e09f2b80d23faf4166af614478acbbf66e82',
    Name: 'Ricardo Enrique Rincón González',
    Birthday: '1966-03-22',
    DeputyId: 947
  }, {
    Id: '9ceb0bd5cae62fa5bf13286dd13698206ecd6fc7',
    Name: 'Gaspar Alberto Rivas Sánchez',
    Birthday: '1978-05-17',
    DeputyId: 948
  }, {
    Id: '6129caaea5a8c211449dfe4fad4aa0d0f1f56177',
    Name: 'Marcela Constanza Sabat Fernández',
    Birthday: '1981-04-04',
    DeputyId: 949
  }, {
    Id: 'a4bd09f20ba59fbe8a9dae8cf6bb95e800237d56',
    Name: 'Juan Alejandro Santana Tirachini',
    Birthday: '1965-07-18',
    DeputyId: 952
  }, {
    Id: '581f60584c1461bcea09cc3bd8e458c26e591dd9',
    Name: 'Frank Carlos Sauerbaum Muñoz',
    Birthday: '1972-11-21',
    DeputyId: 953
  }, {
    Id: '5aed7dd6709bdec9a5c4ad127375ee8a2900ba94',
    Name: 'Ernesto Silva Méndez',
    Birthday: '1975-08-15',
    DeputyId: 954
  }, {
    Id: '5df3c245625b6aa2a15c7fb4544433af506e77fe',
    Name: 'Luis Arturo Squella Ovalle',
    Birthday: '1978-09-25',
    DeputyId: 955
  }, {
    Id: 'f3c5b38778c9994c1e60e05aaeb056e905e49834',
    Name: 'Víctor Torres Jeldes',
    Birthday: '1975-10-11',
    DeputyId: 957
  }, {
    Id: '8f687dbb159434410c793e9c32f0a604f819ad67',
    Name: 'Joaquín Tuma Zedan',
    Birthday: '1941-07-09',
    DeputyId: 958
  }, {
    Id: '18e45149981258ad04537dd80114d866a0626d73',
    Name: 'Enrique Van Rysselberghe Herrera',
    Birthday: '1976-09-17',
    DeputyId: 959
  }, {
    Id: 'ec007ed1d15521092c3eadd43cb81410267177eb',
    Name: 'Orlando Severo Vargas Pizarro',
    Birthday: '1952-07-13',
    DeputyId: 960
  }, {
    Id: '5395ad654bbc4bd870f11078c3c91185d893af03',
    Name: 'Matías Vicente Walker Prieto',
    Birthday: '1973-07-19',
    DeputyId: 963
  }, {
    Id: 'd90bc5faa6707d6c67716fe544b5643d5cdff97c',
    Name: 'Mónica Beatriz Zalaquett Said',
    Birthday: '1962-05-04',
    DeputyId: 964
  }, {
    Id: 'a47a2bafbd85abf2cf7134d93cc26983e6cb9902',
    Name: 'Mario Alberto Acuña Cisternas',
    Birthday: '1951-09-26',
    DeputyId: 1
  }, {
    Id: '0d234f22bb83124348e13bbf6baada186f3fb3ba',
    Name: 'Gustavo Alessandri Valdés',
    Birthday: '1929-04-30',
    Death: '2017-07-18',
    DeputyId: 3
  }, {
    Id: '0d2080ec1b3812ae0e537db6374349240abb660a',
    Name: 'Nelson Jaime Avila Contreras',
    Birthday: '1942-11-29',
    DeputyId: 10
  }, {
    Id: 'aa96f70d14ac2fdd43fb7a1f034d992d4bd11d15',
    Name: 'Carlos Caminondo Sáez',
    Birthday: '1937-12-28',
    DeputyId: 15
  }, {
    Id: 'df2e563fec34c046ac79f34ef5b57c4173315900',
    Name: 'Juan Antonio Coloma Correa',
    Birthday: '1956-07-15',
    DeputyId: 19
  }, {
    Id: '7d38f3cf1f368a7d0a7932b9442ae32341a07c31',
    Name: 'Sergio Benedicto Elgueta Barrientos',
    Birthday: '1933-02-04',
    DeputyId: 27
  }, {
    Id: 'eac42f3fa0fb1bd04e04ff7fcf5e056d13b8c1b3',
    Name: 'Alberto Miguel Espina Otero',
    Birthday: '1956-11-04',
    DeputyId: 30
  }, {
    Id: 'f2a67e42a8bd881f0a2453fd1bc3b0eb53ff8292',
    Name: 'José Gilberto García Ruminot',
    Birthday: '1955-05-22',
    DeputyId: 35
  }, {
    Id: '2dbfaf90f4db592bed429b97f7fa6408b47a64fe',
    Name: 'Juan Enrique Fernando Krauss Rusque',
    Birthday: '1932-01-08',
    DeputyId: 50
  }, {
    Id: '13d40340bc7b2c25834286cf47dabc88e024a320',
    Name: 'Iván Mesías Lehú',
    Birthday: '1935-04-03',
    DeputyId: 65
  }, {
    Id: 'dee4c71dda15e211e8a79a0fa47c6fbb36b0db32',
    Name: 'Gastón Luis Pareto González',
    Birthday: '1928-08-29',
    DeputyId: 85
  }, {
    Id: 'defe16917a16276ae3bb8ec7a22fcf566183335e',
    Name: 'Marina Victoria Prochelle Aguilar',
    Birthday: '1941-12-09',
    DeputyId: 92
  }, {
    Id: '241ee9e0147b97224fd6edbec75a16eb7944e6c5',
    Name: 'Baldo Petar Prokuriça Prokuriça',
    Birthday: '1958-07-02',
    DeputyId: 93
  }, {
    Id: 'c20c3a91314d330890465809ad0cb4e15e12c52e',
    Name: 'Víctor Fernando Reyes Alvarado',
    Birthday: '1945-07-02',
    DeputyId: 95
  }, {
    Id: '92ffb2ad6b48785f6210fba9faa949fadc9486c7',
    Name: 'Antonella Sciaraffia Estrada',
    Birthday: '1966-02-03',
    DeputyId: 103
  }, {
    Id: 'cc296f226cb3737db9fedcce737f4861fe00856e',
    Name: 'Salvador Pedro Urrutia Cárdenas',
    Birthday: '1942-07-07',
    DeputyId: 110
  }, {
    Id: '7c8a4f5c3c3eb3fb810097e523f27de6de5fe7b1',
    Name: 'Jacqueline Van Rysselberghe Herrera',
    Birthday: '1965-02-03'
  }, {
    Id: '404_09',
    Name: 'Enrique Van Rysselberghe Varela',
    Birthday: '1937-04-04',
    DeputyId: 112,
    Family: {
      Children: [{
        Id: '18e45149981258ad04537dd80114d866a0626d73',
        Name: 'Enrique Van Rysselberghe Herrera'
      }, {
        Id: '7c8a4f5c3c3eb3fb810097e523f27de6de5fe7b1',
        Name: 'Jacqueline Van Rysselberghe Herrera'
      }]
    }
  }, {
    Id: 'c5351013dd25d571fd373ef214c734856fdd5f1c',
    Name: 'Ignacio Walker Prieto',
    Birthday: '1956-01-01',
    DeputyId: 119
  }, {
    Id: 'd360a0ee40199b7873c368e255fea01e8399aa01',
    Name: 'Rafael Luis Arratia Valdebenito',
    Birthday: '1946-05-12',
    DeputyId: 8
  }, {
    Id: '',
    Name: 'Manuel Bustos Huerta',
    Birthday: '1943-12-02',
    Death: '1999-09-27',
    DeputyId: 13
  }, {
    Id: '404_10',
    Name: 'Haroldo Fossa Rojas',
    Birthday: '1935-08-19',
    Death: '2006-09-07',
    DeputyId: 31
  }, {
    Id: '404_11',
    Name: 'Homero Gutiérrez Román',
    Birthday: '1929-10-13',
    DeputyId: 39
  }, {
    Id: '875b7552f8c510f100222eb80bb1d3d2a054e326',
    Name: 'Francisco Segundo Huenchumilla Jaramillo',
    Birthday: '1944-03-22',
    DeputyId: 43
  }, {
    Id: '0f70fcd106f0228c66322680324d9c27da47e4f3',
    Name: 'José Tomás Jocelyn-Holt Letelier',
    Birthday: '1963-01-16',
    DeputyId: 49
  }, {
    Id: 'd575aa412197eefafbbfd8a3828fb316908278b5',
    Name: 'Gutenberg Alejandro Martínez Ocamica',
    Birthday: '1950-08-29',
    DeputyId: 62
  }, {
    Id: 'ad6aaec6aa4629aba89485e145b1e223d64cb47b',
    Name: 'Jaime Naranjo Ortiz',
    Birthday: '1951-01-12',
    DeputyId: 74
  }, {
    Id: '404_11',
    Name: 'Joaquín Palma Irarrázaval',
    Birthday: '1943-02-02',
    Death: '2013-08-17',
    DeputyId: 84
  }, {
    Id: '81accc2670f24b6f988b95ec84cdb629094f9d62',
    Name: 'Fanny Sonnia Pollarolo Villa',
    Birthday: '1935-03-07',
    DeputyId: 91
  }, {
    Id: '751caf683988f0242193eff50c04f116ba1c1e6f',
    Name: 'Felipe Valenzuela Herrera',
    Birthday: '1941-10-08',
    DeputyId: 111
  }, {
    Id: '404_13',
    Name: 'Osvaldo Vega Vera',
    Birthday: '1928-07-24',
    Death: '2006-03-01',
    DeputyId: 114
  }, {
    Id: '13fd133063a4a6febc9fb9618499f442cf80dbc2',
    Name: 'Andrés Jaime Palma Irarrázaval',
    Birthday: '1955-07-21',
    DeputyId: 83
  }, {
    Id: '404_14',
    Name: 'Jaime Rocha Manrique',
    Birthday: '1938-11-04',
    Death: '2012-10-01',
    DeputyId: 98
  }, {
    Id: '3e2d5707e8537d90f2541d14c79daa330e0caee1',
    Name: 'Sergio Velasco De la Cerda',
    Birthday: '1945-12-21',
    DeputyId: 115
  }, {
    Id: 'f58852b4a7425ed142b898c99399c221ce1c6d53',
    Name: 'Juan Ramón Núñez Valenzuela',
    Birthday: '1943-10-18',
    DeputyId: 76
  }, {
    Id: '404_15',
    Name: 'María Rozas Velásquez',
    Birthday: '1955-11-08',
    Death: '2011-05-06',
    DeputyId: 121
  }, {
    Id: '6d12f047a5200eed5c4289cf422430b79853b9cb',
    Name: 'José Miguel Hernández Saffirio',
    Birthday: '1949-07-18',
    DeputyId: 42
  }, {
    Id: '9927ee7af4a7ad0d278d3a5775ce1e4fc7e0a5f5',
    Name: 'José Luis Monge Sánchez',
    Birthday: '1948-09-20',
    DeputyId: 67
  }, {
    Id: 'd4c9d5effea8e506a26efd5d45812d2fe9b03188',
    Name: 'Gerardo José María Hurtado Ruiz-Tagle',
    Birthday: '1945-03-05',
    Death: '2018-09-24',
    DeputyId: 448
  }, {
    Id: '404_16',
    Name: 'Octavio Jara Wolff',
    Birthday: '1944-07-22',
    Death: '2001-12-30',
    DeputyId: 449
  }, {
    Id: 'd84732d8110e4a6198819757e19686b4a8748975',
    Name: 'Edmundo Segundo Salas De La Fuente',
    Birthday: '1935-09-09',
    DeputyId: 220
  }, {
    Id: '235405d0d7560bf7f8ee1472f672a8f71994742e',
    Name: 'Evelyn Rose Matthei Fornet',
    Birthday: '1953-11-11',
    DeputyId: 467
  }, {
    Id: 'eeab87c911ff41072d779ccfb432a53d6ca92c52',
    Name: 'Eugenio Fernando Munizaga Rodríguez',
    Birthday: '1941-04-06',
    Death: '2018-05-11',
    DeputyId: 472
  }, {
    Id: '404_17',
    Name: 'Armando Arancibia Calderón',
    Birthday: '1941-01-06',
    Death: '2016-02-24',
    DeputyId: 407
  }, {
    Id: 'c8c4b6eb68f77a4d1bce8781e7faada9e00a1f81',
    Name: 'Andrés Aylwin Azocar',
    Birthday: '1925-06-20',
    Death: '2018-08-20',
    DeputyId: 410
  }, {
    Id: '5454d201e4e3ccd03fd080b12cdb817f8b84d280',
    Name: 'Carlos Ramón Juan Bombal Otaegui',
    Birthday: '1950-11-26',
    DeputyId: 415
  }, {
    Id: 'f8931b8cfec52e09148afca81a3a5d5c8d468f4a',
    Name: 'Carlos Raúl Cantero Ojeda',
    Birthday: '1956-11-11',
    DeputyId: 417
  }, {
    Id: '5e9d4c94963b6c8f703e4626b86ca322f81e0a0b',
    Name: 'Carlos Emilio Dupré Silva',
    Birthday: '1944-01-12',
    DeputyId: 426
  }, {
    Id: '521f0a43365137f100cb811bf9f7c5bb215cd9e2',
    Name: 'Ramón Julio Elizalde Hevia',
    Birthday: '1940-02-25',
    DeputyId: 428
  }, {
    Id: '23fe2cf5a5526ab59545f244f1c92188efdea416',
    Name: 'Jaime Luis Estévez Valencia',
    Birthday: '1946-09-27',
    DeputyId: 433
  }, {
    Id: '404_18',
    Name: 'Miguel Angel Fantuzzi Hernández',
    Birthday: '1940-06-12',
    Death: '2002-12-06',
    DeputyId: 434
  }, {
    Id: '213d3307c49f31893ae772c83d8da4e2d8de2182',
    Name: 'Rubén Gajardo Chacón',
    Birthday: '1936-04-26',
    DeputyId: 437
  }, {
    Id: 'dd1cd2ca4caebfd3f7c949d904c8d8cde511fe14',
    Name: 'Teodoro Javier Ribera Neumann',
    Birthday: '1958-05-25',
    DeputyId: 491
  }, {
    Id: 'd66daeb940f0247885c5efd49bab6f6c3ddfb9ee',
    Name: 'Claudio Rodríguez Cataldo',
    Birthday: '1954-09-24',
    DeputyId: 493
  }, {
    Id: 'd3b74ff5e6360500c52178f6081b00d2c196b87b',
    Name: 'Hosain Sabag Castillo',
    Birthday: '1937-05-05',
    DeputyId: 495
  }, {
    Id: '77b8885c62393f455ac28aeb66954b3118efc925',
    Name: 'Jorge Jaime Schaulsohn Brodsky',
    Birthday: '1952-12-22',
    DeputyId: 497
  }, {
    Id: '770b55b1de6665510992f5b6be7b161b9aca7629',
    Name: 'Vicente Agustín Sota Barros',
    Birthday: '1924-04-28',
    Death: '2017-08-16',
    DeputyId: 502
  }, {
    Id: 'd3172a1ac1db6cdc7888a6c382524150d657f16c',
    Name: 'Juan Enrique Taladriz García',
    Birthday: '1946-03-03',
    DeputyId: 503
  }, {
    Id: '404_19',
    Name: 'Isidoro Tohá González',
    Birthday: '1929-01-24',
    Death: '2007-06-16',
    DeputyId: 504
  }, {
    Id: '0721cd1f01270dfb6c1d136ec7a75264e0e6d2b1',
    Name: 'Raúl Armando Urrutia Avila',
    Birthday: '1950-05-01',
    DeputyId: 507
  }, {
    Id: '651d6adfea7a8108b1d8c0beac5bab33288886bb',
    Name: 'Carlos Raúl Valcarce Medina',
    Birthday: '1950-04-26',
    DeputyId: 509
  }, {
    Id: 'b062fa5ff56e0aea818d06cdcf6c703cd090ad10',
    Name: 'José Antonio César Bernardo del Carmen Viera-Gallo Quesney',
    Birthday: '1943-12-02',
    DeputyId: 514
  }, {
    Id: '3887990645f3868ffc5e09772891ff4d86d650b8',
    Name: 'Andrés Allamand Zavala',
    Birthday: '1956-02-07',
    DeputyId: 405,
    Family: {
      Wife: [{
        Id: '61fb9b9d34a0f8c6a82cac1183c8224f0a459f91',
        Name: 'Marcela Cubillos Sigall'
      }]
    }
  }, {
    Id: '6e1b1a4eb84f9586d5220aa68c8d07481b41dc23',
    Name: 'Laura Mariana Aylwin Oyarzún',
    Birthday: '1949-06-13',
    DeputyId: 411
  }, {
    Id: '404_20',
    Name: 'Ignacio Balbontín Arteaga',
    Birthday: '1940-06-18',
    Death: '2015-08-18',
    DeputyId: 412
  }, {
    Id: '0c07ae0e2d1efbd1bc5277129e85f514f3d9edd2',
    Name: 'Iván Alfonso De la Maza Maillet',
    Birthday: '1940-10-18',
    DeputyId: 425
  }, {
    Id: '850157b8c8690800b43fa2daad3adde4f66c42aa',
    Name: 'Luis Valentín Ferrada Valenzuela',
    Birthday: '1948-09-28',
    DeputyId: 435
  }, {
    Id: '154b107aa5312951817279407489f8e935640fc1',
    Name: 'Harry Rolando Jürgensen Caesar',
    Birthday: '1942-05-30',
    DeputyId: 452
  }, {
    Id: 'd7ecdce6e8befb2cea4409f2be4622cb33edde04',
    Name: 'José Amador Makluf Campos',
    Birthday: '1942-06-20',
    DeputyId: 463
  }, {
    Id: '9c0f9843c0db5f78cc5988a006475837c41cd50b',
    Name: 'Valentín Jesús Solís Cabezas',
    Birthday: '1959-11-24',
    DeputyId: 500
  }, {
    Id: 'c6f05b4ee5744abd8b5c57b30abd76ab2fdf74f9',
    Name: 'Erick Alonso Villegas González',
    Birthday: '1953-11-11',
    DeputyId: 516
  }, {
    Id: '67c743f5c6beba6623bb779a4fb20fa96ca7d7ce',
    Name: 'Martita Elvira Alemania Wörner Tapia',
    Birthday: '1947-01-18',
    DeputyId: 519
  }, {
    Id: '404_21',
    Name: 'Héctor Zambrano Opazo',
    Birthday: '1939-04-16',
    DeputyId: 520
  }, {
    Id: '9cd4b2e87abf986cdcede3bec2f639784f14976c',
    Name: 'Hugo Alamos Vásquez',
    Birthday: '1932-08-22',
    DeputyId: 603
  }, {
    Id: '8dd3626c71993fe0e2649a59a07d9d4b723a0f06',
    Name: 'Gustavo Alessandri Balmaceda',
    Birthday: '1961-03-08',
    DeputyId: 604
  }, {
    Id: '789155ed418bca597b6e38123206bb631cb9be19',
    Name: 'Carlos Hernán Bosselin Correa',
    Birthday: '1943-12-31',
    DeputyId: 612
  }, {
    Id: 'f15d6b21e17f7b86c35d3f47199ac9ac29b69c20',
    Name: 'Jaime Alfonso Campos Quiroga',
    Birthday: '1953-02-16',
    DeputyId: 614
  }, {
    Id: '404_22',
    Name: 'Gustavo Cardemil Alfaro',
    Birthday: '1920-04-10',
    Death: '2008-07-11',
    DeputyId: 617
  }, {
    Id: 'f3749d01b2c178bb0afbe6700190adce3ca62cee',
    Name: 'Baldemar Carrasco Muñoz',
    Birthday: '1931-09-24',
    DeputyId: 618
  }, {
    Id: '3c1c434b45781214aea237cf16e8e1a5028931f4',
    Name: 'Mario Enrique Devaud Ojeda',
    Birthday: '1955-08-23',
    DeputyId: 626
  }, {
    Id: '5181292982e4a7b4082edeb9a0617dbbeeeedb10',
    Name: 'Dionisio Ventura Faulbaum Mayorga',
    Birthday: '1961-01-30',
    DeputyId: 634
  }, {
    Id: '0525edf0aa884c2454585a1cb10dd85c21bb4b1d',
    Name: 'Juan Pedro Guzmán Alvarez',
    Birthday: '1943-12-30',
    DeputyId: 639
  }, {
    Id: '09a9a595e2d9b1d760686a8d83a124d38cad765c',
    Name: 'Antonio Carlos Horvath Kiss',
    Birthday: '1950-01-03',
    Death: '2018-05-23',
    DeputyId: 641
  }, {
    Id: '404_23',
    Name: 'Claudio Huepe García',
    Birthday: '1939-12-25',
    Death: '2009-05-11',
    DeputyId: 643
  }, {
    Id: '70ae7a720c89d696f8d35fb2e30d4ecbf1edc098',
    Name: 'Sergio Raúl Jara Catalán',
    Birthday: '1946-10-09',
    DeputyId: 645
  }, {
    Id: '45289cddc8295fab47baa0a362d0713fc218d8a3',
    Name: 'Vladislav Dusan Kuzmicic Calderón',
    Birthday: '1945-10-23',
    DeputyId: 649
  }, {
    Id: '404_24',
    Name: 'María Maluenda Campos',
    Birthday: '1920-03-06',
    Death: '2011-08-29',
    DeputyId: 656
  }, {
    Id: '404_25',
    Name: 'Juan Martínez Sepúlveda',
    Birthday: '1943-09-25',
    DeputyId: 658
  }, {
    Id: '2bfb76735d69f429bc3cb8c3fbbadef4aaab9627',
    Name: 'Manuel José Ramón Matta Aragay',
    Birthday: '1946-11-10',
    DeputyId: 660
  }, {
    Id: 'bfb0c1d21c74ed0076abf9db47a4122a4291ded3',
    Name: 'Federico Andrés Mekis Martínez',
    Birthday: '1955-08-14',
    DeputyId: 662
  }, {
    Id: 'abd7115626c750a07102053d95946bbde853a351',
    Name: 'Jorge Guillermo Molina Valdivieso',
    Birthday: '1932-02-16',
    DeputyId: 664
  }, {
    Id: '7970df5ba7ad79190349d71bf425022209d5ebc6',
    Name: 'Jorge Carlos Morales Adriasola',
    Birthday: '1931-10-02',
    DeputyId: 666
  }, {
    Id: '',
    Name: 'Roberto Muñoz Barra',
    Birthday: '',
    DeputyId: 668
  }, {
    Id: '',
    Name: 'Luis Navarrete Carvacho',
    Birthday: '',
    DeputyId: 671
  }, {
    Id: '',
    Name: 'Héctor Olivares Solis',
    Birthday: '',
    DeputyId: 673
  }, {
    Id: '',
    Name: 'Eugenio Ortega Riquelme',
    Birthday: '',
    DeputyId: 675
  }, {
    Id: '',
    Name: 'Mario Palestro Rojas',
    Birthday: '',
    DeputyId: 677
  }, {
    Id: '',
    Name: 'José Apolonio Peña Meza',
    Birthday: '',
    DeputyId: 680
  }, {
    Id: '',
    Name: 'Juan Alberto Pérez Muñoz',
    Birthday: '',
    DeputyId: 681
  }, {
    Id: '',
    Name: 'Gustavo Ramírez Vergara',
    Birthday: '',
    DeputyId: 688
  }, {
    Id: '',
    Name: 'Federico Ringeling Hunger',
    Birthday: '',
    DeputyId: 693
  }, {
    Id: '',
    Name: 'Hugo Rodríguez Guerrero',
    Birthday: '',
    DeputyId: 697
  }, {
    Id: '',
    Name: 'Laura Rodríguez Riccomini',
    Birthday: '',
    DeputyId: 698
  }, {
    Id: '',
    Name: 'Hernán Rojo Avendaño',
    Birthday: '',
    DeputyId: 699
  }, {
    Id: '',
    Name: 'Julio Rojos Astorga',
    Birthday: '',
    DeputyId: 700
  }, {
    Id: '',
    Name: 'Juan Akin Soto Morales',
    Birthday: '',
    DeputyId: 707
  }, {
    Id: '',
    Name: 'Andrés Sotomayor Mardones',
    Birthday: '',
    DeputyId: 708
  }, {
    Id: '',
    Name: 'Guillermo Yunge Bustamante',
    Birthday: '',
    DeputyId: 720
  }, {
    Id: '',
    Name: 'Martín Manterola ',
    Birthday: '',
    DeputyId: 721
  }, {
    Id: '',
    Name: 'Francisco Bayo Veloso',
    Birthday: '',
    DeputyId: 132
  }, {
    Id: '',
    Name: 'Eliana Caraball Martínez',
    Birthday: '',
    DeputyId: 137
  }, {
    Id: '',
    Name: 'Camilo Escalona Medina',
    Birthday: '',
    DeputyId: 150
  }, {
    Id: '',
    Name: 'Mario Escobar Urbina',
    Birthday: '',
    DeputyId: 151
  }, {
    Id: '',
    Name: 'José Antonio Galilea Vidaurre',
    Birthday: '',
    DeputyId: 155
  }, {
    Id: '',
    Name: 'Rosa González Román',
    Birthday: '',
    DeputyId: 159
  }, {
    Id: '',
    Name: 'Carlos Hidalgo González',
    Birthday: '',
    DeputyId: 164
  }, {
    Id: '',
    Name: 'Gonzalo Ibáñez Santa María',
    Birthday: '',
    DeputyId: 165
  }, {
    Id: '',
    Name: 'Víctor Jeame Barrueto',
    Birthday: '',
    DeputyId: 169
  }, {
    Id: '',
    Name: 'Jaime Jiménez Villavicencio',
    Birthday: '',
    DeputyId: 170
  }, {
    Id: '',
    Name: 'Carlos Kuschel Silva',
    Birthday: '',
    DeputyId: 172
  }, {
    Id: '',
    Name: 'Eduardo Lagos Herrera',
    Birthday: '',
    DeputyId: 173
  }, {
    Id: '',
    Name: 'Juan Pablo Letelier Morel',
    Birthday: '',
    DeputyId: 176
  }, {
    Id: '',
    Name: 'Felipe Letelier Norambuena',
    Birthday: '',
    DeputyId: 177
  }, {
    Id: '',
    Name: 'Pablo Longueira Montes',
    Birthday: '',
    DeputyId: 179
  }, {
    Id: '',
    Name: 'Zarko Luksic Sandoval',
    Birthday: '',
    DeputyId: 181
  }, {
    Id: '',
    Name: 'Darío Molina Sanhueza',
    Birthday: '',
    DeputyId: 187
  }, {
    Id: '',
    Name: 'Waldo Mora Longa',
    Birthday: '',
    DeputyId: 190
  }, {
    Id: '',
    Name: 'Alejandro Navarro Brain',
    Birthday: '',
    DeputyId: 195
  }, {
    Id: '',
    Name: 'Cristián Pareto Vergara',
    Birthday: '',
    DeputyId: 202
  }, {
    Id: '',
    Name: 'Ramón Pérez Opazo',
    Birthday: '',
    DeputyId: 206
  }, {
    Id: '',
    Name: 'Pablo Prieto Lorca',
    Birthday: '',
    DeputyId: 209
  }, {
    Id: '',
    Name: 'Víctor Manuel Rebolledo González',
    Birthday: '',
    DeputyId: 211
  }, {
    Id: '',
    Name: 'Leopoldo Sánchez Grunert',
    Birthday: '',
    DeputyId: 221
  }, {
    Id: '',
    Name: 'Rodolfo Seguel Molina',
    Birthday: '',
    DeputyId: 222
  }, {
    Id: '',
    Name: 'Exequiel Silva Ortiz',
    Birthday: '',
    DeputyId: 224
  }, {
    Id: '',
    Name: 'Mario Varela Herrera',
    Birthday: '',
    DeputyId: 234
  }, {
    Id: '',
    Name: 'Edmundo Villouta Concha',
    Birthday: '',
    DeputyId: 239
  }, {
    Id: '',
    Name: 'Arturo Longton Guerrero',
    Birthday: '',
    DeputyId: 178
  }, {
    Id: '',
    Name: 'Pedro Muñoz Aburto',
    Birthday: '',
    DeputyId: 193
  }, {
    Id: '',
    Name: 'Aníbal Pérez Lobos',
    Birthday: '',
    DeputyId: 205
  }, {
    Id: '',
    Name: 'Patricio Cornejo Vidaurrázaga',
    Birthday: '',
    DeputyId: 140
  }, {
    Id: '',
    Name: 'Guido Girardi Lavín',
    Birthday: '',
    DeputyId: 158
  }, {
    Id: '',
    Name: 'Edgardo Riveros Marín',
    Birthday: '',
    DeputyId: 213
  }, {
    Id: '',
    Name: 'María Pía Guzmán Mena',
    Birthday: '',
    DeputyId: 161
  }, {
    Id: '',
    Name: 'Cristián Leay Morán',
    Birthday: '',
    DeputyId: 175
  }, {
    Id: '',
    Name: 'Carmen Ibáñez Soto',
    Birthday: '',
    DeputyId: 166
  }, {
    Id: '',
    Name: 'María Eugenia Mella Gajardo',
    Birthday: '',
    DeputyId: 185
  }, {
    Id: '',
    Name: 'Boris Tapia Martínez',
    Birthday: '',
    DeputyId: 226
  }, {
    Id: '',
    Name: 'Juan Concha Urbina',
    Birthday: '',
    DeputyId: 621
  }, {
    Id: '',
    Name: 'Milenko Vilicic Karnincic',
    Birthday: '',
    DeputyId: 718
  }, {
    Id: '',
    Name: 'Jaime Orpis Bouchon',
    Birthday: '',
    DeputyId: 79
  }, {
    Id: '',
    Name: 'Andrés Chadwick Piñera',
    Birthday: '',
    DeputyId: 424
  }, {
    Id: '',
    Name: 'Sergio Morales Morales',
    Birthday: '',
    DeputyId: 470
  }, {
    Id: '',
    Name: 'Luis Leblanc Valenzuela',
    Birthday: '',
    DeputyId: 652
  }, {
    Id: '',
    Name: 'Carlos Smok Ubeda',
    Birthday: '',
    DeputyId: 705
  }, {
    Id: '',
    Name: 'Néstor Jofré Núñez',
    Birthday: '',
    DeputyId: 242
  }, {
    Id: '',
    Name: 'María Victoria Ovalle Ovalle',
    Birthday: '',
    DeputyId: 81
  }, {
    Id: '',
    Name: 'Jorge Soria Macchiavello',
    Birthday: '',
    DeputyId: 106
  }, {
    Id: '',
    Name: 'Francisco Bartolucci Johnston',
    Birthday: '',
    DeputyId: 11
  }, {
    Id: '',
    Name: 'Mario Hamuy Berr',
    Birthday: '',
    DeputyId: 445
  }, {
    Id: '',
    Name: 'José Luis González Rodríguez',
    Birthday: '',
    DeputyId: 443
  }, {
    Id: '',
    Name: 'Vicente Karelovic Vrandecic',
    Birthday: '',
    DeputyId: 453
  }, {
    Id: '',
    Name: 'Romy Rebolledo Leyton',
    Birthday: '',
    DeputyId: 489
  }, {
    Id: '',
    Name: 'Nicanor Araya de la Cruz',
    Birthday: '',
    DeputyId: 607
  }, {
    Id: '',
    Name: 'Cristian Letelier Aguilar',
    Birthday: '',
    DeputyId: 965
  }, {
    Id: '',
    Name: 'Joel Rosales Guzmán',
    Birthday: '',
    DeputyId: 966
  }, {
    Id: '',
    Name: 'Issa Kort Garriga',
    Birthday: '',
    DeputyId: 967
  }, {
    Id: '',
    Name: 'Renzo Trisotti Martínez',
    Birthday: '',
    DeputyId: 1003
  }, {
    Id: '',
    Name: 'Joaquín Lavín León',
    Birthday: '',
    DeputyId: 989
  }, {
    Id: '',
    Name: 'Camila Vallejo Dowling',
    Birthday: '',
    DeputyId: 1006
  }, {
    Id: '',
    Name: 'Loreto Carvajal Ambiado',
    Birthday: '',
    DeputyId: 974
  }, {
    Id: '',
    Name: 'Iván Flores García',
    Birthday: '',
    DeputyId: 982
  }, {
    Id: '',
    Name: 'Juan Enrique Morano Cornejo',
    Birthday: '',
    DeputyId: 992
  }, {
    Id: '',
    Name: 'Marcela Hernando Pérez',
    Birthday: '',
    DeputyId: 986
  }, {
    Id: '',
    Name: 'Paulina Núñez Urrutia',
    Birthday: '',
    DeputyId: 994
  }, {
    Id: '',
    Name: 'Yasna Provoste Campillay',
    Birthday: '',
    DeputyId: 998
  }, {
    Id: '',
    Name: 'Sergio Gahona Salazar',
    Birthday: '',
    DeputyId: 985
  }, {
    Id: '',
    Name: 'Daniel Núñez Arancibia',
    Birthday: '',
    DeputyId: 993
  }, {
    Id: '',
    Name: 'Christian Urízar Muñoz',
    Birthday: '',
    DeputyId: 1004
  }, {
    Id: '',
    Name: 'Osvaldo Urrutia Soto',
    Birthday: '',
    DeputyId: 1005
  }, {
    Id: '',
    Name: 'Daniel Farcas Guendelman',
    Birthday: '',
    DeputyId: 980
  }, {
    Id: '',
    Name: 'Karol Cariola Oliva',
    Birthday: '',
    DeputyId: 973
  }, {
    Id: '',
    Name: 'Maya Fernández Allende',
    Birthday: '',
    DeputyId: 981
  }, {
    Id: '',
    Name: 'Giorgio Jackson Drago',
    Birthday: '',
    DeputyId: 987
  }, {
    Id: '',
    Name: 'Felipe Kast Sommerhoff',
    Birthday: '',
    DeputyId: 988
  }, {
    Id: '',
    Name: 'Jaime Pilowsky Greene',
    Birthday: '',
    DeputyId: 996
  }, {
    Id: '',
    Name: 'Claudio Arriagada Macaya',
    Birthday: '',
    DeputyId: 969
  }, {
    Id: '',
    Name: 'Daniel Melo Contreras',
    Birthday: '',
    DeputyId: 990
  }, {
    Id: '',
    Name: 'Jaime Bellolio Avaria',
    Birthday: '',
    DeputyId: 970
  }, {
    Id: '',
    Name: 'Leonardo Soto Ferrada',
    Birthday: '',
    DeputyId: 1002
  }, {
    Id: '',
    Name: 'Juan Antonio Coloma Álamos',
    Birthday: '',
    DeputyId: 976
  }, {
    Id: '',
    Name: 'Sergio Espejo Yaksic',
    Birthday: '',
    DeputyId: 979
  }, {
    Id: '',
    Name: 'Marcelo Chávez Velásquez',
    Birthday: '',
    DeputyId: 977
  }, {
    Id: '',
    Name: 'Roberto Poblete Zapata',
    Birthday: '',
    DeputyId: 997
  }, {
    Id: '',
    Name: 'Diego Paulsen Kehr',
    Birthday: '',
    DeputyId: 995
  }, {
    Id: '',
    Name: 'Bernardo Berger Fett',
    Birthday: '',
    DeputyId: 971
  }, {
    Id: '',
    Name: 'Gonzalo Fuenzalida Figueroa',
    Birthday: '',
    DeputyId: 984
  }, {
    Id: '',
    Name: 'Felipe De Mussy Hiriart',
    Birthday: '',
    DeputyId: 978
  }, {
    Id: '',
    Name: 'Iván Fuentes Castillo',
    Birthday: '',
    DeputyId: 983
  }, {
    Id: '',
    Name: 'Gabriel Boric Font',
    Birthday: '',
    DeputyId: 972
  }, {
    Id: '',
    Name: 'Miguel Ángel Alvarado Ramírez',
    Birthday: '',
    DeputyId: 1007
  }, {
    Id: '',
    Name: 'Florcita Alarcón Rojas',
    Birthday: '',
    DeputyId: 1008
  }, {
    Id: '',
    Name: 'Jorge Alessandri Vergara',
    Birthday: '',
    DeputyId: 1009
  }, {
    Id: '',
    Name: 'Sebastián Álvarez Ramírez',
    Birthday: '',
    DeputyId: 1010
  }, {
    Id: '',
    Name: 'Sandra Amar Mancilla',
    Birthday: '',
    DeputyId: 1011
  }, {
    Id: '',
    Name: 'Boris Barrera Moreno',
    Birthday: '',
    DeputyId: 1012
  }, {
    Id: '',
    Name: 'Karim Bianchi Retamales',
    Birthday: '',
    DeputyId: 1014
  }, {
    Id: '',
    Name: 'Miguel Ángel Calisto Águila',
    Birthday: '',
    DeputyId: 1016
  }, {
    Id: '',
    Name: 'Álvaro Carter Fernández',
    Birthday: '',
    DeputyId: 1017
  }, {
    Id: '',
    Name: 'Natalia Castillo Muñoz',
    Birthday: '',
    DeputyId: 1018
  }, {
    Id: '',
    Name: 'Ricardo Celis Araya',
    Birthday: '',
    DeputyId: 1020
  }, {
    Id: '',
    Name: 'Andrés Celis Montt',
    Birthday: '',
    DeputyId: 1021
  }, {
    Id: '',
    Name: 'Sofía Cid Versalovic',
    Birthday: '',
    DeputyId: 1022
  }, {
    Id: '',
    Name: 'Luciano Cruz-Coke Carvallo',
    Birthday: '',
    DeputyId: 1024
  }, {
    Id: '',
    Name: 'Catalina Del Real Mihovilovic',
    Birthday: '',
    DeputyId: 1025
  }, {
    Id: '',
    Name: 'Mario Desbordes Jiménez',
    Birthday: '',
    DeputyId: 1026
  }, {
    Id: '',
    Name: 'Jorge Durán Espinoza',
    Birthday: '',
    DeputyId: 1027
  }, {
    Id: '',
    Name: 'Francisco Eguiguren Correa',
    Birthday: '',
    DeputyId: 1029
  }, {
    Id: '',
    Name: 'Camila Flores Oporto',
    Birthday: '',
    DeputyId: 1030
  }, {
    Id: '',
    Name: 'Juan Fuenzalida Cobo',
    Birthday: '',
    DeputyId: 1031
  }, {
    Id: '',
    Name: 'Ramón Galleguillos Castillo',
    Birthday: '',
    DeputyId: 1032
  }, {
    Id: '',
    Name: 'Renato Garín González',
    Birthday: '',
    DeputyId: 1033
  }, {
    Id: '',
    Name: 'Carmen Hertz Cádiz',
    Birthday: '',
    DeputyId: 1035
  }, {
    Id: '',
    Name: 'Tomás Hirsch Goldschmidt',
    Birthday: '',
    DeputyId: 1036
  }, {
    Id: '',
    Name: 'Diego Ibáñez Cotroneo',
    Birthday: '',
    DeputyId: 1037
  }, {
    Id: '',
    Name: 'Pamela Jiles Moreno',
    Birthday: '',
    DeputyId: 1039
  }, {
    Id: '',
    Name: 'Harry Jürgensen Rundshagen',
    Birthday: '',
    DeputyId: 1040
  }, {
    Id: '',
    Name: 'Sebastián Keitel Bianchi',
    Birthday: '',
    DeputyId: 1042
  }, {
    Id: '',
    Name: 'Raúl Leiva Carvajal',
    Birthday: '',
    DeputyId: 1044
  }, {
    Id: '',
    Name: 'Aracely Leuquén Uribe',
    Birthday: '',
    DeputyId: 1045
  }, {
    Id: '',
    Name: 'Andrés Longton Herrera',
    Birthday: '',
    DeputyId: 1046
  }, {
    Id: '',
    Name: 'Karin Luck Urban',
    Birthday: '',
    DeputyId: 1047
  }, {
    Id: '',
    Name: 'Carolina Marzán Pinto',
    Birthday: '',
    DeputyId: 1048
  }, {
    Id: '',
    Name: 'Cosme Mellado Pino',
    Birthday: '',
    DeputyId: 1049
  }, {
    Id: '',
    Name: 'Miguel Mellado Suazo',
    Birthday: '',
    DeputyId: 1050
  }, {
    Id: '',
    Name: 'Claudia Mix Jiménez',
    Birthday: '',
    DeputyId: 1051
  }, {
    Id: '',
    Name: 'Andrés Molina Magofke',
    Birthday: '',
    DeputyId: 1052
  }, {
    Id: '',
    Name: 'Francesca Muñoz González',
    Birthday: '',
    DeputyId: 1054
  }, {
    Id: '',
    Name: 'Nicolás Noman Garrido',
    Birthday: '',
    DeputyId: 1055
  }, {
    Id: '',
    Name: 'Emilia Nuyado Ancapichún',
    Birthday: '',
    DeputyId: 1056
  }, {
    Id: '',
    Name: 'Erika Olivera De La Fuente',
    Birthday: '',
    DeputyId: 1057
  }, {
    Id: '',
    Name: 'Ximena Ossandón Irarrázabal',
    Birthday: '',
    DeputyId: 1059
  }, {
    Id: '',
    Name: 'Luis Pardo Sáinz',
    Birthday: '',
    DeputyId: 1060
  }, {
    Id: '',
    Name: 'Andrea Parra Sauterel',
    Birthday: '',
    DeputyId: 1061
  }, {
    Id: '',
    Name: 'Joanna Pérez Olea',
    Birthday: '',
    DeputyId: 1062
  }, {
    Id: '',
    Name: 'Catalina Pérez Salinas',
    Birthday: '',
    DeputyId: 1063
  }, {
    Id: '',
    Name: 'Pablo Prieto Lorca',
    Birthday: '',
    DeputyId: 1064
  }, {
    Id: '',
    Name: 'Guillermo Ramírez Diez',
    Birthday: '',
    DeputyId: 1065
  }, {
    Id: '',
    Name: 'Rolando Rentería Moller',
    Birthday: '',
    DeputyId: 1066
  }, {
    Id: '',
    Name: 'Hugo Rey Martínez',
    Birthday: '',
    DeputyId: 1067
  }, {
    Id: '',
    Name: 'Camila Rojas Valderrama',
    Birthday: '',
    DeputyId: 1068
  }, {
    Id: '',
    Name: 'Leonidas Romero Sáez',
    Birthday: '',
    DeputyId: 1069
  }, {
    Id: '',
    Name: 'Patricio Rosas Barrientos',
    Birthday: '',
    DeputyId: 1070
  }, {
    Id: '',
    Name: 'Gastón Saavedra Chandía',
    Birthday: '',
    DeputyId: 1071
  }, {
    Id: '',
    Name: 'Gustavo Sanhueza Dueñas',
    Birthday: '',
    DeputyId: 1072
  }, {
    Id: '',
    Name: 'Juan Santana Castillo',
    Birthday: '',
    DeputyId: 1073
  }, {
    Id: '',
    Name: 'Marisela Santibáñez Novoa',
    Birthday: '',
    DeputyId: 1074
  }, {
    Id: '',
    Name: 'Luis Rocafull López',
    Birthday: '',
    DeputyId: 1000
  }, {
    Id: '',
    Name: 'Alexis Sepúlveda Soto',
    Birthday: '',
    DeputyId: 1076
  }, {
    Id: '',
    Name: 'Jenny Álvarez Vera',
    Birthday: '',
    DeputyId: 968
  }, {
    Id: '',
    Name: 'Jorge Brito Hasbún',
    Birthday: '',
    DeputyId: 1015
  }, {
    Id: '',
    Name: 'Daniella Cicardini Milla',
    Birthday: '',
    DeputyId: 975
  }, {
    Id: '',
    Name: 'Miguel Crispi Serrano',
    Birthday: '',
    DeputyId: 1023
  }, {
    Id: '',
    Name: 'Eduardo Durán Salinas',
    Birthday: '',
    DeputyId: 1028
  }, {
    Id: '',
    Name: 'Raúl Soto Mardones',
    Birthday: '',
    DeputyId: 1077
  }, {
    Id: '',
    Name: 'Jaime Tohá González',
    Birthday: '',
    DeputyId: 1078
  }, {
    Id: '',
    Name: 'Sebastián Torrealba Alvarado',
    Birthday: '',
    DeputyId: 1079
  }, {
    Id: '',
    Name: 'Virginia Troncoso Hellman',
    Birthday: '',
    DeputyId: 1080
  }, {
    Id: '',
    Name: 'Francisco Undurraga Gazitúa',
    Birthday: '',
    DeputyId: 1081
  }, {
    Id: '',
    Name: 'Cristóbal Urruticoechea Ríos',
    Birthday: '',
    DeputyId: 1082
  }, {
    Id: '',
    Name: 'Esteban Velásquez Núñez',
    Birthday: '',
    DeputyId: 1083
  }, {
    Id: '',
    Name: 'Daniel Verdessi Belemmi',
    Birthday: '',
    DeputyId: 1084
  }, {
    Id: '',
    Name: 'Pablo Vidal Rojas',
    Birthday: '',
    DeputyId: 1085
  }, {
    Id: '',
    Name: 'Gonzalo Winter Etcheberry',
    Birthday: '',
    DeputyId: 1086
  }, {
    Id: '',
    Name: 'Gael Yeomans Araya',
    Birthday: '',
    DeputyId: 1087
  }, {
    Id: '',
    Name: 'Félix González Gatica',
    Birthday: '',
    DeputyId: 1034
  }, {
    Id: '',
    Name: 'Marcos Ilabaca Cerda',
    Birthday: '',
    DeputyId: 1038
  }, {
    Id: '',
    Name: 'Pablo Kast Sommerhoff',
    Birthday: '',
    DeputyId: 1041
  }, {
    Id: '',
    Name: 'Amaro Labra Sepúlveda',
    Birthday: '',
    DeputyId: 1043
  }, {
    Id: '',
    Name: 'Vlado Mirosevic Verdugo',
    Birthday: '',
    DeputyId: 991
  }, {
    Id: '',
    Name: 'Maite Orsini Pascal',
    Birthday: '',
    DeputyId: 1058
  }, {
    Id: '',
    Name: 'Jorge Rathgeb Schifferli',
    Birthday: '',
    DeputyId: 999
  }, {
    Id: '',
    Name: 'Raúl Saldívar Auger',
    Birthday: '',
    DeputyId: 1001
  }, {
    Id: '',
    Name: 'Diego Schalper Sepúlveda',
    Birthday: '',
    DeputyId: 1075
  }, {
    Id: '',
    Name: 'Alejandro Bernales Maldonado',
    Birthday: '',
    DeputyId: 1013
  }, {
    Id: '',
    Name: 'José Miguel Castro Bascuñán',
    Birthday: '',
    DeputyId: 1019
  }, {
    Id: '',
    Name: 'Cristhian Moreira Barros',
    Birthday: '',
    DeputyId: 1053
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

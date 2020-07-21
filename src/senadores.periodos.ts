import {writeFile} from "fs";
import axios from "axios";
import {parseStringPromise} from "xml2js";
import {Senador, Senadores, PeriodosSenador, SenadorPeriodos} from "./senadores.model";
import {findPartyByAlias} from "./partidos.listado";
import {findPublicFigureIdBySenatorId} from "./figura_publica.listado";

export const periodosSenador: PeriodosSenador = {
  "2018-2026": {
    Id: "2018-2026",
    Inicio: "2018-03-11T00:00:00",
    Termino: "2026-03-10T00:00:00"
  },
  "2014-2022": {
    Id: "2014-2022",
    Inicio: "2014-03-11T00:00:00",
    Termino: "2022-03-10T00:00:00"
  },
  "2010-2018": {
    Id: "2010-2018",
    Inicio: "2010-03-11T00:00:00",
    Termino: "2018-03-10T00:00:00"
  },
  "2006-2014": {
    Id: "2006-2014",
    Inicio: "2006-03-11T00:00:00",
    Termino: "2014-03-10T00:00:00"
  },
  "2002-2010": {
    Id: "2002-2010",
    Inicio: "2002-03-11T00:00:00",
    Termino: "2010-03-10T00:00:00"
  },
  "1998-2006": {
    Id: "1998-2006",
    Inicio: "1998-03-11T00:00:00",
    Termino: "2006-03-10T00:00:00"
  },
  "1994-2002": {
    Id: "1994-2002",
    Inicio: "1994-03-11T00:00:00",
    Termino: "2002-03-10T00:00:00"
  },
  "1990-1998": {
    Id: "1990-1998",
    Inicio: "1990-03-11T00:00:00",
    Termino: "1998-03-10T00:00:00"
  }
}

export const senadorPeriodos: SenadorPeriodos = {
  "079eae6d5c36fed844f0b0371e3f6bd913c813b4": [periodosSenador["2014-2022"], periodosSenador["2006-2014"], periodosSenador["1998-2006"]],
  "df2e563fec34c046ac79f34ef5b57c4173315900": [periodosSenador["2018-2026"], periodosSenador["2010-2018"], periodosSenador["2002-2010"]],
  "f2a67e42a8bd881f0a2453fd1bc3b0eb53ff8292": [periodosSenador["2018-2026"], periodosSenador["2010-2018"], periodosSenador["2002-2010"]],
  "3887990645f3868ffc5e09772891ff4d86d650b8": [periodosSenador["2014-2022"], {
    //Andrés Allamand renunció a su cargo para asumir como ministro de Defensa del gobierno del presidente Sebastián Piñera siendo reemplazado por Carlos Larraín Peña
    Id: "2006-2014",
    Inicio: "2006-03-11T00:00:00",
    Termino: "2011-01-15T00:00:00"
  }],
  "10eaa7dbabd15539e4efd62e03bc98e71215cdd1": [periodosSenador["2014-2022"], periodosSenador["2006-2014"]],
  "89108421e37a779419e7f1fafbf07fa9ebce4de1": [periodosSenador["2014-2022"], periodosSenador["2006-2014"]],
  "3291162677ed8d4c17f0f579b2fce4442481015d": [periodosSenador["2014-2022"], periodosSenador["2006-2014"]],
  "6a31dcdcd0205c85deafe31952eafe3ed0e9638c": [periodosSenador["2014-2022"], periodosSenador["2006-2014"]],
  "750e0ece12e42a4b98624599ab7673d9e6e00f9e": [periodosSenador["2014-2022"], periodosSenador["2006-2014"]],
  "fd0e672d2b699e4008c15d887aaf5f989afaddc8": [periodosSenador["2018-2026"], periodosSenador["2010-2018"]],
  "7c8f365b1dd473b637ffba6f9e0111304f1efed3": [periodosSenador["2018-2026"], periodosSenador["2010-2018"]],
  "4b266191e27aaa403af840804cc7e772d05db6ac": [periodosSenador["2018-2026"], periodosSenador["2010-2018"]],
  "f93c3509c5abe71d8bda66f16a94af42835d17f7": [periodosSenador["2018-2026"], periodosSenador["2010-2018"]],
  "3455d9899f8888ea5580b64835cda9f109e897be": [periodosSenador["2018-2026"], {
    //Ximena Rincón nombrada Ministra de la Secretaría General de la Presidencia por la Presidenta Michelle Bachelet Jeria
    Id: "2010-2018",
    Inicio: "2010-03-11T00:00:00",
    Termino: "2014-03-10T00:00:00"
  }],
  "fd4d76a64774dccdd03f2e1fddd9a6e929e7520a": [periodosSenador["2014-2022"], {
    //Alejandro García Huidobro el 27 de julio de 2011 fue designado por la directiva de su partido para ocupar el puesto de senador dejado por Andrés Chadwick
    Id: "2006-2014",
    Inicio: "2011-08-02T00:00:00",
    Termino: "2014-03-10T00:00:00"
  }],
  "30be367b938325b57d5667ceeea568c2ee47ed4b": [periodosSenador["2014-2022"], {
    //Ena Von Baer el 27 de julio de 2011 la Unión Demócrata Independiente la designó reemplazante del senador Pablo Longueira Montes
    Id: "2006-2014",
    Inicio: "2011-07-27T00:00:00",
    Termino: "2014-03-10T00:00:00"
  }],
  "8087f501a599e8682fdf57fddd2bb2200f6ca500": [periodosSenador["2014-2022"]],
  "de75abe036e34fabe565fcf59e526c284686485e": [periodosSenador["2014-2022"]],
  "7c8a4f5c3c3eb3fb810097e523f27de6de5fe7b1": [periodosSenador["2014-2022"]],
  "626a0c585f5d43482617a5b88eb0da4b56bb63ce": [periodosSenador["2014-2022"]],
  "533ab43952c3ae9143ef644e458fa8fb2f981913": [periodosSenador["2014-2022"]],
  "ed64df3d9777e1446a529dbdfb8bea43e0eda7f6": [periodosSenador["2014-2022"]],
  "408e365d727326693228935c06274e05bb5a1140": [periodosSenador["2014-2022"]],
  "3ac86c7211e55e354c5d67073786a1d13fd47392": [periodosSenador["2014-2022"]],
  "1d4303b4f9e90759a0a543956acc55eb98cab3bb": [periodosSenador["2014-2022"]],
  "f06efcc2f42908724ff6cba0317f5d831292d9f7": [periodosSenador["2014-2022"]],
  "a17a7c6d98aae836dcd1e7427d552863e0df4538": [periodosSenador["2014-2022"]],
  "a9173ab6801df3a338ce46efa007be373dd8c4a9": [periodosSenador["2018-2026"]],
  "35344e95a9303ce44617ce1b7b25178d344250d2": [periodosSenador["2018-2026"]],
  "f276159a3442acfba23a4ec8689468d857f67a3f": [periodosSenador["2018-2026"]],
  "d5c802468dd9380b26a9de59b6654c1dd3dccb50": [periodosSenador["2018-2026"]],
  "566295064a20813edffeb2ad6db719a857cf21e3": [periodosSenador["2018-2026"]],
  "d4750b7f5aac4c2bc392d74e09c0fb825fdb068e": [periodosSenador["2018-2026"]],
  "487177432aa32631f71ccbcf48a94e3bde36d88b": [periodosSenador["2018-2026"]],
  "404_49": [periodosSenador["2018-2026"]],
  "875875b355eb4284b335e92cd9312c62bd6c56b5": [periodosSenador["2018-2026"]],
  "a450d1bd3674a5b12f787a0875cda8b1e2bb0e74": [periodosSenador["2018-2026"]],
  "6ffb37d9342660192a0446231d77e3e9dc677c6c": [periodosSenador["2018-2026"]],
  "39524e6919a31d9a1d1fd3a7a89fd7c40af0afdd": [periodosSenador["2018-2026"]],
  "875b7552f8c510f100222eb80bb1d3d2a054e326": [periodosSenador["2018-2026"]],
  "3df3793b589bd887c8c9d59d4bb5b2a3e47c9134": [periodosSenador["2018-2026"]],
  "efa5e5b88c81fc2514a64a4b65612747923bb175": [periodosSenador["2018-2026"]],
  "9888b9956a2e2ed1191778d26421bed34b995b8d": [periodosSenador["2018-2026"]]
}

async function main() {
  writeFile("./data/periodos.senadores.json", JSON.stringify(periodosSenador), function (err) {
    if (err) {
      console.log(err);
    }
  });

  writeFile("./data/senadores.periodos.json", JSON.stringify(senadorPeriodos), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

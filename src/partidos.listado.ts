import {writeFile} from "fs";
import {Partido, Partidos} from "./partidos.model";

export const politicalParties: Partidos = {
  IND: {
    Sigla: "IND",
    Nombre: "Independiente",
    Alias: ["independiente"]
  },
  COMUNES: {
    Sigla: "COMUNES",
    Nombre: "Comunes",
    FechaConstitucion: "2018-05-08",
    Posicion: "Izquierda",
    Alias: ["comunes"]
  },
  PPD: {
    Sigla: "PPD",
    Nombre: "Partido Por la Democracia",
    FechaConstitucion: "1988-05-09",
    Posicion: "Centro izquierda",
    Alias: ["ppd", "p.p.d.", "partido por la democracia"]
  },
  CIUDADANOS: {
    Sigla: "CIUDADANOS",
    Nombre: "Ciudadanos",
    FechaConstitucion: "2018-07-09",
    Posicion: "Centro",
    Alias: ["ciudadanos"]
  },
  CS: {
    Sigla: "CS",
    Nombre: "Convergencia Social",
    FechaConstitucion: "2020-03-09",
    Posicion: "Izquierda",
    Alias: ["cs", "convergencia social"]
  },
  PNC: {
    Sigla: "PNC",
    Nombre: "Partido Nacional Ciudadano",
    FechaConstitucion: "2020-04-13",
    Posicion: "Derecha",
    Alias: ["partido nacional ciudadano"]
  },
  PL: {
    Sigla: "PL",
    Nombre: "Partido Liberal de Chile",
    FechaConstitucion: "2018-11-13",
    Posicion: "Centro izquierda",
    Alias: ["partido liberal de chile"]
  },
  FREVS: {
    Sigla: "FREVS",
    Nombre: "Federación Regionalista Verde Social",
    FechaConstitucion: "2017-04-25",
    Posicion: "Izquierda",
    Alias: ["frevs", "federación regionalista verde social"]
  },
  IGUALDAD: {
    Sigla: "IGUALDAD",
    Nombre: "Igualdad",
    FechaConstitucion: "2018-07-09",
    Posicion: "Extrema Izquierda",
    Alias: ["igualdad", "partido igualdad"]
  },
  RN: {
    Sigla: "RN",
    Nombre: "Partido Renovación Nacional",
    FechaConstitucion: "2018-05-08",
    Posicion: "Centro derecha",
    Alias: ["rn", "r.n.", "partido renovación nacional", "renovación nacional", "partido renovacion nacional", "renovacion nacional"],
    Logo: "rn.svg"
  },
  IAT: {
    Sigla: "IAT",
    Nombre: "Izquierda Anticapitalista de los Trabajadores",
    FechaConstitucion: "2018-04-13",
    Posicion: "Extrema Izquierda",
    Alias: ["iat", "izquierda anticapitalista de los trabajadores"]
  },
  PRC: {
    Sigla: "PRC",
    Nombre: "Partido Republicano de Chile",
    FechaConstitucion: "2020-01-23",
    Posicion: "Extrema Derecha",
    Alias: ["partido republicano", "partido republicano de chile"]
  },
  RD: {
    Sigla: "RD",
    Nombre: "Revolución Democrática",
    FechaConstitucion: "2016-06-22",
    Posicion: "Izquierda",
    Alias: ["rd", "revolución democrática", "revolucion democratica"]
  },
  NCM: {
    Sigla: "ncm",
    Nombre: "Nueva Clase Media",
    FechaConstitucion: "2020-04-16",
    Posicion: "Centro",
    Alias: ["ncm", "ncmedia", "nueva clase media"]
  },
  NT: {
    Sigla: "NT",
    Nombre: "Nuevo Tiempo",
    FechaConstitucion: "2019-07-10",
    Posicion: "Extrema Derecha",
    Alias: ["nt", "n.t.", "nuevo tiempo"]
  },
  UPA: {
    Sigla: "UPA",
    Nombre: "Unión Patriótica",
    FechaConstitucion: "2020-02-05",
    Posicion: "Extrema Izquierda",
    Alias: ["upa", "unión patriótica", "union patriotica"]
  },
  PR: {
    Sigla: "PR",
    Nombre: "Partido Radical de Chile",
    FechaConstitucion: "1994-08-18",
    Posicion: "Centro izquierda",
    Alias: ["pr", "p.r.", "partido radical de chile"]
  },
  PRSD: {
    Sigla: "PRSD",
    Nombre: "Partido Radical Socialdemócrata",
    FechaConstitucion: "1994-08-18",
    Posicion: "Centro izquierda",
    Alias: ["prsd", "p.r.s.d.", "partido radical socialdemócrata", "partido radical socialdemocrata"]
  },
  PRI: {
    Sigla: "PRI",
    Nombre: "Partido Regionalista Independiente Demócrata",
    FechaConstitucion: "2018-06-06",
    Posicion: "Centro",
    Alias: ["pri", "partido regionalista independiente demócrata", "partido regionalista independiente democrata"]
  },
  EVOPOLI: {
    Sigla: "EVOPOLI",
    Nombre: "Evolución Política",
    FechaConstitucion: "2016-04-13",
    Posicion: "Centro derecha",
    Alias: ["evo", "evopoli", "evolución política", "evolucion politica"]
  },
  PRO: {
    Sigla: "PRO",
    Nombre: "Partido Progresista de Chile",
    FechaConstitucion: "2018-05-08",
    Posicion: "Izquierda",
    Alias: ["pro", "partido progresista de chile", "pais progresista", "país progresista"]
  },
  DC: {
    Sigla: "DC",
    Nombre: "Partido Demócrata Cristiano",
    FechaConstitucion: "1988-05-02",
    Posicion: "Centro izquierda",
    Alias: ["dc", "d.c.", "pdc", "p.d.c.", "partido demócrata cristiano", "partido democrata cristiano", "democracia cristiana"]
  },
  PEV: {
    Sigla: "PEV",
    Nombre: "Partido Ecologista Verde",
    FechaConstitucion: "2018-07-09",
    Posicion: "Centro izquierda",
    Alias: ["pev", "p.e.v.", "Partido Ecologista Verde"]
  },
  PS: {
    Sigla: "PS",
    Nombre: "Partido Socialista",
    FechaConstitucion: "1990-12-19",
    Posicion: "Centro izquierda",
    Alias: ["ps", "p.s.", "Partido Socialista de Chile", "Partido Socialista"]
  },
  PC: {
    Sigla: "PC",
    Nombre: "Partido Comunista de Chile",
    FechaConstitucion: "2010-05-28",
    Posicion: "Izquierda",
    Alias: ["pc", "p.c.", "pcch", "partido comunista de chile", "partido comunista"]
  },
  UDI: {
    Sigla: "UDI",
    Nombre: "Unión Demócrata Independiente",
    FechaConstitucion: "1989-05-03",
    Posicion: "Derecha",
    Alias: ["udi", "u.d.i.", "unión demócrata independiente", "union democrata independiente"],
    Logo: "udi.svg"
  },
  PH: {
    Sigla: "PH",
    Nombre: "Partido Humanista",
    FechaConstitucion: "2014-06-05",
    Posicion: "Izquierda",
    Alias: ["ph", "p.h.", "partido humanista"]
  },
  PPC: {
    Sigla: "PPC",
    Nombre: "Partido Poder Ciudadano",
    FechaConstitucion: "2016-05-26",
    FechaDisolucion: "2019-02-20",
    Posicion: "Izquierda",
    Alias: ["ph", "p.h.", "partido humanista"]
  },

}

export function findPartyByAlias(alias: string): Partido | undefined {
  for(const party of Object.values(politicalParties)){
    if(party.Alias.includes(alias.toLowerCase())) {
      return party;
    }
  }
  return undefined;
}

function main() {
  writeFile("./data/partidos.listado.json", JSON.stringify(politicalParties), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();

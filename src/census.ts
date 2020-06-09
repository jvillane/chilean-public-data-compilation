import {readFile, utils} from "xlsx";
import {Census, CensusCommune, CensusProvince, CensusRegion} from "./census.model";
import {writeFile} from "fs";

export interface Row {
  [index: string]: string | number
}

export type Data = Row[];

export interface ProcessedRow {
  Orden: number
  RegionNombre: string
  RegionCodigo: number
  ProvinciaNombre: string
  ProvinciaCodigo: number
  ComunaNombre: string
  ComunaCodigo: number
  GrupoEdad: string
  Total: number
  Hombres: number
  Mujeres: number
  Urbano: number
  UrbanoHombres: number
  UrbanoMujeres: number
  Rural: number
  RuralHombres: number
  RuralMujeres: number
}

const workbook = readFile('./source/ine/1_2_poblacion.xlsx');
const data: Data = utils.sheet_to_json(workbook.Sheets['Comuna'])

function processRow(row: Row): ProcessedRow | undefined {
  const keys = Object.keys(row);
  //Titulo o primera fila o total país o total comuna
  if (row[keys[1]] === undefined || row[keys[1]] === 'PAÍS' || row[keys[0]] === 'ORDEN' || row[keys[7]] === 'Total Comuna')
    return undefined;

  return {
    Orden: row[keys[0]] as number,
    RegionNombre: row[keys[1]] as string,
    RegionCodigo: Number(row[keys[2]]),
    ProvinciaNombre: row[keys[3]] as string,
    ProvinciaCodigo: Number(row[keys[4]]),
    ComunaNombre: row[keys[5]] as string,
    ComunaCodigo: Number(row[keys[6]]),
    GrupoEdad: row[keys[7]] as string,
    Total: row[keys[8]] as number,
    Hombres: row[keys[9]] as number,
    Mujeres: row[keys[10]] as number,
    Urbano: row[keys[11]] as number,
    UrbanoHombres: row[keys[12]] as number,
    UrbanoMujeres: row[keys[13]] as number,
    Rural: row[keys[14]] as number,
    RuralHombres: row[keys[15]] as number,
    RuralMujeres: row[keys[16]] as number
  }
}

let i = 0;
export const census: Census = {
  Results: {
    Total: 0,
    Men: 0,
    Women: 0,
    Urban: 0,
    UrbanMen: 0,
    UrbanWomen: 0,
    Rural: 0,
    RuralMen: 0,
    RuralWomen: 0,
  },
  Details: {},
  Regions: []
}
const regionMap = new Map<number, CensusRegion>();
const provinceMap = new Map<number, CensusProvince>();
const communeMap = new Map<number, CensusCommune>();
for (const rawRow of data) {
  const row = processRow(rawRow);
  if (row === undefined) {
    continue;
  }
  census.Results.Total += row.Total;
  census.Results.Men += row.Hombres;
  census.Results.Women += row.Mujeres;
  census.Results.Urban += row.Urbano;
  census.Results.UrbanMen += row.UrbanoHombres;
  census.Results.UrbanWomen += row.UrbanoMujeres;
  census.Results.Rural += row.Rural;
  census.Results.RuralMen += row.RuralHombres;
  census.Results.RuralWomen += row.RuralMujeres;

  let region: CensusRegion;
  if (regionMap.has(row.RegionCodigo)) {
    region = regionMap.get(row.RegionCodigo) as CensusRegion;
    region.Results.Total += row.Total;
    region.Results.Men += row.Hombres;
    region.Results.Women += row.Mujeres;
    region.Results.Urban += row.Urbano;
    region.Results.UrbanMen += row.UrbanoHombres;
    region.Results.UrbanWomen += row.UrbanoMujeres;
    region.Results.Rural += row.Rural;
    region.Results.RuralMen += row.RuralHombres;
    region.Results.RuralWomen += row.RuralMujeres;
  } else {
    region = {
      Code: row.RegionCodigo,
      Name: row.RegionNombre,
      Results: {
        Total: row.Total,
        Men: row.Hombres,
        Women: row.Mujeres,
        Urban: row.Urbano,
        UrbanMen: row.UrbanoHombres,
        UrbanWomen: row.UrbanoMujeres,
        Rural: row.Rural,
        RuralMen: row.RuralHombres,
        RuralWomen: row.RuralMujeres,
      },
      Details: {},
      Provinces: []
    };
    regionMap.set(row.RegionCodigo, region);
    census.Regions.push(region);
  }

  let province: CensusProvince;
  if (provinceMap.has(row.ProvinciaCodigo)) {
    province = provinceMap.get(row.ProvinciaCodigo) as CensusProvince;
    province.Results.Total += row.Total;
    province.Results.Men += row.Hombres;
    province.Results.Women += row.Mujeres;
    province.Results.Urban += row.Urbano;
    province.Results.UrbanMen += row.UrbanoHombres;
    province.Results.UrbanWomen += row.UrbanoMujeres;
    province.Results.Rural += row.Rural;
    province.Results.RuralMen += row.RuralHombres;
    province.Results.RuralWomen += row.RuralMujeres;
  } else {
    province = {
      Code: row.RegionCodigo,
      Name: row.RegionNombre,
      Results: {
        Total: row.Total,
        Men: row.Hombres,
        Women: row.Mujeres,
        Urban: row.Urbano,
        UrbanMen: row.UrbanoHombres,
        UrbanWomen: row.UrbanoMujeres,
        Rural: row.Rural,
        RuralMen: row.RuralHombres,
        RuralWomen: row.RuralMujeres,
      },
      Details: {},
      Communes: []
    };
    provinceMap.set(row.ProvinciaCodigo, province);
    region.Provinces.push(province);
  }

  let commune: CensusCommune;
  if (communeMap.has(row.ComunaCodigo)) {
    commune = communeMap.get(row.ComunaCodigo) as CensusCommune;
    commune.Results.Total += row.Total;
    commune.Results.Men += row.Hombres;
    commune.Results.Women += row.Mujeres;
    commune.Results.Urban += row.Urbano;
    commune.Results.UrbanMen += row.UrbanoHombres;
    commune.Results.UrbanWomen += row.UrbanoMujeres;
    commune.Results.Rural += row.Rural;
    commune.Results.RuralMen += row.RuralHombres;
    commune.Results.RuralWomen += row.RuralMujeres;
  } else {
    commune = {
      Code: row.RegionCodigo,
      Name: row.RegionNombre,
      Results: {
        Total: row.Total,
        Men: row.Hombres,
        Women: row.Mujeres,
        Urban: row.Urbano,
        UrbanMen: row.UrbanoHombres,
        UrbanWomen: row.UrbanoMujeres,
        Rural: row.Rural,
        RuralMen: row.RuralHombres,
        RuralWomen: row.RuralMujeres,
      },
      Details: {}
    };
    communeMap.set(row.ComunaCodigo, commune);
    province.Communes.push(commune);
  }

  if (census.Details[row.GrupoEdad]) {
    census.Details[row.GrupoEdad].Total += row.Total;
    census.Details[row.GrupoEdad].Men += row.Hombres;
    census.Details[row.GrupoEdad].Women += row.Mujeres;
    census.Details[row.GrupoEdad].Urban += row.Urbano;
    census.Details[row.GrupoEdad].UrbanMen += row.UrbanoHombres;
    census.Details[row.GrupoEdad].UrbanWomen += row.UrbanoMujeres;
    census.Details[row.GrupoEdad].Rural += row.Rural;
    census.Details[row.GrupoEdad].RuralMen += row.RuralHombres;
    census.Details[row.GrupoEdad].RuralWomen += row.RuralMujeres;
  } else {
    census.Details[row.GrupoEdad] = {
      Total: row.Total,
      Men: row.Hombres,
      Women: row.Mujeres,
      Urban: row.Urbano,
      UrbanMen: row.UrbanoHombres,
      UrbanWomen: row.UrbanoMujeres,
      Rural: row.Rural,
      RuralMen: row.RuralHombres,
      RuralWomen: row.RuralMujeres,
    }
  }

  if (region.Details[row.GrupoEdad]) {
    region.Details[row.GrupoEdad].Total += row.Total;
    region.Details[row.GrupoEdad].Men += row.Hombres;
    region.Details[row.GrupoEdad].Women += row.Mujeres;
    region.Details[row.GrupoEdad].Urban += row.Urbano;
    region.Details[row.GrupoEdad].UrbanMen += row.UrbanoHombres;
    region.Details[row.GrupoEdad].UrbanWomen += row.UrbanoMujeres;
    region.Details[row.GrupoEdad].Rural += row.Rural;
    region.Details[row.GrupoEdad].RuralMen += row.RuralHombres;
    region.Details[row.GrupoEdad].RuralWomen += row.RuralMujeres;
  } else {
    region.Details[row.GrupoEdad] = {
      Total: row.Total,
      Men: row.Hombres,
      Women: row.Mujeres,
      Urban: row.Urbano,
      UrbanMen: row.UrbanoHombres,
      UrbanWomen: row.UrbanoMujeres,
      Rural: row.Rural,
      RuralMen: row.RuralHombres,
      RuralWomen: row.RuralMujeres,
    }
  }

  if (province.Details[row.GrupoEdad]) {
    province.Details[row.GrupoEdad].Total += row.Total;
    province.Details[row.GrupoEdad].Men += row.Hombres;
    province.Details[row.GrupoEdad].Women += row.Mujeres;
    province.Details[row.GrupoEdad].Urban += row.Urbano;
    province.Details[row.GrupoEdad].UrbanMen += row.UrbanoHombres;
    province.Details[row.GrupoEdad].UrbanWomen += row.UrbanoMujeres;
    province.Details[row.GrupoEdad].Rural += row.Rural;
    province.Details[row.GrupoEdad].RuralMen += row.RuralHombres;
    province.Details[row.GrupoEdad].RuralWomen += row.RuralMujeres;
  } else {
    province.Details[row.GrupoEdad] = {
      Total: row.Total,
      Men: row.Hombres,
      Women: row.Mujeres,
      Urban: row.Urbano,
      UrbanMen: row.UrbanoHombres,
      UrbanWomen: row.UrbanoMujeres,
      Rural: row.Rural,
      RuralMen: row.RuralHombres,
      RuralWomen: row.RuralMujeres,
    }
  }

  if (commune.Details[row.GrupoEdad]) {
    commune.Details[row.GrupoEdad].Total += row.Total;
    commune.Details[row.GrupoEdad].Men += row.Hombres;
    commune.Details[row.GrupoEdad].Women += row.Mujeres;
    commune.Details[row.GrupoEdad].Urban += row.Urbano;
    commune.Details[row.GrupoEdad].UrbanMen += row.UrbanoHombres;
    commune.Details[row.GrupoEdad].UrbanWomen += row.UrbanoMujeres;
    commune.Details[row.GrupoEdad].Rural += row.Rural;
    commune.Details[row.GrupoEdad].RuralMen += row.RuralHombres;
    commune.Details[row.GrupoEdad].RuralWomen += row.RuralMujeres;
  } else {
    commune.Details[row.GrupoEdad] = {
      Total: row.Total,
      Men: row.Hombres,
      Women: row.Mujeres,
      Urban: row.Urbano,
      UrbanMen: row.UrbanoHombres,
      UrbanWomen: row.UrbanoMujeres,
      Rural: row.Rural,
      RuralMen: row.RuralHombres,
      RuralWomen: row.RuralMujeres,
    }
  }
}

writeFile("./data/census.json", JSON.stringify(census), function(err) {
  if (err) {
    console.log(err);
  }
});

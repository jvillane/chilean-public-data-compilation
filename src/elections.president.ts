import {readFile, utils} from "xlsx";
import {writeFile} from "fs";
import {CandidatesResult, Election, ElectionCommune, ElectionProvince, ElectionRegion} from "./elections.model";
import {findPublicFigureByAlias} from "./figura_publica.listado";

export interface Row {
  [index: string]: string | number
}

export interface ProcessedRow {
  TipoEleccion: string
  Cargo: string
  EleccionFecha: string
  EleccionAno: string
  PeriodoInicio: number
  PeriodoTermino: number
  Periodo: string
  TipoVotacion: string
  RegionId: number
  RegionNombre: string
  ProvinciaId: number
  ProvinciaNombre: string
  ComunaNombre: string
  CircunscripcionElectoral: string
  SexoMesa: string
  Candidato: string
  Nombres: string
  ApellidoPaterno: string
  ApellidoMaterno: string
  Sexo: string
  Electo: string
  Partido: string
  SiglaPartido: string
  Votos: number
}

export type Data = Row[];

const workbook = readFile('./source/servel/resultados_elecciones_presidenciales_ce_1989_2017_Chile.xlsx');
const data: Data = utils.sheet_to_json(workbook.Sheets['Presidenciales Chile']);

function xlsNumberToDateFormat(xlsNumber: number) {
  const date = new Date(Math.round((xlsNumber - 25569) * 86400 * 1000));
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function processRow(row: Row): ProcessedRow | undefined {
  const keys = Object.keys(row);
  //Titulo o primera fila o total país o total comuna
  if (row[keys[1]] === 'Cargo')
    return undefined;

  let candidato = row['Candidato (a)'] as string;
  if (candidato.includes('VOTOS EN BLANCO')) {
    candidato = 'Blank';
  } else if (candidato.includes('VOTOS NULOS')) {
    candidato = 'Null';
  }

  return {
    TipoEleccion: row['Tipo de Elección'] as string,
    Cargo: row['Cargo'] as string,
    EleccionFecha: xlsNumberToDateFormat(row['Fecha de Elección'] as number),
    EleccionAno: row['Año de Elección'] as string,
    PeriodoInicio: row['Inicio de Período'] as number,
    PeriodoTermino: row['Fin de Período'] as number,
    Periodo: row['Período'] as string,
    TipoVotacion: row['Votación Presidencial'] as string,
    RegionId: row['Id Región'] as number,
    RegionNombre: row['Región'] as string,
    ProvinciaId: row['Provincia'] as number,
    ProvinciaNombre: row['Nombre Provincia'] as string,
    ComunaNombre: row['Comuna'] as string,
    CircunscripcionElectoral: row['Circunscripción Electoral'] as string,
    SexoMesa: row['Sexo Mesa'] as string,
    Candidato: candidato,
    Nombres: row['Nombres'] as string,
    ApellidoPaterno: row['Apellido Paterno'] as string,
    ApellidoMaterno: row['Apellido Materno'] as string,
    Sexo: row['Sexo'] as string,
    Electo: row['Electo(a)'] as string,
    Partido: row['Partido'] as string,
    SiglaPartido: row['Sigla Partido'] as string,
    Votos: row['Votos Totales'] as number
  }
}

function updateCandidates(row: ProcessedRow, candidatesResult: CandidatesResult) {
  if(row.Candidato === 'Blank' || row.Candidato === 'Null' ) {
    candidatesResult[row.Candidato] += row.Votos;
    return;
  }
  const publicFigure = findPublicFigureByAlias(row.Candidato);
  if (publicFigure === undefined) {
    throw new Error(`No se encontró figura pública para el alias '${row.Candidato}'`);
  }
  if (candidatesResult.Candidates[publicFigure.Id]) {
    const candidate = candidatesResult.Candidates[publicFigure.Id];
    candidate.Votes += row.Votos;
    if (!candidate.Alias.includes(row.Candidato)) {
      candidate.Alias.push(row.Candidato);
    }
  } else {
    candidatesResult.Candidates[publicFigure.Id] = {
      Name: publicFigure.Nombre,
      Alias: [row.Candidato],
      Votes: row.Votos
    };
  }
}

function main() {
  //const candidateArray: string[] = [];
  const electionMap = new Map<string, Election>();
  const regionMap = new Map<string, ElectionRegion>();
  const provinceMap = new Map<string, ElectionProvince>();
  const communeMap = new Map<string, ElectionCommune>();
  for (const rawRow of data) {
    const row = processRow(rawRow);
    if (row === undefined) {
      continue;
    }
    //if (row.Candidato && !['Blank', 'Null'].includes(row.Candidato) && !candidateArray.includes(row.Candidato)) {
    //  candidateArray.push(row.Candidato);
    //}

    const electionId = `${row.TipoEleccion}_${row.EleccionFecha}`;
    let election: Election;
    if (electionMap.has(electionId)) {
      election = electionMap.get(electionId) as Election;
    } else {
      election = {
        Position: row.Cargo,
        Date: row.EleccionFecha,
        Period: {
          FromYear: row.PeriodoInicio,
          ToYear: row.PeriodoTermino,
        },
        Instance: row.TipoVotacion,
        Results: {
          Blank: 0,
          Null: 0,
          Candidates: {}
        },
        Regions: []
      };
      electionMap.set(electionId, election);
    }
    updateCandidates(row, election.Results);

    const regionId = `${electionId}_${row.RegionId}`;
    let region: ElectionRegion;
    if (regionMap.has(regionId)) {
      region = regionMap.get(regionId) as ElectionRegion;
    } else {
      region = {
        Code: row.RegionId,
        Name: row.RegionNombre,
        Results: {
          Blank: 0,
          Null: 0,
          Candidates: {}
        },
        Provinces: []
      };
      regionMap.set(regionId, region);
      election.Regions.push(region);
    }
    updateCandidates(row, region.Results);

    const provinceId = `${regionId}_${row.ProvinciaId}`;
    let province: ElectionProvince;
    if (provinceMap.has(provinceId)) {
      province = provinceMap.get(provinceId) as ElectionProvince;
    } else {
      province = {
        Code: row.ProvinciaId,
        Name: row.ProvinciaNombre,
        Results: {
          Blank: 0,
          Null: 0,
          Candidates: {}
        },
        Communes: []
      };
      provinceMap.set(provinceId, province);
      region.Provinces.push(province);
    }
    updateCandidates(row, province.Results);

    const communeId = `${provinceId}_${row.ComunaNombre}`;
    let commune: ElectionCommune;
    if (communeMap.has(communeId)) {
      commune = communeMap.get(communeId) as ElectionCommune;
    } else {
      commune = {
        Code: null,
        Name: row.ComunaNombre,
        Results: {
          Blank: 0,
          Null: 0,
          Candidates: {}
        }
      };
      communeMap.set(communeId, commune);
      province.Communes.push(commune);
    }
    updateCandidates(row, commune.Results);
  }

  writeFile("./data/elections.president.json", JSON.stringify(Array.from(electionMap.values())), function (err) {
    if (err) {
      console.log(err);
    }
  });

  //console.log(candidateArray);
}

main();

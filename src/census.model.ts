export interface Results {
  Total: number
  Men: number
  Women: number
  Urban: number
  UrbanMen: number
  UrbanWomen: number
  Rural: number
  RuralMen: number
  RuralWomen: number
}

export interface RangeResult {
  [range: string]: Results
}

export interface CensusCommune {
  Code: number
  Name: string
  Results: Results
  Details: RangeResult
}

export interface CensusProvince {
  Code: number
  Name: string
  Results: Results
  Details: RangeResult
  Communes: CensusCommune[]
}

export interface CensusRegion {
  Code: number
  Name: string
  Results: Results
  Details: RangeResult
  Provinces: CensusProvince[]
}

export interface Census {
  Results: Results
  Details: RangeResult
  Regions: CensusRegion[]
}

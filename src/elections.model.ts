export interface CandidatesResult {
  blank: number
  null: number
  [candidate: string]: number
}

export interface ElectionCommune {
  Code: number
  Name: string
  Results: CandidatesResult
}

export interface ElectionProvince {
  Code: number
  Name: string
  Results: CandidatesResult
  Communes: ElectionCommune[]
}

export interface ElectionRegion {
  Code: number
  Name: string
  Results: CandidatesResult
  Provinces: ElectionProvince[]
}

export interface Election {
  Position: string
  Date: string
  Period: {
    FromYear: number
    ToYear: number
  }
  Instance: string
  Results: CandidatesResult
  Regions: ElectionRegion[]
}

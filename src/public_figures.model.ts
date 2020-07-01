export interface PublicFigureReference {
  Id: string
  Name: string
}

export interface PartnerReference {
  Id: string
  Name: string
  From?: string
  To?: string
}

export interface PublicFigure {
  Id: string
  Name: string
  Alias?: string
  Birthday: string
  Death?: string
  Family?: {
    Wife?: PartnerReference[]
    Husband?: PartnerReference[]
    Children?: PublicFigureReference[]
  }
  Biography?: {
    [source: string]: string
  }
  DeputyId?: number
}

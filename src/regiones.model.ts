export interface Comuna {
  Id: number
  Nombre: string
}

export interface Comunas {
  [Id: string]: Comuna
}

export interface Provincia {
  Id: number
  Nombre: string
  Comunas: Comunas
}

export interface Provincias {
  [Id: string]: Provincia
}

export interface Region {
  Id: number
  Romano: string
  Nombre: string
  Provincias: Provincias
}

export interface Regiones {
  [Id: string]: Region
}

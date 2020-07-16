export interface Comuna {
  Id: number
  Nombre: string
}

export interface Comunas {
  [Id: string]: Comuna
}

export interface Distrito {
  Id: number
  Comunas: Comunas
}

export interface Distritos {
  [Id: string]: Distrito
}

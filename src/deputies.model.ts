export interface Affiliation {
  Inicio: string
  Termino: string
  Id: string
  Nombre: string
  Alias: string
}

export interface Deputy {
  Id: string
  Nombres: string
  ApellidoPaterno: string
  ApellidoMaterno: string
  Nacimiento?: string
  Genero: string
  Militancia: Affiliation[]
}

export interface DeputySession {
  Id: number
  Numero: number
  Inicio: string
  Termino: string
  Tipo: {
    Id: number
    Nombre: string
  }
  Estado: {
    Id: number
    Nombre: string
  }
}

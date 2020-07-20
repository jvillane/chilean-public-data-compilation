export type Posicion = 'Extrema Izquierda' | 'Izquierda' | 'Centro izquierda' | 'Centro' | 'Centro derecha' | 'Derecha' | 'Extrema Derecha'

export interface Partido {
  Sigla: string
  Nombre: string
  FechaConstitucion?: string
  FechaDisolucion?: string
  Posicion?: Posicion
  Alias: string[]
  Logo?: string
}

export interface Partidos {
  [id: string]: Partido
}

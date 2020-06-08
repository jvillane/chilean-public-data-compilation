import {PublicFigureReference} from "./public_figures.model";

export interface Authority {
  Figure: PublicFigureReference
  From: string
  To?: string
}

export interface Ministry {
  Ministry: Authority[]
}

export interface Government {
  From: string
  To?: string
  President: Authority[]
  Ministries: {
    Interior?: Ministry
    "Relaciones Exteriores"?: Ministry
    Defensa?: Ministry
    Hacienda?: Ministry
    "Sec. Gral. de la Presidencia"?: Ministry
    "Sec. Gral. de Gobierno"?: Ministry
    "Desarrollo Social"?: Ministry
    "Educación"?: Ministry
    "Trabajo y Previsión Social"?: Ministry
    "Obras Públicas"?: Ministry
    Salud?: Ministry
    "Vivienda y Urbanismo"?: Ministry
    Agricultura?: Ministry
    "Transporte y Telecomunicaciones"?: Ministry
    "Bienes Nacionales"?: Ministry
    "Energía"?: Ministry
    "Minería"?: Ministry
    "Servicio Nacional de la Mujer"?: Ministry
    "Consejo Nacional de la Cultura y las Artes"?: Ministry
    "Medio Ambiente"?: Ministry
    Deporte?: Ministry
  }
}

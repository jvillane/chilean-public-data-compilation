import {writeFile} from "fs";
import {
  Comparado,
  Indicacion,
  Informe,
  Oficio,
  ProyectoLey,
  ProyectosLey,
  Tramite,
  Urgencia,
  Votacion
} from "./senadores.model";
import axios from "axios";
import {parseStringPromise} from "xml2js";
import moment from "moment";
import {findPublicFigureIdByAlias} from "./figura_publica.listado";

interface DescriptionRaw {
  boletin: string[]
  titulo: string[]
  fecha_ingreso: string[]
  iniciativa: string[]
  camara_origen: string[]
  urgencia_actual: string[]
  etapa: string[]
  subetapa: string[]
  leynro: string[]
  diariooficial: string[]
  estado: string[]
  refundidos: string[]
  link_mensaje_mocion: string[]
}

interface AuthorRaw {
  PARLAMENTARIO: string[]
}

interface Transacts {
  SESION: string[]
  FECHA: string[]
  DESCRIPCIONTRAMITE: string[]
  ETAPDESCRIPCION: string[]
  CAMARATRAMITE: string[]
}

interface Vote {
  PARLAMENTARIO: string[]
  SELECCION: string[]
}

interface Votings {
  SESION: string[]
  FECHA: string[]
  TEMA: string[]
  SI: string[]
  NO: string[]
  ABSTENCION: string[]
  PAREO: string[]
  QUORUM: string[]
  TIPOVOTACION: string[]
  ETAPA: string[]
  DETALLE_VOTACION: { VOTO: Vote[] }[]
}

interface Urgencies {
  TIPO: string[]
  FECHAINGRESO: string[]
  MENSAJEINGRESO: string[]
  CAMARAINGRESO: string[]
  FECHARETIRO?: string[]
  MENSAJERETIRO?: string[]
  CAMARARETIRO?: string[]
}

interface Reports {
  FECHAINFROME: string[]
  TRAMITE: string[]
  ETAPA: string[]
  LINK_INFORME: string[]
}

interface Compareds {
  COMPARADO: string[]
  LINK_COMPARADO: string[]
}

interface Documents {
  NUMERO: string[]
  FECHA: string[]
  TRAMITE: string[]
  ETAPA: string[]
  TIPO: string[]
  CAMARA: string[]
  DESCRIPCION: string[]
  LINK_OFICIO: string[]
}

interface Indications {
  FECHA: string[]
  TRAMITE: string[]
  ETAPA: string[]
  LINK_INDICACION: string[]
}

interface Observations {
//TODO seguir buscando que aparezca un caso con observaciones
}

interface Matters {
  DESCRIPCION: string[]
}

interface SenatorsProjectRaw {
  descripcion: DescriptionRaw[]
  autores: { autor: AuthorRaw[] }[]
  tramitacion: { tramite: Transacts[] }[]
  votaciones: { votacion: Votings[] } []
  urgencias: { urgencia: Urgencies[] }[]
  informes: { informe: Reports[] }[]
  comparados: { comparado: Compareds[] }[]
  oficios: { oficio: Documents[] }[]
  indicaciones: { indicacion: Indications[] }[]
  observaciones: { observacion: Observations[] }[]
  materias: { materia: Matters[] }[]
}

async function main() {

  const lawProjects: ProyectosLey = {};
  const date = moment().subtract(30, "days");

  try {
    const response1 = await axios.get(`https://www.senado.cl/wspublico/tramitacion.php?fecha=${date.format("DD")}%2F${date.format("MM")}%2F${date.format("YYYY")}`);
    const collection1 = await parseStringPromise(response1.data);
    const votingsRaw: SenatorsProjectRaw[] = collection1['proyectos']['proyecto'];

    for (const votingRaw of votingsRaw) {
      const desc = votingRaw.descripcion[0];
      const aux = desc.fecha_ingreso[0].split("/");
      const FechaIngreso = `${aux[2]}-${aux[1]}-${aux[0]}`;
      const lawProject: ProyectoLey = {
        BoletinNumero: desc.boletin[0],
        Titulo: desc.titulo[0],
        FechaIngreso,
        Iniciativa: desc.iniciativa[0],
        CamaraOrigen: desc.camara_origen[0],
        UrgenciaActual: desc.urgencia_actual[0],
        Etapa: desc.etapa[0],
        SubEtapa: desc.subetapa[0],
        LeyNumero: desc.leynro[0],
        DiarioOficial: desc.diariooficial[0],
        Estado: desc.estado[0],
        Refundidos: desc.refundidos[0],
        LinkMensajeMocion: desc.link_mensaje_mocion[0],
        Autores: [],
        Tramitacion: [],
        Votaciones: [],
        Urgencias: [],
        Informes: [],
        Comparados: [],
        Oficios: [],
        Indicaciones: [],
        Observaciones: [],
        Materias: []
      }
      if (lawProject.BoletinNumero === '8034-15xxx') {
        //console.log('votingRaw', votingRaw);
        console.log('autores', votingRaw.autores[0].autor);
        console.log('tramitacion', votingRaw.tramitacion[0].tramite);
        console.log('votaciones', votingRaw.votaciones[0].votacion);
        console.log('urgencias', votingRaw.urgencias[0].urgencia);
        console.log('informes', votingRaw.informes[0].informe);
        console.log('comparados', votingRaw.comparados[0].comparado);
        console.log('oficios', votingRaw.oficios[0].oficio);
        console.log('indicaciones', votingRaw.indicaciones[0].indicacion);
        console.log('observaciones', votingRaw.observaciones[0].observacion);
        console.log('materias', votingRaw.materias[0].materia);
      }
      if (votingRaw.autores[0] && votingRaw.autores[0].autor) {
        for (const authorRaw of votingRaw.autores[0].autor) {
          lawProject.Autores.push(authorRaw.PARLAMENTARIO[0])
          //TODO completar autores
        }
      }
      if (votingRaw.tramitacion[0] && votingRaw.tramitacion[0].tramite) {
        for (const tramiteRaw of votingRaw.tramitacion[0].tramite) {
          const aux2 = tramiteRaw.FECHA[0].split("/");
          const Fecha = `${aux2[2]}-${aux2[1]}-${aux2[0]}`;
          const tramite: Tramite = {
            Sesion: tramiteRaw.SESION[0].length > 1 ? tramiteRaw.SESION[0] : undefined,
            Fecha,
            Descripcion: tramiteRaw.DESCRIPCIONTRAMITE ? tramiteRaw.DESCRIPCIONTRAMITE[0] : undefined,
            Etapa: tramiteRaw.ETAPDESCRIPCION[0],
            Camara: tramiteRaw.CAMARATRAMITE[0],
          }
          lawProject.Tramitacion.push(tramite)
        }
      }
      if (votingRaw.votaciones[0] && votingRaw.votaciones[0].votacion) {
        for (const votRaw of votingRaw.votaciones[0].votacion) {
          const aux2 = votRaw.FECHA[0].split("/");
          const Fecha = `${aux2[2]}-${aux2[1]}-${aux2[0]}`;
          const votacion: Votacion = {
            Sesion: votRaw.SESION[0],
            Fecha,
            Tema: votRaw.TEMA[0],
            Resultado: {
              Si: +votRaw.SI[0],
              No: +votRaw.NO[0],
              Abstencion: +votRaw.ABSTENCION[0],
              Pareo: +votRaw.PAREO[0],
            },
            Tipo: votRaw.TIPOVOTACION ? votRaw.TIPOVOTACION[0] : undefined,
            Etapa: votRaw.ETAPA ? votRaw.ETAPA[0] : undefined,
            Detalle: {},
          }
          for (const vote of votRaw.DETALLE_VOTACION[0].VOTO) {
            const publicFigureId = findPublicFigureIdByAlias(vote.PARLAMENTARIO[0]);
            if(publicFigureId === undefined) {
              console.error("No se encontró un alias para el nombre", vote.PARLAMENTARIO[0]);
            } else {
              votacion.Detalle[publicFigureId] = vote.SELECCION[0];
            }
          }
          lawProject.Votaciones.push(votacion);
        }
      }
      if (votingRaw.urgencias[0] && votingRaw.urgencias[0].urgencia) {
        for (const urgencyRaw of votingRaw.urgencias[0].urgencia) {
          const aux2 = urgencyRaw.FECHAINGRESO[0].split("/");
          const FechaIngreso = `${aux2[2]}-${aux2[1]}-${aux2[0]}`;
          const aux3 = urgencyRaw.FECHARETIRO ? urgencyRaw.FECHARETIRO[0].split("/") : undefined;
          const FechaRetiro = aux3 ? `${aux2[2]}-${aux2[1]}-${aux2[0]}` : "";
          const urgencia: Urgencia = {
            Tipo: urgencyRaw.TIPO[0],
            Ingreso: {
              Fecha: FechaIngreso,
              Mensaje: urgencyRaw.MENSAJEINGRESO ? urgencyRaw.MENSAJEINGRESO[0] : undefined,
              Camara: urgencyRaw.CAMARAINGRESO ? urgencyRaw.CAMARAINGRESO[0] : undefined
            }
          }
          if (urgencyRaw.FECHARETIRO || urgencyRaw.MENSAJERETIRO) {
            urgencia.Retiro = {
              Fecha: FechaRetiro,
              Mensaje: urgencyRaw.MENSAJERETIRO ? urgencyRaw.MENSAJERETIRO[0] : undefined,
              Camara: urgencyRaw.CAMARARETIRO ? urgencyRaw.CAMARARETIRO[0] : undefined
            }
          }
          lawProject.Urgencias.push(urgencia);
        }
      }
      if (votingRaw.informes[0] && votingRaw.informes[0].informe) {
        for (const reportRaw of votingRaw.informes[0].informe) {
          const aux2 = reportRaw.FECHAINFROME ? reportRaw.FECHAINFROME[0].split("/") : undefined;
          const Fecha = aux2 ? `${aux2[2]}-${aux2[1]}-${aux2[0]}` : undefined;
          const informe: Informe = {
            Fecha,
            Tramite: reportRaw.TRAMITE[0],
            Etapa: reportRaw.ETAPA[0],
            Link: reportRaw.LINK_INFORME ? reportRaw.LINK_INFORME[0] : undefined
          }
          lawProject.Informes.push(informe);
        }
      }
      if (votingRaw.comparados[0] && votingRaw.comparados[0].comparado) {
        for (const comparedRaw of votingRaw.comparados[0].comparado) {
          const comparado: Comparado = {
            Valor: comparedRaw.COMPARADO[0],
            Link: comparedRaw.LINK_COMPARADO[0]
          }
          lawProject.Comparados.push(comparado);
        }
      }
      if (votingRaw.oficios && votingRaw.oficios[0] && votingRaw.oficios[0].oficio) {
        for (const docRaw of votingRaw.oficios[0].oficio) {
          const aux2 = docRaw.FECHA[0].split("/");
          const Fecha = `${aux2[2]}-${aux2[1]}-${aux2[0]}`;
          const oficio: Oficio = {
            Fecha,
            Tramite: docRaw.TRAMITE[0],
            Etapa: docRaw.ETAPA[0],
            Tipo: docRaw.TIPO[0],
            Camara: docRaw.CAMARA[0],
            Link: docRaw.LINK_OFICIO ? docRaw.LINK_OFICIO[0] : undefined
          }
          lawProject.Oficios.push(oficio);
        }
      }
      if (votingRaw.indicaciones[0] && votingRaw.indicaciones[0].indicacion) {
        for (const indRaw of votingRaw.indicaciones[0].indicacion) {
          const aux2 = indRaw.FECHA[0].split("/");
          const Fecha = `${aux2[2]}-${aux2[1]}-${aux2[0]}`;
          const indicacion: Indicacion = {
            Fecha,
            Tramite: indRaw.TRAMITE[0],
            Etapa: indRaw.ETAPA[0],
            Link: indRaw.LINK_INDICACION[0]
          }
          lawProject.Indicaciones.push(indicacion);
        }
      }
      if (votingRaw.observaciones[0] && votingRaw.observaciones[0].observacion) {
        for (const obsRaw of votingRaw.observaciones[0].observacion) {
          console.log('Apareció una observación, hay que analizarla', obsRaw);
        }
      }
      if (votingRaw.materias[0] && votingRaw.materias[0].materia) {
        for (const matterRaw of votingRaw.materias[0].materia) {
          lawProject.Materias.push(matterRaw.DESCRIPCION[0]);
        }
      }
      if(lawProject.BoletinNumero === undefined || lawProject.BoletinNumero.length < 2){
        console.error("Error en información de boletín", lawProject)
      }
      lawProjects[lawProject.BoletinNumero] = lawProject;
    }
  } catch (e) {
    console.error(e);
    return;
  }

  writeFile(`./data/senadores.proyectos_ley.json`, JSON.stringify(lawProjects), function (err) {
    if (err) {
      console.error(err);
    }
  });
}

main();

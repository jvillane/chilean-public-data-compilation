import {parseStringPromise} from "xml2js";
import axios from "axios";
import {IdValor, ProyectoLey, ProyectoLeyAutor, ProyectosLey, Votacion, Votaciones} from "./diputados.model";
import {writeFile} from "fs";
import * as lawProjectsNow from "../data/diputados.proyectos_ley.json";

interface TypeRawContent {
  $: {
    Valor: string
  }
  _: string
}

type TypeRaw = TypeRawContent[];

interface DeputiesVotesRaw {
  Id: string[]
  Descripcion: string[]
  Fecha: string[]
  TotalSi: string[]
  TotalNo: string[]
  TotalAbstencion: string[]
  TotalDispensado: string[]
  Quorum: TypeRaw
  Resultado: TypeRaw
  Tipo: TypeRaw
}

interface VoteRaw {
  Diputado: {
    Id: string[]
    Nombre: string[]
    ApellidoPaterno: string[]
    ApellidoMaterno: string[]
  }[]
  OpcionVoto: TypeRaw
}

interface LawProjectAuthorDeputyRaw {
  Id: string[]
  Nombre: string[]
  ApellidoPaterno: string[]
  ApellidoMaterno: string[]
}

interface LawProjectAuthorRaw {
  Orden: string[]
  Diputado: LawProjectAuthorDeputyRaw[]
}

interface LawProjectVotingRaw {
  Id: string[]
  Descripcion: string[]
  Fecha: string[]
  TotalSi: string[]
  TotalNo: string[]
  TotalAbstencion: string[]
  TotalDispensado: string[]
  Quorum: TypeRaw
  Resultado: TypeRaw
  Tipo: TypeRaw
  TipoVotacionProyectoLey: TypeRaw
  Articulo: string[]
  TramiteConstitucional: TypeRaw
  TramiteReglamentario: TypeRaw
}

interface LawProjectRaw {
  Id: string[]
  NumeroBoletin: string[]
  Nombre: string[]
  FechaIngreso: string[]
  TipoIniciativa: TypeRaw
  CamaraOrigen: TypeRaw
  Autores: { ParlamentarioAutor: LawProjectAuthorRaw[] }[]
  Votaciones: { VotacionProyectoLey: LawProjectVotingRaw[] }[]
  Materias: {
    Materia: {
      Id: string[]
      Nombre: string[]
    } []
  }[]
  Admisible: boolean[]
}

async function main() {
  const lawProjects: ProyectosLey = (lawProjectsNow as unknown as { default: ProyectosLey }).default;
  const from = 2020, to = 2020;
  const years = Array.from({length: (to - from + 1)}, (v, k) => k + from)

  for (const year of years) {
    console.log('start', year);
    const deputiesVotings: Votaciones = {
      Diputados: {},
      Votaciones: {}
    };

    try {
      const response1 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSLegislativo.asmx/retornarVotacionesXAnno?prmAnno=${year}`);
      const collection1 = await parseStringPromise(response1.data);
      const votingsRaw: DeputiesVotesRaw[] = collection1['VotacionesColeccion']['Votacion'] ? collection1['VotacionesColeccion']['Votacion'] : [];
      if (votingsRaw.length === 0) {
        continue;
      }
      for (const voteRaw of votingsRaw) {
        const votingId = voteRaw.Id[0];
        const deputyVoting: Votacion = {
          Descripcion: voteRaw.Descripcion[0],
          Fecha: voteRaw.Fecha[0],
          Total: {
            Si: +voteRaw.TotalSi[0],
            No: +voteRaw.TotalNo[0],
            Abstencion: +voteRaw.TotalAbstencion[0],
            Dispensado: +voteRaw.TotalDispensado[0]
          },
          Quorum: {
            Id: voteRaw.Quorum[0].$.Valor,
            Valor: voteRaw.Quorum[0]._,
          },
          Resultado: voteRaw.Resultado ? {
            Id: voteRaw.Resultado[0].$.Valor,
            Valor: voteRaw.Resultado[0]._
          } : undefined,
          Tipo: {
            Id: voteRaw.Tipo[0].$.Valor,
            Valor: voteRaw.Tipo[0]._
          },
          Votos: {}
        };

        const result = /^Boletín N° (\d+-\d+)$/.exec(deputyVoting.Descripcion);
        if (result) {
          deputyVoting.BoletinNumero = result[1];
          if (!lawProjects[deputyVoting.BoletinNumero] || !lawProjects[deputyVoting.BoletinNumero].Votaciones[votingId]) {
            console.log(deputyVoting.Descripcion);
            const response2 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSLegislativo.asmx/retornarProyectoLey?prmNumeroBoletin=${deputyVoting.BoletinNumero}`);
            const collection2 = await parseStringPromise(response2.data);
            const lawProjectRaw: LawProjectRaw = collection2['ProyectoLey'];

            const lawProject: ProyectoLey = {
              Id: lawProjectRaw.Id[0],
              NumeroBoletin: lawProjectRaw.NumeroBoletin[0],
              Nombre: lawProjectRaw.Nombre[0],
              FechaIngreso: lawProjectRaw.FechaIngreso[0],
              TipoIniciativa: {
                Id: lawProjectRaw.TipoIniciativa[0].$.Valor,
                Valor: lawProjectRaw.TipoIniciativa[0]._
              },
              CamaraOrigen: {
                Id: lawProjectRaw.CamaraOrigen[0].$.Valor,
                Valor: lawProjectRaw.CamaraOrigen[0]._
              },
              Autores: [],
              Votaciones: {},
              Materias: [],
              Admisible: lawProjectRaw.Admisible[0],
            };
            if (lawProjectRaw.Autores) {
              for (const authorRaw of lawProjectRaw.Autores[0].ParlamentarioAutor) {
                if (authorRaw.Diputado) {
                  const author: ProyectoLeyAutor = {
                    Orden: authorRaw.Orden[0],
                    Diputado: {
                      Id: authorRaw.Diputado[0].Id[0],
                      Nombre: authorRaw.Diputado[0].Nombre[0],
                      ApellidoPaterno: authorRaw.Diputado[0].ApellidoPaterno[0],
                      ApellidoMaterno: authorRaw.Diputado[0].ApellidoMaterno[0]
                    },
                  };
                  lawProject.Autores.push(author);
                }
              }
            }
            for (const votingRaw of lawProjectRaw.Votaciones[0].VotacionProyectoLey) {
              lawProject.Votaciones[votingRaw.Id[0]] = {
                Descripcion: votingRaw.Descripcion[0],
                Fecha: votingRaw.Fecha[0],
                TotalSi: votingRaw.TotalSi[0],
                TotalNo: votingRaw.TotalNo[0],
                TotalAbstencion: votingRaw.TotalAbstencion[0],
                TotalDispensado: votingRaw.TotalAbstencion[0],
                Quorum: {
                  Id: votingRaw.Quorum[0].$.Valor,
                  Valor: votingRaw.Quorum[0]._
                },
                Resultado: {
                  Id: votingRaw.Resultado[0].$.Valor,
                  Valor: votingRaw.Resultado[0]._
                },
                Tipo: {
                  Id: votingRaw.Tipo[0].$.Valor,
                  Valor: votingRaw.Tipo[0]._
                },
                TipoVotacion: {
                  Id: votingRaw.TipoVotacionProyectoLey[0].$.Valor,
                  Valor: votingRaw.TipoVotacionProyectoLey[0]._
                },
                Articulo: votingRaw.Articulo[0],
                TramiteConstitucional: {
                  Id: votingRaw.TramiteConstitucional[0].$.Valor,
                  Valor: votingRaw.TramiteConstitucional[0]._
                },
                TramiteReglamentario: {
                  Id: votingRaw.TramiteReglamentario[0].$.Valor,
                  Valor: votingRaw.TramiteReglamentario[0]._
                },
              }
            }
            if (lawProjectRaw.Materias[0].Materia) {
              for (const matterRaw of lawProjectRaw.Materias[0].Materia) {
                const matter: IdValor = {
                  Id: matterRaw.Id[0],
                  Valor: matterRaw.Nombre[0],
                };
                lawProject.Materias.push(matter);
              }
            }
            lawProjects[lawProject.NumeroBoletin] = lawProject;
          }

          if (lawProjects[deputyVoting.BoletinNumero]) {
            deputyVoting.ProyectoLeyId = lawProjects[deputyVoting.BoletinNumero].Id;
            deputyVoting.ProyectoLeyNombre = lawProjects[deputyVoting.BoletinNumero].Nombre;
            if (lawProjects[deputyVoting.BoletinNumero].Votaciones[votingId]) {
              deputyVoting.Articulo = lawProjects[deputyVoting.BoletinNumero].Votaciones[votingId].Articulo;
            }
          }
        }

        const response3 = await axios.get(`http://opendata.camara.cl/camaradiputados/WServices/WSLegislativo.asmx/retornarVotacionDetalle?prmVotacionId=${votingId}`);
        const collection3 = await parseStringPromise(response3.data);
        const votingRaw: VoteRaw[] = collection3['Votacion']['Votos'] && collection3['Votacion']['Votos'][0]['Voto'] ? collection3['Votacion']['Votos'][0]['Voto'] : [];

        for (const voteRaw of votingRaw) {
          const deputyId = voteRaw.Diputado[0].Id[0];
          if (deputiesVotings.Diputados[deputyId] === undefined) {
            const name = `${voteRaw.Diputado[0].Nombre[0]} ${voteRaw.Diputado[0].ApellidoPaterno[0]} ${voteRaw.Diputado[0].ApellidoMaterno[0]}`.trim();
            deputiesVotings.Diputados[deputyId] = name;
          }
          deputyVoting.Votos[deputyId] = {
            Id: voteRaw.OpcionVoto[0].$.Valor,
            Valor: voteRaw.OpcionVoto[0]._
          };
        }
        deputiesVotings.Votaciones[votingId] = deputyVoting;
      }
    } catch (e) {
      console.error(e);
      break;
    }

    writeFile(`./data/diputados.proyectos_ley.json`, JSON.stringify(lawProjects), function (err) {
      if (err) {
        console.error(err);
      }
    });

    writeFile(`./data/diputados.votacion.${year}.json`, JSON.stringify(deputiesVotings), function (err) {
      if (err) {
        console.error(err);
      }
    });
    console.log('end', year);
  }
}

main();

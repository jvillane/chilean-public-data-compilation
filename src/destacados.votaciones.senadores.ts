import {writeFile} from "fs";
import {VotacionSenadoresDestacada} from "./destacados.model";

export const destacadosVotacionesSenadores: VotacionSenadoresDestacada[] = [
  { Boletin: '12894-07', Fecha: '2019-09-04', Resumen: 'Proyecto de ley que establece el ocultamiento de la identidad como tipo penal, circunstancia agravante y caso de flagrancia.' },
  { Boletin: '13501-07', Fecha: '2020-07-22', Resumen: 'Votación histórica en el Senado por el retiro de un 10% de los fondos de la AFP para que las familias chilenas puedan sortear el período de cuarentena establecido por la pandemia del COVID-19.' },
  { Boletin: '13564-05', Fecha: '2020-07-21', Resumen: 'La iniciativa apunta a flexibilizar la regulación de los inversionistas (en particular AFPs) para hacer más expeditos los procesos de emisión de títulos de deuda en el mercado de valores. En particular 2 de las medidas apuntan a bajar la exigencia en la compra de bonos y en el aumento de la capacidad de inversión de las AFP (de un 15% a un 20%).' },
  { Boletin: '9692-07', Fecha: '2014-11-04', Resumen: 'Determina conductas terroristas y su penalidad y modifica los Códigos Penal y Procesal Penal.' },
  { Boletin: '9470-07', Fecha: '2014-07-23', Resumen: 'Modifica ley N° 20.000, con el objeto de despenalizar el auto cultivo, cosecha, porte o consumo, regulados a escala individual, de plantas vegetales del genero cannabis, cuando esas conductas se funden en razones de índole personal, terapéutica o espiritual.' },
  { Boletin: '12148-11', Fecha: '2018-10-02', Resumen: 'Establece derechos en el ámbito de la gestación, preparto, parto, postparto, aborto, salud ginecólogica y sexual, y sanciona la violencia gineco-obstétrica' },
  { Boletin: '9895-11', Fecha: '2015-01-31', Resumen: 'Regula la despenalización de la interrupción voluntaria del embarazo en tres causales.' },
  { Boletin: '9418-11', Fecha: '2014-06-30', Resumen: 'Modifica Código Sanitario, en materia de aborto por indicaciones terapéuticas, eugenésicas o de índole ética social.' },
  { Boletin: '10038-08', Fecha: '2015-05-06', Resumen: 'Modifica el Código de Minería en materia de uso de agua en faenas mineras.' },
  { Boletin: '10278-07', Fecha: '2015-09-01', Resumen: 'Modifica la ley N° 18.314, que determina conductas terroristas y fija su penalidad, para sancionar con las inhabilidades a que se refiere el artículo 9 de la Constitución Política de la República a quienes soliciten o provean fondos para utilizarlos en la comisión de delitos terroristas' },
  { Boletin: '10748-07', Fecha: '2016-06-15', Resumen: 'Modifica el Código Penal con el objeto de introducir el concepto de violencia y odio de género en la tipificación del delito de femicidio, y el Código Procesal Penal para conceder acción penal pública en estos casos.' },
  { Boletin: '10733-25', Fecha: '2016-06-02', Resumen: 'Modifica el Código Penal para sancionar el ocultamiento del rostro en los desórdenes públicos' },
  { Boletin: '10717-25', Fecha: '2016-05-31', Resumen: 'Modifica el Código Penal y el Código Procesal Penal para sancionar como falta el ocultamiento del rostro con ocasión de alteraciones al orden público, y permitir la detención en caso de flagrancia' },
  { Boletin: '11535-09', Fecha: '2017-12-06', Resumen: 'Modifica la Ley General de Servicios Sanitarios para consagrar como un derecho humano el acceso al agua y regular la suspensión de su suministro.' },
  { Boletin: '12038-34', Fecha: '2018-08-21', Resumen: 'Modifica el Código Penal, para despenalizar el aborto consentido por la mujer dentro de las primeras catorce semanas de gestación' },
  { Boletin: '11668-11', Fecha: '2018-04-05', Resumen: 'Modifica el decreto con fuerza de ley N° 1, de 2005, del Ministerio de Salud, con el objeto de asegurar el financiamiento, por parte de las Isapres, de la atención médica que requieran sus afiliadas para someterse a un aborto, en el caso que indica' },
  { Boletin: '11915-07', Fecha: '2018-07-12', Resumen: 'Modifica la ley N° 20.000, que Sustituye la ley Nº 19.366, que Sanciona el Tráfico Ilícito de Estupefacientes y Sustancias Sicotrópicas, para tipificar el delito de suministración de drogas a una persona, sin su consentimiento o conocimiento' },
  { Boletin: '11845-04', Fecha: '2018-06-20', Resumen: 'Sobre prevención de la violencia de género y respeto de la diversidad sexual en establecimientos educacionales.' },
  { Boletin: '12765-06', Fecha: '2019-07-04', Resumen: 'Modifica diversos cuerpos legales para prohibir y sancionar la recepción de aportes para partidos políticos y campañas electorales, provenientes de personas que hayan incurrido en conductas penadas por las leyes N°19.366, N°19.913 y N°20.000, relativas a lavado de activos, financiamiento del terrorismo, y a tráfico de drogas o estupefacientes' },
  { Boletin: '12532-04', Fecha: '2019-04-04', Resumen: 'Modifica la ley N° 20.370, General de Educación, para establecer una asignatura obligatoria sobre igualdad de género en la educación parvularia, básica y media' },
  { Boletin: '13074-15', Fecha: '2019-11-12', Resumen: 'Modifica la ley N°18.290, de Tránsito, en materia de pago de multas por circular en autopistas concesionadas sin dispositivo electrónico de cobro de tarifas o peajes' },
  { Boletin: '13019-21', Fecha: '2019-10-16', Resumen: 'Modifica la ley N°18.892, General de Pesca y Acuicultura, para prohibir la pesca de arrastre respecto de la especie merluza común' },
  { Boletin: '9480-11', Fecha: '2014-08-05', Resumen: 'Modifica tipificación de figuras delictivas del aborto y, su penalidad.' },
  { Boletin: '13153-11', Fecha: '2019-12-12', Resumen: 'Prohíbe el uso excesivo de la fuerza, así como la utilización de medios disuasivos que afecten la integridad física de las personas, y exige el respeto de los derechos humanos en el contexto de control o disolución de manifestaciones públicas por parte del personal policial, y modifica la ley N°18.961, orgánica constitucional de Carabineros de Chile, en tal sentido' },
  { Boletin: '13655-05', Fecha: '2020-07-17', Resumen: 'Crea el Fondo de Emergencia Transitorio Covid-19' },
  { Boletin: '13354-03', Fecha: '2020-03-23', Resumen: 'Dispone la suspensión del cobro de las tarifas devengadas por concepto de los servicios domiciliarios de agua potable y alcantarillado, y electricidad, entre los meses de marzo y junio del año 2020' },
  { Boletin: '13404-33', Fecha: '2020-04-06', Resumen: 'Faculta al Presidente de la República a reservar el uso prioritario del agua al consumo humano, el saneamiento y el uso doméstico de subsistencia, durante la vigencia de un estado de excepción constitucional de catástrofe por calamidad pública' },
  { Boletin: '13618-11', Fecha: '2020-06-22', Resumen: 'Modifica el decreto con fuerza de ley N°1, de 2005, del Ministerio de Salud, para exigir que las Isapres ofrezcan a sus afiliados un nuevo plan de salud, cuando les afecte una crisis sanitaria que requiera largos períodos de cuarentena' },
  { Boletin: '13251-11', Fecha: '2020-01-28', Resumen: 'Modifica el decreto con fuerza de ley N°1, de 2005, del Ministerio de Salud, para exigir que las Isapres, a requerimiento del afiliado declarado insolvente, ofrezcan a éste un nuevo plan de salud que se ajuste a sus condiciones' },
  { Boletin: '13504-11', Fecha: '2020-04-02', Resumen: 'Modifica el decreto con fuerza de ley N°1, de 2005, del Ministerio de Salud, para prohibir a las isapres modificar los contratos de salud o aumentar su precio, en perjuicio de sus afiliados, durante una epidemia o pandemia, o alerta sanitaria declarada por la autoridad' },
  { Boletin: '13273-09', Fecha: '2020-03-04', Resumen: 'Modifica la Ley General de Servicios Sanitarios, para exigir a las empresas concesionarias de tales servicios, la implementación de planes de ahorro de agua de uso residencial, en los casos que indica' },
  { Boletin: '13521-03', Fecha: '2020-05-19', Resumen: 'Modifica la ley N°18.046 sobre Sociedades Anónimas, para prohibir a las sociedades administradoras de fondos de pensiones (AFP), la distribución de dividendos entre sus accionistas, en los casos que señala' },
  { Boletin: '13241-15', Fecha: '2020-01-28', Resumen: 'Modifica la ley N°18.290, de Tránsito, para exigir, respecto de los conductores profesionales habilitados para el transporte de carga pesada, certificación médica que acredite el no consumo de drogas o sustancias psicotrópicas' },
  { Boletin: '13574-06', Fecha: '2020-06-10', Resumen: 'Modifica la ley N°18.700, orgánica constitucional sobre Votaciones Populares y Escrutinios, para asegurar que las candidaturas a diputado o senador que se inscriban en el registro correspondiente, cumplan la cuota de género establecida en ella' },
  { Boletin: '13540-03', Fecha: '2020-05-26', Resumen: 'Modifica la ley N°19.496, que Establece normas sobre protección de los derechos de los consumidores, para prohibir descuentos con cargo a beneficios sociales y seguro de cesantía, por parte de bancos e instituciones financieras, durante la vigencia de un estado de excepción constitucional' },
  { Boletin: '13462-18', Fecha: '2020-04-23', Resumen: 'Modifica la ley N°20.066, de Violencia Intrafamiliar, para sancionar como delito de maltrato habitual todo acto de violencia intrafamiliar cometido durante la vigencia del estado de excepción constitucional de catástrofe, declarado con motivo de la pandemia de Covid-19' },
  { Boletin: '13509-11', Fecha: '2020-04-14', Resumen: 'Modifica la ley N°21.173, sobre excedentes de cotización en isapres, para disponer que la devolución en favor del afiliado de tales excedentes, se haga con periodicidad semestral' },
  { Boletin: '13373-03', Fecha: '2020-03-25', Resumen: 'Prohíbe el alza en las rentas de arrendamiento y dispone la suspensión de su pago, así como del desalojo del arrendatario, en los casos y bajo las condiciones que indica, durante la vigencia del estado de excepción constitucional de catástrofe, declarado en razón de la pandemia por Covid-19' },
  { Boletin: '13519-03', Fecha: '2020-05-14', Resumen: 'Prohíbe la publicación de las deudas morosas que indica, durante la vigencia, y hasta noventa días después del cese, del estado de catástrofe decretado con motivo de la pandemia de Covid-19' },
  { Boletin: '13491-11', Fecha: '2020-05-05', Resumen: 'Proyecto de ley que elimina la facultad de las isapres de solicitar la declaración de invalidez de un afiliado.' },
  { Boletin: '13590-13', Fecha: '2020-06-18', Resumen: 'Proyecto de ley que establece un procedimiento de pago automático del seguro de cesantía.' },
  { Boletin: '13175-13', Fecha: '2020-01-06', Resumen: 'Proyecto de ley que protege el empleo y fortalece el seguro de cesantía.' },
  { Boletin: '13438-03', Fecha: '2020-04-15', Resumen: 'Proyecto de ley que suspende el cobro de servicios básicos de agua potable, electricidad y gas por declaración de estado de catástrofe.' },
  { Boletin: '13502-11', Fecha: '2020-04-01', Resumen: 'Suspende, durante la vigencia del estado de excepción constitucional de catástrofe motivado por la pandemia de Covid-19, la facultad de las isapres de modificar el precio base de los planes de salud en términos más onerosos para sus afiliados' }
]

async function main() {
  writeFile("./data/destacados.votaciones.senadores.json", JSON.stringify(destacadosVotacionesSenadores), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();


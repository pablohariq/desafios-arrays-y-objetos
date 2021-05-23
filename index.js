document.querySelector("#header").innerHTML += "<h1>Estadísticas centro médico ñuñoa</h1>";

const primUltRadiologia = document.querySelector("#primUltRadiologia");
const primUltTraumatologia = document.querySelector("#primUltTraumatologia");
const primUltDental = document.querySelector("#primUltDental");


// Escribiendo los datos en forma de objetos
const atencRadiologia = [
    {hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA"},
    {hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE"},
    {hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE"},
    {hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA"},
    {hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA"}
]

const atencTraumatologia = [
    {hora: "8:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA"},
    {hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE"},
    {hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE"},
    {hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE"},
    {hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA"},
    {hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE"},
    {hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE"}
]

const atencDental = [
    {hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE"},
    {hora: "11:00", especialista: "MARIA PAZ ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE"},
    {hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA"},
    {hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA"},
    {hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA"},
    {hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE"},
]

// Escribir la primera y última atención de cada departamento en sus respectivas secciones
const ultimoItem = (arreglo) => {
    return arreglo[arreglo.length - 1]
}

primUltRadiologia.innerHTML += `Primera atención: ${atencRadiologia[0].paciente} - ${atencRadiologia[0].prevision} || `
primUltRadiologia.innerHTML += `Última atención: ${ultimoItem(atencRadiologia).paciente} - ${ultimoItem(atencRadiologia).prevision}`

primUltTraumatologia.innerHTML += `Primera atención: ${atencTraumatologia[0].paciente} - ${atencTraumatologia[0].prevision} || `
primUltTraumatologia.innerHTML += `Última atención: ${ultimoItem(atencTraumatologia).paciente} - ${ultimoItem(atencTraumatologia).prevision}`

primUltDental.innerHTML += `Primera atención: ${atencDental[0].paciente} - ${atencDental[0].prevision} || `
primUltDental.innerHTML += `Última atención: ${ultimoItem(atencDental).paciente} - ${ultimoItem(atencDental).prevision}`

// funcion que escribe los encabezados dado un elemento html (para las tablas)
const escribirEncabezado = function(elementoHTML){
    elementoHTML.innerHTML += `        
    <thead>
    <tr>
      <th scope="col">Hora</th>
      <th scope="col">Especialista</th>
      <th scope="col">Paciente</th>
      <th scope="col">RUT</th>
      <th scope="col">Prevision</th>
    </tr>
  </thead>` 
}

// Escribir encabezado de la tabla radiologia
const tablaRadiologia = document.querySelector("#tablaRadiologia")
escribirEncabezado(tablaRadiologia)

// mostrar la tabla de radiologia con una iteración
const cuerpoTablaRad = document.querySelector("#cuerpoTablaRad")
for (let atencion of atencRadiologia){
    cuerpoTablaRad.innerHTML += `
        <tr>
        <td>${atencion.hora}</td>
        <td>${atencion.especialista}</td>
        <td>${atencion.paciente}</td>     
        <td>${atencion.rut}</td> 
        <td>${atencion.prevision}</td> 
        </tr>
    `
}

// repetimos lo anterior para el arreglo de atenciones de traumatologia
const tablaTrauma = document.querySelector("#tablaTrauma")
escribirEncabezado(tablaTrauma)

const cuerpotablaTrauma = document.querySelector("#cuerpoTablaTrauma")
for (let atencion of atencTraumatologia){
    cuerpoTablaTrauma.innerHTML += `
        <tr>
        <td>${atencion.hora}</td>
        <td>${atencion.especialista}</td>
        <td>${atencion.paciente}</td>     
        <td>${atencion.rut}</td> 
        <td>${atencion.prevision}</td> 
        </tr>
    `
}
// lo mismo para dental
const tablaDental = document.querySelector("#tablaDental")
escribirEncabezado(tablaDental)

const cuerpoTablaDental = document.querySelector("#cuerpoTablaDental")
for (let atencion of atencDental){
    cuerpoTablaDental.innerHTML += `
        <tr>
        <td>${atencion.hora}</td>
        <td>${atencion.especialista}</td>
        <td>${atencion.paciente}</td>     
        <td>${atencion.rut}</td> 
        <td>${atencion.prevision}</td> 
        </tr>
    `
}
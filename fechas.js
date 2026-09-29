//Fechas
console.log("Fecha sistema:");
let fechaSistema = new Date();
console.log("Fecha del sistema: " + fechaSistema);

console.log("\nFecha en milisegundos:");
let fechaMilisegundos = new Date(1790664995066);
console.log("Fecha milisegundos: " + fechaMilisegundos);

console.log("\nFecha por cadena:");
let fechaCadena = new Date("2026/9/27"); //Funciona con - y con / (formato fecha año/mes/dia)
console.log("Fecha cadena: " + fechaCadena);

console.log("\nFecha por parámetros:");
let fechaExacta = new Date(2003, 8, 27 ,12, 10, 32, 55); // año, mes, día, hora, minuto, segundo, milisegundo (no se puede usar 0 delante de los números, ej: 03)
console.log("Fecha exacta: " + fechaExacta); // no imprime los milisegundos

// otras funciones de fechas
console.log("\nnow()");
console.log("Fecha actual por la fecha y hora en valor numérico: " + Date.now());

console.log("\nparse()");
let fechaString = "2013-09-17";
let fechaStringMilisegundos = Date.parse(fechaString);
console.log("Cadena de texto pasado a milisegundos: " + fechaStringMilisegundos);
let fechaParseada = new Date(fechaStringMilisegundos);
console.log("Fecha parseada: " + fechaParseada);

console.log("\ngetFullYear():");
console.log("Año " + fechaSistema.getFullYear());

console.log("\ngetMonth():");
console.log("Mes " + fechaSistema.getMonth());

console.log("\ngetDate():");
console.log("Día del mes: " + fechaSistema.getDate());

console.log("\ngetDay():");
console.log("Día de la semana: " + fechaSistema.getDay());

console.log("\ngetHours, getMinutes(), getSeconds(), getMilliseconds():");
console.log(fechaSistema.getHours() + " horas, " + fechaSistema.getMinutes() +
 " minutos, " + fechaSistema.getSeconds() + " segundos, " + fechaSistema.getMilliseconds() + " milisegundos");

console.log("Fecha en milisegundos: " + fechaSistema.getTime());
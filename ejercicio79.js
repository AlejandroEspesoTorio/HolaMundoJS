// Tiempo transcurrido entre dos fechas

let fecha1 = new Date();
console.log(fecha1);

let fecha2 = new Date("2003-09-27");
console.log(fecha2);

let diferenciaMilisegundos = fecha1 - fecha2;
let dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

let anios = Math.floor(dias / 365.25);
let diasRestantes = Math.floor(dias % 365.25);

console.log("Han transcurrido " + dias + " días en total.");
console.log("Aproximadamente " + anios + " años y " + diasRestantes + " días.");
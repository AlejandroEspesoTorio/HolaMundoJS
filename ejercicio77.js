//Obtener los días de la semana de tus siguientes cinco cumpleaños
let fechaCumpleanios = new Date("2026-09-27");
console.log(fechaCumpleanios);

let diaSemana = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado"
];

for (let i = 0; i <= 4; i++){
    fecha = fechaCumpleanios.getDay();
    console.log(fechaCumpleanios.getFullYear() + " - " +diaSemana[fecha]);
    fechaCumpleanios.setFullYear(fechaCumpleanios.getFullYear()+1);
};

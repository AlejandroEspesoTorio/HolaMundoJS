const a = 1, b = 2;
console.log(`Suma: ${a + b}`);
console.log('Suma: ${a + b}');
console.log("Suma: ${a + b}");

const s=`linea1
linea2`;
console.log(s);

let fechaSistema = new Date();
console.log(`\nFecha actual:
Día ${fechaSistema.getDate()} 
Mes ${fechaSistema.getMonth()}
Año ${fechaSistema.getFullYear()} 
${fechaSistema.getHours()} horas 
${fechaSistema.getMinutes()} minutos
${fechaSistema.getSeconds()} segundos
${fechaSistema.getMilliseconds()} milisegundos\n`);


function foo(texto, p1, p2, p3){
    console.log(texto, p1, p2, p3);
    return `La suma es: ${p1+p2}`;
};

let res = foo `La suma de ${a} y ${b} es ${a+b}`; // Me devuelve ['La suma de ', ' y ', ' es ', '', raw: Array(4)] 1 2 3

function suma (a, b, c, d){
    return a+b+c+d;
};

// console.log(suma("1, 5, 8, 12")); DUDA UNDEFINED
// suma("hola, adios"); //No da error, pero tampoco imprime nada
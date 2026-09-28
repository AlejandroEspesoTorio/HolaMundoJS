//Math.PI
console.log("Math.PI");
console.log(Math.PI);


//Math.E
console.log("\nMath.E");
console.log(Math.E);


//Math.abs()
console.log("\nMath.abs"); //si el número es 0 se quedaría igual
let numeroNegativo = -1.2;

console.log("Número negativo: " + numeroNegativo);
console.log("Número absoluto: " + Math.abs(numeroNegativo));


//Math.sin() / Math.cos() / Math.tan()
//Math.sin() (Seno)
console.log("Math.sin()");
let numAnguloRadiantes1 = Math.PI / 2; // Equivalente a 90 grados

console.log("Seno de PI/2: " + Math.sin(numAnguloRadiantes1)); // Resultado: 1


//Math.cos() (Coseno)
console.log("\nMath.cos()");
let numAnguloRadiantes2 = Math.PI; // Equivalente a 180 grados

console.log("Coseno de PI: " + Math.cos(numAnguloRadiantes2)); // Resultado: -1


//Math.tan() (Tangente)
console.log("\nMath.tan()");
let numAnguloRadiantes3 = 0; // Equivalente a 0 grados

console.log("Tangente de 0: " + Math.tan(numAnguloRadiantes3)); // Resultado: 0


//Math.exp() / Math.log()

//Math.ceil()
console.log("\nMath.ceil()");
let numeroDecimalAlza1 = 4.10;
let numeroDecimalAlza2 = 4.5;
let numeroDecimalAlza3 = 4.90;

console.log("Número " + numeroDecimalAlza1 + " al alza: " + Math.ceil(numeroDecimalAlza1));
console.log("Número " + numeroDecimalAlza2 + " al alza: " + Math.ceil(numeroDecimalAlza2));
console.log("Número " + numeroDecimalAlza3 + " al alza: " + Math.ceil(numeroDecimalAlza3));


//Math.floor()
console.log("\nMath.floor()");
let numeroDecimalTruncado1 = 4.10;
let numeroDecimalTruncado2 = 4.5;
let numeroDecimalTruncado3 = 4.90;

console.log("Número " + numeroDecimalTruncado1 + " truncado: " + Math.floor(numeroDecimalTruncado1));
console.log("Número " + numeroDecimalTruncado2 + " truncado: " + Math.floor(numeroDecimalTruncado2));
console.log("Número " + numeroDecimalTruncado3 + " truncado: " + Math.floor(numeroDecimalTruncado3));


//Math.round()
console.log("\nMath.round()");
let numeroDecimal1 = 4.51;
let numeroDecimal2 = 4.49;
let numeroDecimal3 = 4.50;

console.log("Número redondeado de " + numeroDecimal1 + ": " + Math.round(numeroDecimal1));
console.log("Número redondeado de " + numeroDecimal2 + ": " + Math.round(numeroDecimal2));
console.log("Número redondeado de " + numeroDecimal3 + ": " + Math.round(numeroDecimal3));


//Math.pow(b,e)
console.log("\nMath.pow(b,e)");
let numeroBase = 2;
let numeroElevado = 3;

console.log(numeroBase + "^" + numeroElevado + ":" + Math.pow(numeroBase, numeroElevado));


//Math.min()
console.log("\nMath.min()");
let numMin1 = 120;
let numMin2 = 85.13;
let numMin3 = 200;

let numeroDefinitivoMin = Math.min(numMin1, numMin2, numMin3);
console.log("El valor mínimo más bajo es: " + numeroDefinitivoMin);


//Math.max()
console.log("\nMath.max()");
let numMax1 = 4.5;
let numMax2 = 8.9;
let numMax3 = 7.2;

let numeroDefinitivoMax = Math.max(numMax1, numMax2, numMax3);
console.log("El valor máximo más alto es: " + numeroDefinitivoMax);


//Math.sqrt()
console.log("\nMath.sqrt()");
let numBase1 = 25;

console.log("Raíz cuadrada de " + numBase1 + ": " + Math.sqrt(numBase1));


//Math.random()
console.log("\nMath.random()");

let numAleatorioDecimal = Math.random(); 
console.log("Número aleatorio base (0 a 1): " + numAleatorioDecimal);

let numAleatorioHastaCien = Math.random() * 100;
console.log("Número aleatorio multiplicado por 100 (0 a 100): " + numAleatorioHastaCien);
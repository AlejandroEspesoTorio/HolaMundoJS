//Ejercicio expresiones regulares

// a partir de un texto almacenar en 5 arrays diferentes las palabras de
// una, dos, tres, cuatro, cinco o más letras

let texto = "Hola esto es un ejemplo de texto para separar palabras por su longitud";

// Extraemos todas las palabras
let palabras = texto.match(/\b[a-záéíóúüñ]+\b/gi);

// Arrays según el número de letras
let una = palabras.filter(palabra => palabra.length === 1);
let dos = palabras.filter(palabra => palabra.length === 2);
let tres = palabras.filter(palabra => palabra.length === 3);
let cuatro = palabras.filter(palabra => palabra.length === 4);
let cincoOMas = palabras.filter(palabra => palabra.length >= 5);

console.log("1 letra:", una);
console.log("2 letras:", dos);
console.log("3 letras:", tres);
console.log("4 letras:", cuatro);
console.log("5 o más letras:", cincoOMas);
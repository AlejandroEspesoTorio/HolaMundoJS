//Ejercicio expresiones regulares

// a partir de un texto almacenar en 5 arrays diferentes las palabras de
// una, dos, tres, cuatro, cinco o más letras

let texto = "Hola a esto es un ejemplo de texto para separar palabras por su longitud";

let palabras = texto.match(/\b[a-záéíóúüñ]+\b/gi);

let una = texto.match(/\b[a-záéíóúüñ]\b/gi);
let dos = texto.match(/\b[a-záéíóúüñ]{2}\b/gi);
let tres = texto.match(/\b[a-záéíóúüñ]{3}\b/gi);
let cuatro = texto.match(/\b[a-záéíóúüñ]{4}\b/gi);
let cincoOMas = texto.match(/\b[a-záéíóúüñ]{5,}\b/gi);

console.log("1 letra:", una);
console.log("2 letras:", dos);
console.log("3 letras:", tres);
console.log("4 letras:", cuatro);
console.log("5 o más letras:", cincoOMas);
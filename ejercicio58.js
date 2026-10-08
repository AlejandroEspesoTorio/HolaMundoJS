// Alterar palabras en mayúsculas con palabras en minúsculas

let frase = "Esto es un ejercicio con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto string";
let fraseArray = frase.split(" ");
let palabra = "";

//me falta cambiar esto
for(let i = 0; i < fraseArray.length; i++){
    if (fraseArray[i].toUpperCase){
        fraseArray[i].toLowerCase();
    } else {
        fraseArray[i].toUpperCase();
    }
    palabra += fraseArray[i].toUpperCase() + " ";
};

console.log(palabra);
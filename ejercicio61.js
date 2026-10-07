// Esto es un ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto string

let frase = "Esto es un ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto string";
fraseArray = frase.split(" ");
console.log(fraseArray);

let linea = "";
for(i = fraseArray.length-1; i >= 0; i--){
    linea += fraseArray[i] + " ";
};

console.log(linea);
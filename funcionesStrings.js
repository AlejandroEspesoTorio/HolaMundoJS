//charAt
console.log("charAt(pos)");
let cadena1 = "Helicóptero";
let num = 4
console.log("Posición " + num + " de " + cadena1 + ": " + cadena1.charAt(num));


//substr
console.log("\nsubstr(i, f)");
let i = 2;
let f = 6;
console.log(cadena1.substring(i,));
console.log(cadena1.substring(i, f));


//split
console.log("\nsplit(c)");
let array1 = cadena1.split("ó");
let array2 = cadena1.split("");
console.log(array1);
console.log(array2);

let frase = "Hola que tal";
let array3 = frase.split(" ");
console.log(array3);


//endsWith()
console.log("\nendsWith()");
let cadena2 = "Helicóptero";
let cadenaBuscar1 = "tero";
console.log("¿Termina con " + cadenaBuscar1 + "?: " + cadena2.endsWith(cadenaBuscar1));


//startsWith()
console.log("\nstartsWith()");
let cadenaBuscar2 = "Heli";
console.log("¿Empieza con " + cadenaBuscar2 + "?: " + cadena2.startsWith(cadenaBuscar2));


//includes()
console.log("\nincludes()");
let cadenaBuscar3 = "cóp";
console.log("¿Contiene " + cadenaBuscar3 + "?: " + cadena2.includes(cadenaBuscar3));


//match()
console.log("\nmatch()");
let expresion1 = /[A-Z]/g;
console.log(cadena2.match(expresion1));


//repeat()
console.log("\nrepeat()");
let repeticiones = 3;
console.log(cadena2.repeat(repeticiones));


//replace()
console.log("\nreplace()");
let buscar = "tero";
let reemplazo = "s";
console.log(cadena2.replace(buscar, reemplazo));


//trim()
console.log("\ntrim()");
let cadenaEspacios = "   Helicóptero   ";
console.log(cadenaEspacios.trim());


//padStarts()
console.log("\npadStarts()");
let longitud1 = 15;
let relleno1 = "*";
console.log(cadena2.padStart(longitud1, relleno1));


//padEnd()
console.log("\npadEnd()");
let longitud2 = 15;
let relleno2 = "-";
console.log(cadena2.padEnd(longitud2, relleno2));
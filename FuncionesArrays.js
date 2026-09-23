//lenght
console.log("Función lenght");
let array1 = new Array (1, 2, 3);
console.log(array1.length);

//concat()
console.log("\nFunción concat()");
let array2 = new Array (4, 5, 6);
let array3 = new Array (7, 8, 9);
let arrayCombinado = array1.concat(array2, array3);

console.log(arrayCombinado);

//join()
console.log("\nFunción join()");
let cadena = arrayCombinado.join(" | ");
console.log(cadena);

//pop()
console.log("\nFunción pop()");
let ultimoElementoArray = arrayCombinado.pop();
console.log(ultimoElementoArray);

//push() //duda
console.log("\nFunción push()");
let elementoAgregado = 7;
arrayCombinado.push(elementoAgregado);
console.log(arrayCombinado);

//shift()
console.log("\nFunción shift()");
console.log("Antes: " + arrayCombinado);
console.log("Número eliminado: " + arrayCombinado.shift());
console.log("Después: " + arrayCombinado);

//unshift()
console.log("\nFunción unshift()");
console.log("Antes: " + arrayCombinado);
arrayCombinado.unshift(5);
console.log("Después: " + arrayCombinado);

//reverse()
console.log("\nFunción reverse()");
console.log(arrayCombinado.reverse());

//sort()

//indexOf() //Solo coje el primer elemento buscado
console.log("\nFunción indexOf()");
console.log(arrayCombinado);
console.log(arrayCombinado.indexOf(7));

//lastIndexOf() //Solo coje el último elemento buscado
console.log("\nFunción lastIndexOf()");
console.log(arrayCombinado);
console.log(arrayCombinado.lastIndexOf(7));

//slice() mal
console.log("\nFunción slice()");

// console.log("Array original:", arrayCombinado); 
// console.log("Array modificado:", arrayCombinado.slice(1, 7));


//splice() mal
console.log("\nFunción splice()");

// Partiendo del array [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1] crear un nuevo array con los elementos de array original
// sin repetir y ordenado

//Forma 1 (principal)
function forma1() {
    let arrayConDuplicados = [4, 0, 3, 4, 7, 3, 5, 8, 1, 8, 8, 0, 2, 3, 1, 2, 5, 7, 3, 2, 5, 1];
    let arraySinDuplicados = [];

    for (let i = 0; i < arrayConDuplicados.length; i++) {
        if (arraySinDuplicados.indexOf(arrayConDuplicados[i]) === -1) {
            arraySinDuplicados.push(arrayConDuplicados[i]);
        }
    }

    console.log(arraySinDuplicados.sort());
};


//Forma 2
function forma2() {
    let arrayConDuplicados = [4, 0, 3, 4, 7, 3, 5, 8, 1, 8, 8, 0, 2, 3, 1, 2, 5, 7, 3, 2, 5, 1];
    let arraySinDuplicados = [...new Set(arrayConDuplicados)];

    console.log(arraySinDuplicados.sort());
};


//Ejercicio aparte (comprobar si se cambia el nombre)
let persona = { 
    nombre: "Samuel" 
}; 
cambiarNombre(persona);
console.log(persona.nombre);

function cambiarNombre(o) {
    o.nombre = "Laura";
};
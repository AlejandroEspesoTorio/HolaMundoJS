console.log("for-of (for-each):");
frutas = ["manzana", "pera", "naranja", "plátano", "fresa", "melocotón"];
for(const fruta of frutas){
    console.log(fruta);
};

//Llave ( {} ) objeto, ( [] ) Array
// Persona p = new Persona (); otro objeto
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const personas = [new Persona("Alejandro", 22)]; 

for (const p of personas) {
    console.log(p.nombre, p.edad);
}

// let personas = {
//     nombre: "Alejandro"

// };

console.log("\nfor-in:");
numeros = [1, 7, 3, 6];
for(const num in numeros){
    console.log(num);
};


// console.log("\nSwitch:");
// variableSwitch1 = 5;
// variableSwitch2 = "manzana";
// switch(variableSwitch1, variableSwitch2){
//     case 1 & "manzana":
//     console.log("Número 1 y manzana");
//     break;
//     case 5
// }
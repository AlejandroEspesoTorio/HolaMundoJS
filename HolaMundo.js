//Tipos de variables (es recomendable usar let/var)
console.log("\nTipos de lets:");
let numero1=1;
console.log(typeof numero1);

let numero2=1.03;
console.log(typeof numero2);

let booleano = true;
console.log(typeof booleano);

let cadena = "¡Hola, mundo!";
console.log(typeof cadena);

let nulo=null;
console.log(typeof nulo);

let indefinido;
console.log(typeof indefinido);

let objeto = {a:1};
console.log(typeof objeto);

//Tipos de datos
console.log("\nTipos de datos:");
console.log(cadena.constructor.name); //String
console.log(numero1.constructor.name); //Number
console.log(booleano.constructor.name); //Boolean
console.log(String.constructor.name) //Funcion

//Ambito de variables
console.log("\nAmbito de variables:");

//Ambito global
let a1=1;
console.log(a1);
//console.log(a2);
//console.log(a3);
//console.log(a4);
{
    //Ambito de bloque
    let a2=2; // Si se cambia a var se puede llamar, aunque no esté definido
    console.log(a1);
    console.log(a2);
    //console.log(a3);
    //console.log(a4);

    f();
}

function f(){   //Ambito de funcion
    var a3=3;
    console.log(a1);
    //console.log(a2); //a2 no lo detecta porque está en bloque
    console.log(a3);
    //console.log(a4);

    if(true)
    {   //Ambito de bloque
        let a4=4;
        console.log(a1);
        //console.log(a2);
        console.log(a3);
        console.log(a4);
    }
}

(function(n){
    var saludo="Hola";
    console.log(saludo+n) // Hola Juan
} (" Juan"));

let x = 5;
let y = 2;

console.log (++x+y);
console.log (x+++y);


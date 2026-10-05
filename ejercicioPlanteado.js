// Pedimos los datos al usuario

let nombre = prompt("Introduce tu nombre:");
let apellidos = prompt("Introduce tus apellidos:");
let edad = prompt("Introduce tu edad:");
let email = prompt("Introduce tu email:");
let telefono = prompt("Introduce tu teléfono:");
let centro = prompt("Introduce tu centro:");
let curso = prompt("Introduce tu curso (1 o 2):");
let observaciones = prompt("Introduce tus observaciones:");
let anio = prompt("Introduce tu año de nacimiento:");


// Función para comprobar los datos

function comprobar(titulo, dato, expr) {
    let resultado = expr.test(dato);

    console.log(titulo + ": " + resultado);

    if (resultado == false) {
        alert("El campo " + titulo + " no cumple las especificaciones.");
    }
}


// Expresiones regulares

// Nombre y apellidos:
// Primera letra mayúscula y el resto letras.
// Se permiten tildes y la Ñ.

let expresionNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/;

let expresionApellidos = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)+$/;


// Edad:
// Solo números y como máximo 3 dígitos.

let expresionEdad = /^[0-9]{1,3}$/;


// Email:
// Letras, números, guion y guion bajo.
// Después una @.
// Después letras y números.
// Un punto.
// Y finalmente 2 o 3 letras.

let expresionEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;


// Teléfono:
// Debe empezar por 6 o 9 y tener 9 números.

let expresionTelefono = /^[69][0-9]{8}$/;


// Centro:
// Entre 5 y 120 caracteres.

let expresionCentro = /^.{5,120}$/;


// Curso:
// Solo puede ser 1 o 2.

let expresionCurso = /^[12]$/;


// Observaciones:
// Texto y/o números.
// Entre 1 y 120 caracteres.

let expresionObservaciones = /^.{1,120}$/;


// Año:
// Año de 4 cifras.

let expresionAnio = /^[0-9]{4}$/;


// Comprobamos todos los datos

comprobar("Nombre", nombre, expresionNombre);
comprobar("Apellidos", apellidos, expresionApellidos);
comprobar("Edad", edad, expresionEdad);
comprobar("Email", email, expresionEmail);
comprobar("Teléfono", telefono, expresionTelefono);
comprobar("Centro", centro, expresionCentro);
comprobar("Curso", curso, expresionCurso);
comprobar("Observaciones", observaciones, expresionObservaciones);
comprobar("Año", anio, expresionAnio);

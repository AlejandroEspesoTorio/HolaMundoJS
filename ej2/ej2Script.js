// FALTA VALIDACIÓN FECHA

let booleanoSeguir = false;
do {
    let nombre = prompt("Introduzca su nombre, apellidos y su fecha de nacimiento (YYYY-MM-DD) separado por comas").trim();
    let arrayUsuario = nombre.split(", ");
    console.log(arrayUsuario);

    if (arrayUsuario.length == 4) { // && arrayUsuario[3] fechaNacimiento

        document.write("<table>");
        let etiquetas = ["Nombre", "Primer apellido", "Segundo apellido", "Fecha"];

        for (let i = 0; i < etiquetas.length; i++) {
            document.write("<tr>");

            document.write("<td><strong>" + etiquetas[i] + "</strong></td>");
            document.write("<td><strong>" + arrayUsuario[i] + "</strong></td>");

            document.write("</tr>");
        }

        booleanoSeguir = true;

    } else {
        alert("Error, no se ha introducido correctamente los datos");
    }

} while (!booleanoSeguir);
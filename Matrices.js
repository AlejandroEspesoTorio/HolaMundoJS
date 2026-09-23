// let tabla1 = [];
// tabla1[0] = [1, 2, 3];
// tabla1[1] = [4, 5, 6];

// let tabla2 = [];
// tabla2[0] = "Laura";
// tabla2[1] = "";

// for(let i = 0; i < tabla1.length; i++){
//     if(tabla2[1] != undefined){
//         continue;
//     }
//     console.log("Fila: " = [0]);
//     console.log("Columna: " );
// }

//Esto está bien
// for (let i = 0; i < tabla1.length; i++){
//     console.log("Fila = ");
//     if(tabla1[1] != undefined){
//         for (let j = 0; j < tabla1[1].length; j++){
//             console.log("Columna = " + j);
//             console.log("Valor = " + tabla1[i][j])
//         }
//     }
// }

// let tabla3 = [(1, 2, 3), (4, 5, 6)];

// for(let i = 0; i < tabla3.length; i++){

//     for(let j = 0; j < tabla3[i].length; j++){
//         console.log("Columna: " + j + "i Valor " + tabla3[i][j]);
//     }
// }

let tabla4 = [1, 2, 3, ("a", "b"), "c", true, (4, 5)];
tabla4[10] = "d";

for (let i = 0; i < tabla4.length.length; i++){
    console.log("Fila:" + i);
    if (tabla4[i] === "object") {
        for(let j = 0; j < tabla4[i].length; j++){
            console.log("Columna: " + j + " | Valor: " + tabla4[i][j]);
        }
    } else {
        console.log("Columna: " + j + " | Valor: " + tabla4[i]);
    }
}
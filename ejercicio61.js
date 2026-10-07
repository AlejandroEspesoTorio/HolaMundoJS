// Esto es un ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto string

let frase = "Esto es un ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto string";
forma2(frase);

async function forma1(frase) {
    let fraseArray = frase.split(" ");
    console.log(fraseArray);
    
    let linea = "";
    for(i = fraseArray.length-1; i >= 0; i--){
        linea += fraseArray[i] + " ";
    };
    
    console.log(linea);
};

//DUDA
async function forma2(frase) {
    let linea = "";

    while (frase.length > 0) {
        let posicion = frase.indexOf(" ");

        if (posicion === -1) {
            linea = frase + " " + linea;
            break;
        }

        let palabra = frase.substring(0, posicion);

        linea = palabra + " " + linea;

        frase = frase.substring(posicion + 1);
    }

    console.log(linea);
}

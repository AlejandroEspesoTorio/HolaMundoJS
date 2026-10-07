var tablaA = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9],
    ['A','B','C']];
console.log(tablaA.length);
console.log(tablaA[0].length);
tablaA[1][1] = 20;
console.log(tablaA);

console.log("Recorrer la tabla con el método forEach")
tablaA.forEach(function (e, i){
    tablaA[i].forEach(function (e, j){
        console.log(tablaA[i][j]);
    });
});

var tablaB = new Array(5);
tablaB.fill(['A','B','C']);
console.log(tablaB + "\n");

var tablaC = Array.of([1,2,3],[3,4,5]);
console.log(tablaC);
forma2(tablaC);

async function forma1(tablaC) {
    for (let i = 0; i < tablaC.length; i++) {
        let linea = "";
        for (let j = 0; j < tablaC[i].length; j++) {
            if(j < tablaC[i].length-1){
                linea += tablaC[i][j] + ", ";
            } else {
                linea += tablaC[i][j];
            };
        };
        console.log(linea);
    };
};

async function forma2(tablaC) {
    for (let i = 0; i < tablaC.length; i++) {
        console.log(tablaC[i].join(", "));
    };
};

var tablaD = Array.of([1,2,3],[3,4,5]);
console.log(tablaD);

// var tablaE = Array(Array(3), Array(3));
// console.log(tablaE);
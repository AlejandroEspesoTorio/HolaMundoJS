let lista1 = new Array();
let lista2 = Array();
let lista3 = [];

lista1[0] = 1;
console.log(lista1[0]);
lista1[5] = "Pepe";

console.log(lista1.length);
for (let i = 0; i < lista1.length; i++){
    console.log(i);
    console.log(lista1[i]);
}

lista1["pos1"] = "Laura";
lista1.pos2 = "Santi";

for (let i = 0; i < lista1.length; i++){
    console.log("i " + i);
    console.log(lista1[i]);
}
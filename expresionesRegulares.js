console.log(/^hello/.test('hola mundo')); //false
console.log(/world$/.test('hola mundo')); //false
console.log(/^h.*o$/.test('hola mundo')); //true
console.log(/^[0-9]/.test('hola mundo')); //false
console.log(/[u-v]/.test('hola mundo')); //false

console.log("\n");

console.log(/ol/.test('hola que tal')); // true, contiene ol
console.log(/^ol/.test('hola que tal')); // false, contiene ol, pero no empieza con h (hol)
console.log(/ /.test("hola que tal")); // true, detecta los espacios
console.log(/al$/.test("hola que tal")); // true, termina en al
console.log(/[0-1]/.test("h0la que tal")); //true, contiene 0
console.log(/[a-c]/.test('dron')); // false, porque no tiene ninguna letra de la a a la c (a, b y c)
console.log(/[0-12-3$]/.test("Hola que tal2")); //El dolar se comporta igual tanto dentro como fuera del rango

// \d \D \w \W \s \S \0 \n \t \uXXXX \.
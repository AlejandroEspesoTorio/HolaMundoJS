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

// \d Detecta cualquier número del 0 al 9
console.log("\n\\d");

console.log(/\d/.test('hola que tal 2')); // true, contiene un número
console.log(/\d/.test('hola que tal')); // false, no contiene ningún número

// \D Detecta cualquier carácter que NO sea un número
console.log("\n\\D");

console.log(/\D/.test('123a')); // true, contiene una letra
console.log(/\D/.test('12345')); // false, solo contiene números

// \w Detecta letras, números y guion bajo (_)
console.log("\n\\w");

console.log(/\w/.test('hola_123')); // true, contiene letras, números o _
console.log(/\w/.test('!!!')); // false, no contiene letras, números ni _

// \W Detecta cualquier carácter que NO sea letra, número o _
console.log("\n\\W");

console.log(/\W/.test('hola!')); // true, contiene !
console.log(/\W/.test('hola_123')); // false, solo contiene letras, números y _

// \s Detecta espacios, tabulaciones y saltos de línea
console.log("\n\\s");

console.log(/\s/.test('hola que tal')); // true, contiene un espacio
console.log(/\s/.test('holaquétal')); // false, no contiene espacios ni tabulaciones

// \S Detecta cualquier carácter que NO sea un espacio
console.log("\n\\S");

console.log(/\S/.test('   hola')); // true, contiene letras
console.log(/\S/.test('   ')); // false, solo contiene espacios

// \0 Detecta el carácter nulo
console.log("\n\\0");

console.log(/\0/.test()); // true, contiene un carácter nulo
console.log(/\0/.test('hola')); // false, no contiene un carácter nulo

// \n Detecta un salto de línea
console.log("\n\\n");

console.log(/\n/.test('hola\nque tal')); // true, contiene un salto de línea
console.log(/\n/.test('hola que tal')); // false, no contiene un salto de línea

// \t Detecta una tabulación
console.log("\n\\t");

console.log(/\t/.test('hola\tque tal')); // true, contiene una tabulación
console.log(/\t/.test('hola que tal')); // false, no contiene una tabulación

// \uXXXX Detecta un carácter mediante su código Unicode
console.log("\n\\uXXXX");

console.log(/\u0061/.test('hola')); // true, \u0061 corresponde a la letra a
console.log(/\u0061/.test('HOLA')); // false, no contiene la letra a minúscula

// \. Detecta literalmente un punto
console.log("\n\\.");

console.log(/\./.test('hola.com')); // true, contiene un punto
console.log(/\./.test('holacom')); // false, no contiene ningún punto
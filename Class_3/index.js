let address = "Calle 29 57-8";
let phoneNumber = 30078965;
let colombian = false;

typeof address; // Devuelve "string"
typeof colombian; // Devuelve "boolean"
typeof phoneNumber; // Devuelve "number"

let a = 1;
let b = 2;
let c = 3;

let result;


// Operadores aritméticos
result = a + b; // Suma
result = a - b; // Resta
result = c * b; // Multiplicación
result = a / c; // División
result = a % c; // Módulo
result = a + b * c;
result = a + (b * c); // Operador de agrupación
result = (a + b) * c;


// Incremento y decremento
result = ++result; // Esto es igual a decir result = result + 1;
result = --result; // Esto es igual a decir result = result - 1;

// Concatenar

let word1 = "Hola";
let word2 = "amiga";
let number1 = 1;

let greeting;

greeting = word1 + " " +  word2 + number1;
greeting = ++greeting;

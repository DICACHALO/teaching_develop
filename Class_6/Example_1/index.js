/*
const a = 7;
document.writeln("a es " + a + ".");
*/

const earthGravity = 9.8; //Gravedad del planeta Tierra
const marsGravity = 3.7; // Gravedad del planeta Marte

let weightPerson = 57; //Valor asumido por defecto

let finalWeight;

finalWeight = (weightPerson*marsGravity)/earthGravity; //Fórmula que sale de una regla de tres

finalWeight = finalWeight.toFixed(1);


document.writeln("Pesas: " + finalWeight + " kg si tienes " + weightPerson + " kg en el planeta Tierra.")
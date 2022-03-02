const earthGravity = 9.8; //Gravedad del planeta Tierra
const marsGravity = 3.7; // Gravedad del planeta Marte

let user = prompt("¿Cuál es tu peso?");


let weightPerson = parseFloat(user);

let finalWeight;

finalWeight = (weightPerson*marsGravity)/earthGravity; //Fórmula que sale de una regla de tres

finalWeight = finalWeight.toFixed(1);


document.writeln("Pesas: " + finalWeight + " kg si tienes " + weightPerson + " kg en el planeta Tierra.")
/*
ESTRUCTURA:

function nombreFuncion(parametros){
    //Código que ejecuta la función
}
*/

// Case sensitive
let day = "Monday";
let Day = "Monday";


function greeting(){
    alert("Hola mundo");
}

greeting();

function greetingDOM(){
    document.write("Hola amiga!");
}

greetingDOM();


function hide(){
    document.getElementById('showHide').style.display = "none";
}

function show(){
    document.getElementById('showHide').style.display = "block";
}


function saludar(textSaludo){
    alert(textSaludo);
}


// Podemos llamar a la función cada vez que queramos con argumentos diferentes

saludar("Hola Andrea ¿Cómo estás?");
saludar("Hola Laura ¿Cómo estás?");



let result;

function addNumbers(number1, number2){
    result = (number1 + number2);
    alert("La suma de " + number1 + " y " + number2 + " es: " + result);
}

addNumbers(25,150);
addNumbers(2,50);


function changeColor(newColor){
    let elementDOM = document.getElementById('textColor');
    
    elementDOM.style.color = newColor;
}
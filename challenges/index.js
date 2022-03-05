function greeting(){
    nameUser = prompt("Por favor, escribe tu nombre");
    alert("Hola " + nameUser);
}

function greeting2(){
    firstName = prompt("Por favor, escribe tu nombre");
    lasttName = prompt("Por favor, escribe tu apellido");
    alert("Hola " + firstName + " " + lasttName);
}

function sumNumbers(){
    alert("¡Vamos a sumar!")
    number1 = prompt("Por favor, escribe un número. Puedes usar decimales.");
    number1 = parseFloat(number1);
    number2 = prompt("Escribe un segundo número.");
    number2 = parseFloat(number2);
    result = number1 + number2;
    result = result.toFixed(1);
    alert("El resultado de sumar " + number1 + " con " + number2 + " es: " + result + ".");
}




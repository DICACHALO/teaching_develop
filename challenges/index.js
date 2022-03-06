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

function mathOperation(){
    alert("Escribe los números que vamos a sumar.")
    number1 = prompt("Por favor, escribe el primer número. Puedes usar decimales.");
    number1 = parseFloat(number1);
    number2 = prompt("Escribe el segundo número.");
    number2 = parseFloat(number2);
    alert("Escribe el número con el cual se multiplicará la anterior suma.")
    number3 = prompt("Escribe el tercer número.");
    number3 = parseFloat(number3);
    result = (number1 + number2) * number3;
    result = result.toFixed(1);
    alert("El resultado de sumar " + number1 + " con " + number2 + " y luego multiplicarlo por " + number3 + " es: " + result + ".");
}

function discountPizzaSlices(){
    pizzaInitial = prompt("Hola. ¿Con cuántas rebanadas de pizza llegaste a la fiesta?");
    pizzaInitial = parseInt(pizzaInitial);
    pizzaEaten = prompt("¿Cuántas rebanadas de pizza se han consumido?");
    pizzaEaten = parseFloat(pizzaEaten);
    pizzaFinal = (pizzaInitial - pizzaEaten);
    alert("Llegaste con " + pizzaInitial + " rebanadas de pizza, hasta ahora has consumido " + pizzaEaten + " rebanadas, por lo tanto, te quedadn " + pizzaFinal + ".");
}

function youAge(){
    nameUser = prompt("Por favor, escribe tu nombre");
    ageUser = prompt("Ahora, escribe tu edad");
    ageUser = parseInt(ageUser);
    lastYear = ageUser++;
    nextYear = ageUser--;
    alert(nameUser + " el año pasado tenías " + lastYear + " y el próximo cumplirás " + nextYear + " años.");
}

function theRestaurantBill(){
    alert("Este programa te permite saber cuánto debes pagar en total en tu cuenta del restaurante y cómo se dividirá la cuenta entre los comensales.")
    total = prompt("Por favor, el valor total consumido.");
    total = parseFloat(total);
    people = prompt("¿Entre cuantas personas se dividirá la cuenta?");
    people = parseInt(people);
    tip = prompt("¿Que porcentaje de propina van a pagar? Escribir solo números.");
    tip = parseFloat(tip);
    tax = prompt("¿Que porcentaje de impuestos deben pagar? Escribir solo números.");
    tax = parseFloat(tax);
    totalAccount = total + (total*(tip/100)) + (total*(tax/100));
    totalForEachPerson = totalAccount/people;
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })
    alert("El total de la cuenta con propina e impuestos es " + formatterPeso.format(totalAccount));
    alert("Cada persona debe pagar " + formatterPeso.format(totalForEachPerson));
}



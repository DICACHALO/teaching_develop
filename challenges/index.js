//Challenge 1

function greeting() {
  let nameUser;
  nameUser = prompt("Por favor, escribe tu nombre");
  alert("Hola " + nameUser);
}

//Challenge 2
function greeting2() {
  let firstName, lasttName;
  firstName = prompt("Por favor, escribe tu nombre");
  lasttName = prompt("Por favor, escribe tu apellido");
  alert("Hola " + firstName + " " + lasttName);
}

//Challenge 3
function sumNumbers() {
  let number1, number2, result;
  alert("¡Vamos a sumar!");
  number1 = prompt("Por favor, escribe un número. Puedes usar decimales.");
  number1 = parseFloat(number1);
  number2 = prompt("Escribe un segundo número.");
  number2 = parseFloat(number2);
  result = number1 + number2;
  result = result.toFixed(1);
  alert(
    "El resultado de sumar " +
      number1 +
      " con " +
      number2 +
      " es: " +
      result +
      "."
  );
}

//Challenge 4

function mathOperation() {
  let number1, number2, number3, result;
  alert("Escribe los números que vamos a sumar.");
  number1 = prompt(
    "Por favor, escribe el primer número. Puedes usar decimales."
  );
  number1 = parseFloat(number1);
  number2 = prompt("Escribe el segundo número.");
  number2 = parseFloat(number2);
  alert("Escribe el número con el cual se multiplicará la anterior suma.");
  number3 = prompt("Escribe el tercer número.");
  number3 = parseFloat(number3);
  result = (number1 + number2) * number3;
  result = result.toFixed(1);
  alert(
    "El resultado de sumar " +
      number1 +
      " con " +
      number2 +
      " y luego multiplicarlo por " +
      number3 +
      " es: " +
      result +
      "."
  );
}

//Challenge 5

function discountPizzaSlices() {
  let pizzaInitial, pizzaEaten, pizzaFinal;
  pizzaInitial = prompt(
    "Hola. ¿Con cuántas rebanadas de pizza llegaste a la fiesta?"
  );
  pizzaInitial = parseInt(pizzaInitial);
  pizzaEaten = prompt("¿Cuántas rebanadas de pizza se han consumido?");
  pizzaEaten = parseFloat(pizzaEaten);
  pizzaFinal = pizzaInitial - pizzaEaten;
  alert(
    "Llegaste con " +
      pizzaInitial +
      " rebanadas de pizza, hasta ahora has consumido " +
      pizzaEaten +
      " rebanadas, por lo tanto, te quedadn " +
      pizzaFinal +
      "."
  );
}

//Challenge 6

function youAge() {
  let nameUser, ageUser, lastYear, nextYear;
  nameUser = prompt("Por favor, escribe tu nombre");
  ageUser = prompt("Ahora, escribe tu edad");
  ageUser = parseInt(ageUser);
  lastYear = ageUser - 1;
  nextYear = ageUser + 1;
  alert(
    nameUser +
      " el año pasado tenías " +
      lastYear +
      " y el próximo cumplirás " +
      nextYear +
      " años."
  );
}

//Challenge 7

function theRestaurantBill() {
  let total, people, tip, tax, totalAccount, totalForEachPerson;
  alert(
    "Este programa te permite saber cuánto debes pagar en total en tu cuenta del restaurante y cómo se dividirá la cuenta entre los comensales."
  );
  total = prompt("Por favor, el valor total consumido.");
  total = parseFloat(total);
  people = prompt("¿Entre cuantas personas se dividirá la cuenta?");
  people = parseInt(people);
  tip = prompt(
    "¿Que porcentaje de propina van a pagar? Escribir solo números."
  );
  tip = parseFloat(tip);
  tax = prompt(
    "¿Que porcentaje de impuestos deben pagar? Escribir solo números."
  );
  tax = parseFloat(tax);
  totalAccount = total + total * (tip / 100) + total * (tax / 100);
  totalForEachPerson = totalAccount / people;
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  alert(
    "El total de la cuenta con propina e impuestos es " +
      formatterPeso.format(totalAccount)
  );
  alert("Cada persona debe pagar " + formatterPeso.format(totalForEachPerson));
}

//Challenge 8

function daysConverter() {
  let days, hours, minutes, seconds;
  days = prompt(
    "Ingresa la cantidad de días que deseas convertir a horas, minutos y segundos."
  );
  days = parseInt(days);
  hours = days * 24;
  minutes = hours * 60;
  seconds = minutes * 60;
  alert(
    "La cantidad de horas es " +
      hours +
      ", la cantidad de minutos es " +
      minutes +
      " y la cantidad de segundos es " +
      seconds +
      " en " +
      days +
      " días."
  );
}

//Challenge 9

function kmConverter() {
  const und = 1.609344;
  let mile, km;
  mile = prompt(
    "Ingresa la cantidad de millas que deseas convertir a kilómetros."
  );
  mile= parseInt(mile);
  km = mile * und;
  alert("En " + mile + " millas hay " + km + " kilómetros.");
}


//Challenge 10

function divide() {
  let number1, number2, result;
  number1 = prompt("Por favor, digita un número mayor a 1000.");
  number1 = parseFloat(number1);
  number2 = prompt("Por favor, digita un número menor a 100.");
  number2 = parseFloat(number2);
  result = number1 / number2;
  alert(number2 + " cabe en " + number1 + ", " + result + " veces.");
}

function divideByFour(num) {
    return (num/4);
}

let result = divideByFour(28);

function sumNumbers(number1, number2) {
   return (number1 + number2);
}

let valueReturn = sumNumbers(25,150);

// alert(valueReturn);

let productPrice1 = 100;

function calculateIVA(price) {
    return (price * 0.19);
}

function discount(price) {
    return (price * 0.10);
}

function total() {
    return (
        (calculateIVA(productPrice1) + productPrice1) - discount(productPrice1) 
        );
}

document.write(total());

function test() {
    return true;
    return false;
}
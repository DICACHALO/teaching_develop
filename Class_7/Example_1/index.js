let menuPage = document.getElementById('menu');

console.log(menuPage);
console.log(menuPage.innerHTML);

let li = document.createElement('li');
li.textContent = "About Us";
menuPage.appendChild(li);
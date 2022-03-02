let user = document.getElementById("weightUser");

let btn = document.getElementById("btnUser");

function calculatorWeight() {
  const earthGravity = 9.8;
  const marsGravity = 3.7;
  let weightPerson = parseFloat(user.value);
  let finalWeight;

  finalWeight = (weightPerson * marsGravity) / earthGravity;

  finalWeight = parseFloat(finalWeight.toFixed(2));

  document.write(
    "Pesas en el planeta Marte " +
      finalWeight +
      " kg si tienes " +
      weightPerson +
      " kg en el planeta Tierra."
  );
}

btn.addEventListener("click", calculatorWeight);

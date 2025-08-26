document.querySelector(".btn").addEventListener("click", function () {
  let degree = document.getElementById("Degree").value;
  let unit = document.querySelector("select").value;
  let resultField = document.getElementById("Result");

  // check if user entered value
  if (degree === "" || isNaN(degree)) {
    alert("Please enter a valid number");
    return;
  }

  degree = parseFloat(degree);
  let result = "";

  if (unit === "Celsius") {
    // Celsius → Fahrenheit
    result = (degree * 9/5) + 32 + " °F";
  } else if (unit === "Fahrenheit") {
    // Fahrenheit → Celsius
    result = (degree - 32) * 5/9 + " °C";
  } else {
    alert("Please select a unit to convert");
    return;
  }

  // show result
  resultField.value = result;
});

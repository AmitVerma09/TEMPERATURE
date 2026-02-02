document.querySelector(".btn").addEventListener("click", function () {
    let degree = document.getElementById("Degree").value;
    let unit = document.getElementById("unitSelect").value;
    let resultField = document.getElementById("Result");

    // Validation
    if (degree === "" || isNaN(degree)) {
        alert("Please enter a valid number");
        return;
    }

    degree = parseFloat(degree);
    let result = 0;

    if (unit === "Celsius") {
    
        result = (degree * 9/5) + 32;
        resultField.value = result.toFixed(2) + " °F";
    } else if (unit === "Fahrenheit") {
        result = (degree - 32) * 5/9;
        resultField.value = result.toFixed(2) + " °C";
    } else {
        alert("Please select a unit to convert");
    }
});
function convertTemperature() {
    // Get the temperature input value
    let temperature = parseFloat(document.getElementById("temperature").value);

    // Get the selected scale
    let scale = document.getElementById("scale").value;

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        console.log("Invalid input. Please enter a valid number.");
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    }

    // Convert the temperature based on the selected scale
    let convertedTemperature;
    if (scale === "C") {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperature * 9/5) + 32;
        document.getElementById("result").innerHTML = temperature + "°C is " + convertedTemperature.toFixed(2) + "°F";
    } else if (scale === "F") {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (temperature - 32) * 5/9;
        document.getElementById("result").innerHTML = temperature + "°F is " + convertedTemperature.toFixed(2) + "°C";
    }
}

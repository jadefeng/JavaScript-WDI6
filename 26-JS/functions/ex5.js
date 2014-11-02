// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.

// Convert it to celsius and output "NN°F is NN°C."

var celsiusToFahrenheit = function(celcTemp) {
	var fahrenheitTemp = celcTemp * 9 / 5 + 32;
	var output = celcTemp.toFixed(2) + " degrees C is " + fahrenheitTemp.toFixed(2) + " degrees F";
	return console.log(output);
};

celsiusToFahrenheit(100);

var fahrenheitToCelsius = function(fahrTemp) {
	var celciusTemp = (fahrTemp - 32) * 5 / 9;
	var output = fahrTemp.toFixed(2) + " degrees F is " + celciusTemp.toFixed(2) + " degrees C";
	return console.log(output);
};

fahrenheitToCelsius(100);
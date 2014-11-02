// The Temperature Converter
// It's hot out! Let's make a converter based on the steps at http://www.mathsisfun.com/temperature-conversion.html

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

console.log("5. Temperature Converter")
var celcTempToFahren = prompt("What is the temperature today in Celcius?");
var fahrenTempConverted = celcTempToFahren * 9 / 5 + 32;
console.log(celcTempToFahren + " degrees Celcius is " + fahrenTempConverted + " degrees Fahrenheit.");

var fahrenTempToCelc = prompt("What is the temperature today in Fahrenheit?");
var celcTempConverted = (fahrenTempToCelc - 32) * 5 / 9;
console.log(fahrenTempToCelc + " degrees Fahrenheit is " + celcTempConverted + " degrees Celcius.");

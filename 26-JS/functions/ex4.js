// The Geometrizer
// Create 2 functions that calculate properties of a circle.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

var calcCircumference = function(radius) {
	circum = radius * 2 * Math.PI;
	return console.log("The circumference is " + circum.toFixed(2) + " units.");
};

var calcArea = function(radius) {
	area = Math.pow(radius, 2) * Math.PI;
	return console.log("The area is " + area.toFixed(2) + " units squared."); 
};

calcCircumference(10);
calcArea(10);
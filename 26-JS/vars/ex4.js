// The Geometrizer
// Calculate properties of a circle, using the definitions at http://math2.org/math/geometry/circles.htm

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

console.log("4. Geometrizer")
var radius = prompt("What is the radius of your circle?");
var area = Math.PI * Math.pow(radius, 2);

console.log("The area is " + area);

var circumference = Math.PI * 2 * radius;
console.log("The circumference is " + circumference);

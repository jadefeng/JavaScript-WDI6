// Triangle Area

// Given the following object, write an area function in JavaScript that calculates the area of triangle:

// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 5
// };
// Make sure your program detects triangles with invalid sizes (e.g. there are no triangles with sides 1, 1 and 15)

var side1 = prompt("What is the length of the 1st side?");
var side2 = prompt("What is the length of the 2nd side?");
var side3 = prompt("What is the length of the 3rd side?");

var sides_array = [parseFloat(side1), parseFloat(side2), parseFloat(side3)]

console.log(sides_array)

var triangleFactory = function(sides_array) {
	sorted_side_array = sides_array.sort();
	
	if (sorted_side_array[0] + sorted_side_array[1] >= sorted_side_array[2]) {
		var calcArea = function(){
			var p = (sorted_side_array[0] + sorted_side_array[1] + sorted_side_array[2]) / 2 ;
			var calculated = p*(p-sorted_side_array[0])*(p-sorted_side_array[1])*(p-sorted_side_array[2]);
			var area = Math.pow( calculated , 0.5);
			console.log("The area of this triangle is " + area.toFixed(2) + " units squared.");
		}		
		var calcPerimeter = function() {
			var perimeter = sorted_side_array[0] + sorted_side_array[1] + sorted_side_array[2];
			console.log("The perimeter of this triangle is " + perimeter + " units.")
		}

		calcArea();
		calcPerimeter();

	} else {
		alert("That's not a real triangle!")
		console.log("That's not a real triangle!")
	}
}

triangleFactory(sides_array);
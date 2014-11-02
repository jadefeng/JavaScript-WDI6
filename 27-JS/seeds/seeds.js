var square_number = 0
var total_seeds = 0
// Loops through for each square
for(var i = 1; i <= 64; i++) {
	var square_seed = Math.pow(2, (i-1) );
	console.log("Square " + i + ": " + square_seed);
	square_number += 1;
	total_seeds += square_seed;
}
// Prints out total number of seeds
console.log("The total number of seeds are " + total_seeds);
// Function so you can call for the seed number when you want
var seed_count = function(square_number) {
	var square_seed = Math.pow(2, (square_number-1));
	console.log("There are " + square_seed + " seeds on the square number " + square_number);
}

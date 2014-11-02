// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age). outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function(age, amountPerDay) {
	var ageOfDeath = 100;
	var yearsToLive = ageOfDeath - age
	var daysPerYear = 365.25
	var neededAmount = Math.round(yearsToLive * daysPerYear.toFixed(2) * amountPerDay)
	return console.log("You will need " + neededAmount + " to last you until the ripe old age of " + ageOfDeath)
}

calculateSupply(10, 10);
calculateSupply(99, 1);
calculateSupply(1, 3);
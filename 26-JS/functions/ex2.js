// The Age Calculator
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:

// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years. outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var calculateAge = function(birthYear, currentYear) {
	var age1 = currentYear - birthYear
	var age2 = currentYear - birthYear - 1
	return console.log("You are either "+ age1 + " or " + age2 );
};

var currentYear = new Date().getFullYear();

calculateAge(1991, currentYear);
calculateAge(2000, currentYear);
calculateAge(1700, currentYear);

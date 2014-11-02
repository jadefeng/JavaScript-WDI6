// The Pluralizer
// Write a function named pluralize that:

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


var pluralize = function(noun, number){
	if (noun === "sheep") {
		console.log("There is " + number + " sheep.");
	} else if (noun === "goose") {
		if (number === 1) {
			console.log("Theres is " + number + " goose.");
		} else {
			console.log("There are " + number + " geese.");
		}
	} else {
		if (number === 1) {
			console.log("There is " + number + " " + noun);
		} else {
			console.log("There are " + number + " " + noun + "s");
		}
	}
};

pluralize("goose", 2);
pluralize("dog", 1);
pluralize("orange", 3);
pluralize("cat", 5);
pluralize("sheep", 5);

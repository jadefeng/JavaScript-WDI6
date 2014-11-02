//", "Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).

// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var suffix = ["st", "nd", "rd"] 
var favouriteThings = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries,", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages,", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum."]

// How to randomise on JS
// favouriteThings.sort(function() {
// 	return 0.5 - Math.random)();
// });

for(var i = 0; i < favouriteThings.length; i ++) {
	if (i == 1 || ( i > 20 && i % 10 == 1) ) {
		console.log("My " + i + "st choice is " + favouriteThings[i]);
	} else if (i == 2 || ( i > 20 && i % 10 == 2) ) {
		console.log("My " + i + "nd choice is " + favouriteThings[i]);
	} else if (i == 3 || ( i > 20 && i % 10 == 3) ) {
		console.log("My " + i + "rd choice is " + favouriteThings[i]);
	} else {
		console.log("My " + i + "th choice is " + favouriteThings[i]);

	}
}


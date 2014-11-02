// The Grade Assigner
// Write a function named assignGrade that:

// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function(numScore) {
	if (numScore >= 90 ) {
		console.log("Your score is A.");
	} else if (numScore >= 80) {
		console.log("Your score is B.");
	} else if (numScore >= 65) {
		console.log("Your score is C.");
	} else if (numScore >= 50) {
		console.log("Your score is D");
	} else {
		console.log("Your score is F. You failed.");
	}

}

assignGrade(prompt("What score did you get out of 100?"));
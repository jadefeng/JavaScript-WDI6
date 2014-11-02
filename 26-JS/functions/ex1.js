// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


var fortuneTeller = function(numChild, partnerName, geographicLocation, jobTitle) {
	return console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numChild + " kids.")
}

fortuneTeller(10, "John", "South America", "waitress")
fortuneTeller(5, "Alex", "France", "singer")
fortuneTeller(2, "Andrew", "New York", "stripper")
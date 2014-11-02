// The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


var recipeCard = {
	title: "mole",
	servings: 2,
	ingredients: ["cinnamon", "cumin", "cocoa"],
}

var describeCard = function(card) {
	console.log(card.title.charAt(0).toUpperCase() + card.title.slice(1));
	console.log("Serves: " + card.servings);
	console.log("Ingredients:");
	for (var i = 0; i < card.ingredients.length; i++) {
		console.log(card.ingredients[i]);
	}
}

describeCard(recipeCard)
// The World Translator
// Write a function named helloWorld that:

// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var helloWorld = function(languageCode) {
	if (! languageCode) {
		console.log("Hello World!")
	} else if(languageCode === "es") {
		console.log("¡Hola mundo");
	} else if (languageCode === "de") {
		console.log("Hallo Welt");
	} else if (languageCode === "fr") {
		console.log("Bonjour tout le monde");
	} else if (languageCode === "nl") {
		console.log("Hallo wereld");
	} else {
		console.log("Hello World");
	}
}

helloWorld()
helloWorld("fr");
helloWorld("de");
helloWorld("es");
helloWorld("nl");
helloWorld("blahblah");

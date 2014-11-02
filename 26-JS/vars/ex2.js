// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

console.log("2. Age Calculator")
var current_year = new Date().getFullYear()
var birth_year = prompt("What year are you born?");

var age_1 = current_year - birth_year ;
var age_2 = current_year - birth_year - 1 ;

console.log("You are either " + age_1 + " or " + age_2);
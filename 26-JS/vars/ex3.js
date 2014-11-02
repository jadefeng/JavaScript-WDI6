// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

console.log("3. Lifetime Supply")
var CurrentAge = prompt("How old are you?") ;
var MaxAge = prompt("What will be your maximum age?") ;
var AmountPerDay = prompt("How many chocolate bars you want to eat per day?");
var DaysPerYear = 365;
var TotalAmount = (MaxAge - CurrentAge) * AmountPerDay * 365;

console.log("You will need " + TotalAmount + " to last you until the ripe old age of " + MaxAge + ".") ;
// Which number's bigger?
// Write a function named greaterNum that:

// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function(num1, num2) {
	if (num1 > num2) {
		console.log("The greater number of "+ num1 +" and "+ num2 +" is " + num1);
	} else if (num1 < num2) {
		console.log("The greater number of "+ num1 +" and "+ num2 +" is " + num2);

	} else {
		console.log(num1 +" and "+ num2 +" are equal");
	}

};

greaterNum(10,3);
greaterNum(2,4);
greaterNum(15,15)
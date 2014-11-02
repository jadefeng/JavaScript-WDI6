// JavaScript Calculator

// Create a calculator in JavaScript.

// Requirements

// Prompt the user to enter an operator and two operands.
// Support the following operations: addition, subtraction, multiplication, and division.
// Output may appear in the console or in an alert.
// Bonus

// Support the modulus operator.
// Support the square root operator.
// Support more than two operands.

var activity = prompt("What task do you want to do? (addition / subtraction / multiplication / division / modulus / sqrt / more )")

if (activity == "more") {
	var variables_string = prompt("This calculator allows multiple operands. Enter the list of operands, seperated by a comma.") 
	var variables_array = variables_string.split(",");
	var variables_integer = []
	for (var i = 0; i < variables_array.length; i++) {
		variables_integer.push(parseFloat(variables_array[i]))
	}

	var more_activity = prompt("What calculation would you like to do? addition / subtraction / multiplication")

	if (more_activity == "addition") {
		var total = 0
		for(var j = 0; j < variables_integer.length; j++) {
			total += variables_integer[j];
		}
		var statement = ["The addition of", variables_string, "is", total].join(" ")
		statement += '.'
		console.log(statement)
	} else if (more_activity == "subtraction") {
		total = variables_integer[0];
		for(var j = 1; j < variables_integer.length; j++) {
			total -= variables_integer[j];
		}
		var statement = ["The subtraction of", variables_string, "is", total].join(" ")
		statement += '.'
		console.log(statement)
	} else if (more_activity == "multiplication") {
		total = 1
		for(var j = 0; j < variables_integer.length; j++) {
			total *= variables_integer[j];
		}
		var statement = ["The multiplication of", variables_string, "is", total].join(" ")
		statement += '.'
		console.log(statement)
	} else {
		console.log("That's not a calculator operation!")
		} 
	} else if ( activity == "sqrt") {
			var num1 = parseFloat(prompt("What number do you want to square root?")) 
			if (num1 >= 0) {
				var sqrt_calc = Math.pow(num1, 0.5)	
				console.log(sqrt_calc)
			} else {
				num1 = Math.asb(num1);
				var sqrt_calc = Math.pow(num1, 0.5)	
				console.log(sqrt_calc + "i")
			}
	} else if (activity == "addition" || activity == "subtraction" || activity == "multiplication" || activity == "division" || activity == "modulus" ) {
			var num1 = parseFloat(prompt("What is your first number?"));
			var num2 = parseFloat(prompt("What is your second number?"));

			if (activity == "addition") {
				var addition_calc = num1 + num2;
				console.log("The sum of " + num1 + " and " + num2 + " is " + addition_calc) 
			} else if (activity == "subtraction") {
				var subtraction_calc = Math.abs(num1 - num2);
				console.log("The difference between " + num1 + " and " + num2 + " is " + subtraction_calc)
			} else if (activity == "multiplication") {
				var multiplication_calc = num1 * num2 ;
				console.log("The multiplication of " + num1 + " and " + num2 + " is " + multiplication_calc) ;
			} else if (activity == "division") {
				if (num2 == 0) {
					console.log("You can't divide by 0!") ;
				} else {
					var division_calc = num1 / num2 ;
					console.log("The division of " + num1 + " and " + num2 + " is " + division_calc) ;
				}
			} else if (activity == "modulus") {
				var modulus_calc = num1 % num2 ;
				console.log("The modulus of " + num1 + " and " + num2 + " is " + modulus_calc) ;
			} 
		} else {
			console.log("That's not a calculator operation!")
	}



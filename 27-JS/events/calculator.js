var square_button = document.querySelectorAll('#square-button')[0]
var half_button = document.querySelectorAll('#half-button')[0]
var percent_button = document.querySelectorAll('#percent-button')[0]
var area_button = document.querySelectorAll('#area-button')[0]


var square_result = function(event) {
	var number_1 = document.getElementById('square-input').value;
	var result = Math.sqrt( number_1 );
	result = result.toFixed(2);

	var solution_div = document.getElementById('solution')
	var newSolution = document.createElement('h2');
	var solutionText= document.createTextNode(result);
	newSolution.appendChild(solutionText);
	solution_div.appendChild(newSolution);

	alert("The solution is " + result + "!")
}
square_button.addEventListener('click', square_result);


var half_result = function(event) {
	var number_1 = document.getElementById('half-input').value;
	var result = number_1 / 2 ;
	result = result.toFixed(2);

	var solution_div = document.getElementById('solution')
	var newSolution = document.createElement('h2');
	var solutionText= document.createTextNode(result);
	newSolution.appendChild(solutionText);
	solution_div.appendChild(newSolution);

	alert("The solution is " + result + "!")
}
half_button.addEventListener('click', half_result);

var percent_result = function(event) {
	var number_1 = document.getElementById('percent1-input').value;
	var number_2 = document.getElementById('percent2-input').value;
	var result = number_1 * number_2;
	result = result.toFixed(2);


	var solution_div = document.getElementById('solution')
	var newSolution = document.createElement('h2');
	var solutionText= document.createTextNode(result);
	newSolution.appendChild(solutionText);
	solution_div.appendChild(newSolution);

	alert("The solution is " + result + "!")
}
percent_button.addEventListener('click', percent_result);
// percent_button.addEventListener('')

var area_result = function(event) {
	var number_1 = document.getElementById('area-input').value;
	var result = Math.PI * Math.pow(number_1, 2) ;
	result = result.toFixed(2);

	var solution_div = document.getElementById('solution')
	var newSolution = document.createElement('h2');
	var solutionText= document.createTextNode(result);
	newSolution.appendChild(solutionText);
	solution_div.appendChild(newSolution);

	alert("The solution is " + result + "!")
}
area_button.addEventListener('click', area_result);


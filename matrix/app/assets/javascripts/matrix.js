$(document).ready(function() {
	$('#add_number').on('click', matrix.addNumber);
	$('#square').on('click', matrix.square);
	$('#calculate').on('click', matrix.calculate);
	$('#start').on('click', matrix.startSpew);
	$('#stop').on('click', matrix.stopSpew);
});


var matrix = {};

matrix.numbers = [];
matrix.spewTimer;

matrix.startSpew = function() {
	matrix.stopSpew();
	matrix.spewTimer = setInterval(matrix.generateRandom, 100);
};

matrix.stopSpew = function() {
	clearInterval(matrix.spewTimer);
};


matrix.generateRandom = function() {
	matrix.n = _.random(1000);
	matrix.numbers.push(matrix.n);
	matrix.showBox(matrix.n);
};

matrix.addNumber = function() {
	matrix.number = parseInt( $('#number').val() ); 		// You can also use ~~ rather than parseInt
	matrix.numbers.push(matrix.number);

	matrix.showBox(matrix.number);

	$('#number').val('').focus(); 	// Clearing out the div to value of nothing, and focusing the cursor on it
};

matrix.square = function() {
	matrix.squareValue = function(i) {
		return i * i;
	};
	matrix.numbers = _(matrix.numbers).map(matrix.squareValue);
	matrix.showBoxes();
};

matrix.calculate = function() {
	matrix.numbers = _(matrix.numbers).map(matrix.funkyCalc);
	matrix.showBoxes();
};

matrix.funkyCalc = function(i) {
	equation = $('#number').val();
	return eval(equation);
};

matrix.showBox = function(i) {
	$box = $('<div></div>').addClass('box');
	$box.text( i );
	$('#boxes').prepend($box);

};

matrix.showBoxes = function() {
	matrix.emptyBoxes();
	_(matrix.numbers).each(matrix.showBox);
};

matrix.emptyBoxes = function() {
	$('#boxes').empty();
};
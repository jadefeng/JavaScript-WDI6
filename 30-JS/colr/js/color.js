console.log("hello world", $);    // Putting in the $ to make sure that it has access to jQuery

$(document).ready(function() {
	var $colr = $('#colr');

	var rgb;  // Declaring here so it can be accessed anywhere

	// Printing stuff if the mouse moves
	$(window).mousemove(function( event) {
		// console.log(event.pageX, event.pageY)
		var red = Math.round(event.pageX * 255 / window.innerWidth);
		var green = Math.round(event.pageY* 255 / window.innerHeight);
		var blue = Math.round((red + green) / 2);
		rgb = 'rgb(' + [red, green, blue].join(',') + ')'; 		// rgb('red', 'green', 'blue')
		// $colr.val( rgb ) ; 											// Need to turn into string since .val only takes one string
		$('body').css('background-color', rgb);
	});

	$(window).click(function (event) {
		$colr.val(rgb);
		$colr.focus();	
	})




	// MOUSEOVER

  $('html').mousemove(function ( event ) {
    
    setTimeout(function () {  
      
      //generate random color
      var hue = 'rgb('
         + (Math.floor(Math.random() * 255)) + ','
         + (Math.floor(Math.random() * 0)) + ','
         + (Math.floor(Math.random() * 150)) + ')';
      
      //generate random number
      var numRand = (Math.floor(Math.random()*30)+1);
     
      //create and style dots
      var $div = $('<div></div>').css({
        'position': 'absolute',
        'top': event.pageY,
        'left': event.pageX,
        'width': numRand+'px',
        'height': numRand+'px',
        'background-color': hue,
        'border-radius': numRand+'px',
        'opacity': Math.random(),
        'z-index': -1
      }).appendTo('body');
    
      // Remove each element after 2 seconds.
      setTimeout(function () {
        $div.remove();
      }, 1000);
    }, 10);
    
  });

});
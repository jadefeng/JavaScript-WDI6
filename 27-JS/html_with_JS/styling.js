
var body = document.getElementsByTagName('body')[0];
body.style.fontFamily = 'Arial';

var nickname_span = document.getElementById('nickname');
nickname_span.innerHTML = "Jadenator";

var favorites_span = document.getElementById('favorites');
favorites_span.innerHTML = "Ice cream, gelato, sorbet";

var hometown_span = document.getElementById('hometown');
hometown_span.innerHTML = "Sydney, Australia";

var list_items_array = document.getElementsByTagName('li')
for (var i = 0; i < list_items_array.length; i++) {
	list_items_array[i].className = "listitem";
}

var class_list_items_array = document.getElementsByClassName('listitem')
for (var i = 0; i < class_list_items_array.length; i++) {
	class_list_items_array[i].style.color = 'red';
}

var new_image = document.createElement('img');
new_image.src = 'http://www.fillmurray.com/300/300';
new_image.style.border = '5px dashed blue';
new_image.style.position = 'absolute';
new_image.style.right = 0;
new_image.style.top = 0;
body.appendChild(new_image);

var heading = document.querySelectorAll('h1')
heading[0].innerHTML = "HACKED BY JADE FENG"
var button = document.querySelectorAll('button')[0];

var makeMadLib = function(event) {
	var noun = document.getElementById("noun").value;
	var adjective = document.getElementById("adjective").value;
	var person = document.getElementById("person").value;
	var story_string = person + " loves " + adjective + " " + noun + "!"

	document.getElementById('story').innerHTML = story_string

	// var story_div = document.getElementById('story');
	// var newStory = document.createElement('h2');
	// var storyText = document.createTextNode(story_string);
	// newStory.appendChild(storyText);
	// story_div.appendChild(newStory);

	// alert(person + " loves " + adjective + " " + noun + "!");

}

button.addEventListener('click', makeMadLib);
window.addEventListener('keypress', function(event) {
	if (event.which === 13) {
		makeMadLib();
	}
	// console.log(event.which)
})
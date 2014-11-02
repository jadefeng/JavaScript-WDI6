// The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movie1 = {
	title: "Harry Potter and the Philosopher's Stone",
	duration: 160,
	stars: ["Harry Potter", "Ron Weasley", "Hermione Granger"]
}

var movie2 = {
	title: "Hunger Games",
	duration: 120,
	stars: ["Katniss Everdeen", "Peeta Mellark"]
}

var movie3 = {
	title: "Snow White",
	duration: 90,
	stars: ["Snow White", "Prince Charming", "Seven Dwarfs"]
}

var movie_info = function(movie_list) {
	for (var i = 0; i < movie_list.length; i++) {
		var description = [movie_list[i].title, "lasts for", movie_list[i].duration.toFixed(0), "minutes.", "Stars:", movie_list[i].stars.join(', ')].join(' ')
		description += '.'
		console.log(description)
		
	}
}

movie_info([movie1, movie2, movie3]);
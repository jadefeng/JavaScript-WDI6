// The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var hobbit = {
	title: "The Hobbit",
	author: "J.R.R. Tolkien",
	alreadyRead: 1
}
var fellowship = {
	title: "The Fellowship of the Ring",
	author: "J.R.R. Tolkien",
	alreadyRead: 1
}
var towers = {
	title: "The Two Towers",
	author: "J.R.R. Tolkien",
	alreadyRead: 0
}
var king = {
	title: "The Return of the King",
	author: "J.R.R. Tolkien",
	alreadyRead: 0
}


var list_declaration = function(book_list){
	for (var i = 0; i < book_list.length; i++){
		if (book_list[i].alreadyRead == 1) {
			var status = "You already read "
		} else {
			var status = "You still need to read "
		}
	console.log( status + book_list[i].title + " by " + book_list[i].author)
	}
}

list_declaration( [hobbit, fellowship, towers, king] )
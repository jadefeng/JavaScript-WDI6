word = "listen"
list = %w(enlists google inlets banana)

index_number = list.index { |word_anagram|
	word_anagram.chars.sort.join == word.chars.sort.join
}

print list[index_number]
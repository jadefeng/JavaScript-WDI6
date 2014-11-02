require 'pry'
total_seeds = 0
for i in 1..64 
	seed_number = 2**(i-1)
	total_seeds += seed_number
	puts "There are #{seed_number} seeds on square #{i}"
end

def seed_count(square_number) 
	number_of_seeds = 2**(square_number-1)
	puts "There are #{number_of_seeds} seeds on square #{square_number}."
end

puts "There are #{total_seeds} on the total chess board."

binding.pry
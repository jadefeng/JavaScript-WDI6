window.kitten = "you can see me globally!" 	# Add the window prefix to attach kittens to be a global variable

items = ['beer', 'wine', 'vodka', 'whiskey', 'gin']

fridge = "full of alcohol"

alcoholic = true if fridge == 'full of alcohol'

# console.log alcoholic

if fridge == 'full of alcohol' and items.length > 0
	console.log 'you love alcohol'

# Sexy function syntax lolz
drinkBeer = ->  							# Syntax for function is ->, which is a thin arrow
	alcohol = items.pop()
	console.log 'Drink ' + alcohol
	# console.log 'buttercup'

while items.length > 0 then drinkBeer()

# For statement
for item in items
	console.log item

# Ranges
for i in [0..5]
	console.log i

for i in [5..0]
	console.log i 

## Interesting how it allows for "WHEN item ISNT blah"
for item in items when item isnt 'wine'
	console.log "You love " + item


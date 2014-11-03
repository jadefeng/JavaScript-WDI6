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


fridge = 
	beer: ['beer1', 'beer2', 'beer3']
	chips: ['bbq', 'potato', 'salt and vinegar']
	consume: (item) ->
		@beer.pop()			# Function which takes an argument item, also can be replaced with this.beer.pop()


fridge.consume fridge.chips
console.log fridge


$(document).ready ->
	$('button').on 'click', ->
		console.log "Thank you for clicking"

hedgehogs = [1..10]



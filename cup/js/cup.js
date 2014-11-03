var cup = {
	field: ["Admire Rakti", "Fawkner", "Red Cadeaux", "Protectionist", "Sea Moon", "Seismos", "Junoob", "Royal Diamond", "Gatewood", "Mutual Regard", "Who Shot Thebarman", "Willing Foe", "My Ambivalent", "Precedence", "Brambles", "Mr Oceirin", "Au Revoir", "Lidari", "Opinion", "Araldo", "Lucia Valentina", "Unchain My Heart", "Signoff"],
	
	field2: null,
	field5: null,

	sweep2: {},
	sweep5: {},

	init: function() {
		this.field2 = _(this.field).shuffle(); 
		this.field5 = _(this.field).shuffle(); 

		cup.showField();
		cup.showSweepsRemaining();
	},

	showSweepsRemaining: function() {
		var stakes2 = this.field2.length;
		var stakes5 = this.field5.length;

		$('#stakes2').text(stakes2);
		$('#stakes5').text(stakes5);		
	},

	showField: function() {
		_(this.field).each(function (horse) {
			var $li = $('<li/>')
			$li.text(horse);
			$('.field ul').append($li);
		});
	},

	placeBet: function() {
		var $this = $(this);
		var gambler = $.trim(('#gambler').val());
		$('#gambler').val('');
		if (! gambler) { // do not execute if there is no gambler
			return;
		}
		if ($this.is('#bet2')) {
			cup.buyStake2(gambler);
		} else {
			cup.buyStake5(gambler);
		}
	},
	buyStake2: function(gambler) {
		// console.log("Buying a $2 stake for ", gambler);
		var horse = this.field2.pop();
		if(! horse) {
			alert("Sold out");
			return;
		}

		this.sweep2[horse] = gambler;
		$('#purchase').text([gambler], "bought", horse].join(' '));
		this.showSweepsRemaining();
	},

	buyStake5: function(gambler) {
		console.log("Buying a $5 stake for ", gambler);
	},
};

// To get the horses names
// http://www.racenet.com.au/melbourne-cup/field-formguide.aspx
// $('.odds:first p').map(function (i, m) { $(m).find('span').remove(); return $(m).text().replace(/\d+. /, '') }).get() 

$(document).ready(function () {
	cup.init();

	$('#bet2', '#bet5').on('click', cup.placeBet);
});
// A possible approach:
var accounts = {
  checking: {
    balance: 0,
    deposit: function (amount) {
    	if (amount > 0) {
    		accounts.checking.balance += amount;
    	}
    },
    withdraw: function (amount) {
    	if (amount <= accounts.checking.balance && amount > 0) {
    		accounts.checking.balance -= amount;
    	} else if (amount <= (accounts.checking.balance + accounts.savings.balance) && amount > 0) {
    		accounts.savings.balance -= (amount - accounts.checking.balance);
    		accounts.checking.balance = 0;
    	}
    }
  },

  savings: {
    balance: 0,
    deposit: function (amount) {
    	if (amount > 0) {
    		accounts.savings.balance += amount;
    	}
    },
    withdraw: function (amount) {
    	if (amount <= accounts.savings.balance && amount > 0) {
    		accounts.savings.balance -= amount;
    	} else if (amount <= (accounts.savings.balance + accounts.checking.balance) && amount > 0) {
    		accounts.checking.balance -= (amount - accounts.savings.balance);
    		accounts.savings.balance = 0;
    	}
    }
  },
};

var ATM;

$(document).ready(function() {
	ATM = {
		ui: {
			$checkingDeposit: $('#checkingDeposit'),
			$checkingWithdraw: $('#checkingWithdraw'),
			$checkingAmount: $('#checkingAmount'),
			$checkingBalance: $('#balance1'),
			$checkingAccount: $('#checkingAccount'),
			$savingsDeposit: $('#savingsDeposit'),
			$savingsWithdraw: $('#savingsWithdraw'),
			$savingsAmount: $('#savingsAmount'),
			$savingsBalance: $('#balance2'),
			$savingsAccount: $('#savingsAccount'),			
		},
		updateChecking : function() {
			ATM.ui.$checkingBalance.text("$" + accounts.checking.balance);
			ATM.ui.$checkingAmount.val('');

			if (accounts.checking.balance === 0) {
				ATM.ui.$checkingAccount.addClass('zero');
			} else {
				ATM.ui.$checkingAccount.removeClass('zero');
			}
		},
		updateSavings : function() {
			ATM.ui.$savingsBalance.text("$" + accounts.savings.balance);
			ATM.ui.$savingsAmount.val('');

			if (accounts.savings.balance === 0) {
				ATM.ui.$savingsAccount.addClass('zero');
			} else {
				ATM.ui.$savingsAccount.removeClass('zero');
			}
		}
	};
	ATM.ui.$checkingDeposit.on('click',function(){
		var amount = parseInt(ATM.ui.$checkingAmount.val());
		accounts.checking.deposit(amount);
		ATM.updateChecking();
	});

	ATM.ui.$savingsDeposit.on('click',function(){
		var amount = parseInt(ATM.ui.$savingsAmount.val());
		accounts.savings.deposit(amount);
		ATM.updateSavings();
	});

	ATM.ui.$checkingWithdraw.on('click',function(){
		var amount = parseInt(ATM.ui.$checkingAmount.val());
		accounts.checking.withdraw(amount);
		ATM.updateChecking();
		ATM.updateSavings();
	});	

	ATM.ui.$savingsWithdraw.on('click',function(){
		var amount = parseInt(ATM.ui.$savingsAmount.val());
		accounts.savings.withdraw(amount);
		ATM.updateSavings();
		ATM.updateChecking();
	});	

	ATM.updateChecking(); 		// Update checking once the page is loaded.
	ATM.updateSavings();

});
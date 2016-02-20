#!/usr/bin/env node

// Exits 0 if the argument was a valid card number
// Exits 1 if the argument was an invalid card number
// Exits 2 if the argument was not a card number or if there was no argument

if(!process.argv[2]){ // Was there an argument?
	console.log("You must provide a credit card number to check.");
	process.exit(2);
}

number = process.argv[2];

if(/\d{16}/.test(number)) { // Is the argument a card number?
	var checkdigit = require('./checkdigit.js');
	validNumber = checkdigit(number);

	if(validNumber) {
		console.log("The provided credit card number is valid.");
		process.exit(0);
	} else {
		console.log("The provided credit card number is invalid.");
		process.exit(1);
	}
} else {
	console.log("The provided argument was not a credit card number");
	process.exit(2);
}

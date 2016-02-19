// Please not that just because a card number is 'valid' it does not necessarily have to be an actual card.
// The checksum hashing function is quite vulnerable to collision attacks.

// For an explanation of how it works, see https://www.youtube.com/watch?v=hWkAe9FsfiE

var checksum = function (number) {
	checksum = 0;
	
	for(i = 0; i < 15; i++) {
		digit = parseInt(number.charAt(i));
		if(i % 2 == 0) {
			// If the number is five or bigger, it times two will b 10 + some single digit number
			if(digit >= 5){
				checksum += 1;
			}
			checksum += ((2*digit) % 10);
		} else {
			checksum += digit;
		}
	}

	// Find the number we need to add to the checksum to make it mod 10 = 0
	checkdigit = (10 - (checksum % 10)) % 10;

	return (parseInt(number.charAt(15)) == checkdigit);
}

module.exports = checksum; // For Node

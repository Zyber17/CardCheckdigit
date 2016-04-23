#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "checkdigit.h"

int main(int argc, char const *argv[]) {
	if (argc != 2) {
		printf("You must provide one card number to check.\n");
		return 2;
	}
	if (strlen(argv[1]) != 16) {
		printf("Invalid credit card number.\n");
		return 2;
	}
	if (checkdigit(strtol(argv[1], NULL, 10))) {
		printf("The provided credit card number is valid.\n");
		return 0;
	} else {
		printf("The provided credit card number is invalid.\n");
		return 1;
	}
}

int checkdigit(long int num) {
	int sum = 0;
	int check = num % 10; // Get last digit, i.e. the checkdigit
	num /= 10; // Integer math truncates, so this just strips off the last digit

	for (int i = 1; i < 16; ++i) {
		int current = num % 10;

		// If the number is five or bigger, it times two will be 10 + some single digit number
		if (i % 2) {
			if (current >= 5) {
				sum += 1;
			}
			sum += ((2*current) % 10);
		} else {
			sum += current;
		}

		num /= 10;
	}
	
	// Find the number we need to add to the checksum to make it mod 10 = 0
	sum = (10 - (sum % 10)) % 10;

	return (sum == check ? 1 : 0);
}
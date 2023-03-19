//* Code for Alphebetical, Numerical, and Special Characters
var specialCharacters = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"#",
	"$",
	"^",
	"?",
	":",
	",",
	")",
	"(",
	"}",
	"{",
	"]",
	"[",
	"~",
	"-",
	"_",
	".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

var upperCasedCharacters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

//* fuction for password options prompt as well as password length being minimum of 8 and maximum of 128.

function getPasswordOptions() {
	var length = parseInt(prompt("How many characters would you like your password to contain?"), 10);

	if (Number.isNaN(length)) {
		alert("Password length must be provided as a number");
		return null;
	}

	if (length < 8) {
		alert("Password length must be at least 8 characters");
		return null;
	}

	if (length > 128) {
		alert("Password length must less than 129 characters");
		return null;
	}

	var hasSpecialCharacters = confirm("Include Special Characters?");

	var hasNumericCharacters = confirm("Include Numerical Characters?");

	var hasLowerCasedCharacters = confirm("Include Lowercase Characters?");

	var hasUpperCasedCharacters = confirm("Include Uppercase Characters?");

	if (
		hasSpecialCharacters === false &&
		hasNumericCharacters === false &&
		hasLowerCasedCharacters === false &&
		hasUpperCasedCharacters === false
	) {
		alert("Must select at least one character type");
		return null;
	}

	var passwordOptions = {
		length: length,
		hasSpecialCharacters: hasSpecialCharacters,
		hasNumericCharacters: hasNumericCharacters,
		hasLowerCasedCharacters: hasLowerCasedCharacters,
		hasUpperCasedCharacters: hasUpperCasedCharacters,
	};

	return passwordOptions;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

var NumericalChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseChars = [
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

var upperCaseChars = [
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
	var length = parseInt(prompt("Requested Length of Password?"), 10);

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

	var hasSpecialChars = confirm("Include Special Characters?");

	var hasNumericalChars = confirm("Include Numerical Characters?");

	var hasLowerCaseChars = confirm("Include Lowercase Characters?");

	var hasUpperCaseChars = confirm("Include Uppercase Characters?");

	if (
		hasSpecialChars === false &&
		hasNumericalChars === false &&
		hasLowerCaseChars === false &&
		hasUpperCaseChars === false
	) {
		alert("Must select at least one character type");
		return null;
	}

	var passwordOptions = {
		length: length,
		hasSpecialChars: hasSpecialChars,
		hasNumericalChars: hasNumericalChars,
		hasLowerCaseChars: hasLowerCaseChars,
		hasUpperCaseChars: hasUpperCaseChars,
	};

	return passwordOptions;
}

function getRandom(arr) {
	var randIndex = Math.floor(Math.random() * arr.length);
	var randElement = arr[randIndex];

	return randElement;
}

//* Fucntion that generates the password and allows it to print to index.html.

function generatePassword() {
	var options = getPasswordOptions();

	var result = [];

	var possibleChars = [];

	var guaranteedChars = [];

	if (!options) return null;

	if (options.hasSpecialChars) {
		possibleChars = possibleChars.concat(specialCharacters);
		guaranteedChars.push(getRandom(specialCharacters));
	}

	if (options.hasNumericalChars) {
		possibleChars = possibleChars.concat(NumericalChars);
		guaranteedChars.push(getRandom(NumericalChars));
	}

	if (options.hasLowerCaseChars) {
		possibleChars = possibleChars.concat(lowerCaseChars);
		guaranteedChars.push(getRandom(lowerCaseChars));
	}

	if (options.hasUpperCaseChars) {
		possibleChars = possibleChars.concat(upperCaseChars);
		guaranteedChars.push(getRandom(upperCaseChars));
	}

	for (var i = 0; i < options.length; i++) {
		var possibleCharacter = getRandom(possibleChars);

		result.push(possibleCharacter);
	}

	for (var i = 0; i < guaranteedChars.length; i++) {
		result[i] = guaranteedChars[i];
	}

	return result.join("");
}
var generateBtn = document.querySelector("#generate");

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

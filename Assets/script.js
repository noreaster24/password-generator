// Generate the password
function generatePassword(useUpperCase, useSymbolChar, useNumberChar, passwordLength) {
  // Ask the user which character types they'd like to use
  var useUpperCase = confirm("Would you like to use uppercase letters?");
  var useNumberChar = confirm("Would you like to use numbers?");
  var useSymbolChar = confirm("Would you like to use special symbols?");
  var passwordLength = prompt("How many characters would you like your password to be?");
  console.log(passwordLength);
  debugger;
  // Confirm password meets the length requirements
  if (passwordLength > 7 && passwordLength < 129) {
    // Default characters to lowercase
    var charCodes = lowerCase
    // If uppercase characters are accepted, join with string
    if (useUpperCase) charCodes = charCodes.concat(upperCase);
    // If symbol characters are accepted, join with string
    if (useSymbolChar) charCodes = charCodes.concat(symbolChar);
    // If number characters are accepted, join with string
    if (useNumberChar) charCodes = charCodes.concat(numberChar)
        
    // String loop based on password length
    var passwordCharacters = []
    for (var i = 0; i < passwordLength; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
  }
  else {
    alert("You need to choose a password that is between 8 and 128 characters");
  }
};

// Assign array to each character type
var lowerCase = arrayFromLowToHigh(97, 122);
var upperCase = arrayFromLowToHigh(65, 90);
var numberChar = arrayFromLowToHigh(48, 57);
var symbolChar = arrayFromLowToHigh(33, 47);
var characterSet = "";

// Create an array for the character types
function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
};

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
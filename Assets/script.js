// Generate the password
function generatePassword() {
  debugger;
  var passwordLength = prompt("How many characters would you like your password to be?");
  console.log(passwordLength);
  // Generate random characters
  function randomCharacters() {
    if (useUpperCase === true) {
      getUpperCase();
    }
    if (useLowerCase === true) {
      getLowerCase();
    }
    if (useNumberChar === true) {
      getNumbers();
    }
    if (useSymbolChar === true) {
      getSymbol()
    }
  }
  if (passwordLength > 7 && passwordLength < 129) {
    for (var i = 0; i < passwordLength.length; i++) {
      randomCharacters();
    }
    return randomCharacters;
  }
  else {
    alert("You need to choose a password that is between 8 and 128 characters");
  }
};

// Is this needed?
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwyz";
var numberChar = "0123456789";
var symbolChar = "!@#$%^&*()_+=-/.,?><:;"
var characterSet = "";

// Ask the user which character types they'd like to use
var useUpperCase = confirm("Would you like to use uppercase letters?");
var useLowerCase = confirm("Would you like to use lowercase letters?");
var useNumberChar = confirm("Would you like to use numbers?");
var useSymbolChar = confirm("Would you like to use special symbols?");


// Generate character functions
function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}
function getSymbol() {
  return String.fromCharCode(Math.floor(Math.random()));
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
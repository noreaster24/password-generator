// Generate the password
function generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol) {
    var hasLower = confirm("Would you like to use lowercase letters?");
    var hasUpper = confirm("Would you like to use uppercase letters?");
    var hasNumber = confirm("Would you like to use numbers?");
    var hasSymbol = confirm("Would you like to use special symbols?");
    var passwordLength = prompt("How many characters would you like your password to be?");
    console.log(passwordLength);
    debugger;
    let generatedPassword = '';

    var typesCount = lower + upper + number + symbol;
    console.log('typesCount: ', typesCount);

    var TypesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    console.log('typesArray: ', typesArr);
    
}

var randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Random character functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 210) + 48);
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*()_+.,;=-';
    return symbols[Math.floor(Math.random() * symbols.length)];
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
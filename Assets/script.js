// Assignment Code
var generateBtn = document.querySelector("#generate");

// characters for the generator
var specialCharactersList = "!@#$%^&*()"; 
var numberList = "0123456789";
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var numbers = confirm("Do you want numbers in your password?");

  var special = confirm("Do you want special characters in your password?");

  // Checks to make sure user selected ok for all and uses empty minimums from above

  var passwordChoices = ""
  if (numbers === true) {
    passwordChoices = passwordChoices + numberList
  }

  if (lowerCases === true) {
  passwordChoices = passwordChoices + lowerCaseList
  }

  if (upperCases === true) {
  passwordChoices = passwordChoices + upperCaseList
  }

  if (special === true) {
  passwordChoices = passwordChoices + specialCharactersList
  }
  console.log(passwordChoices)

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < parseInt(passwordLength); i++) {
    var randomNumberPicked = Math.floor(Math.random() * passwordChoices.length);

    randomPasswordGenerated += passwordChoices[randomNumberPicked]
    console.log(randomPasswordGenerated)

  }

 
  console.log(randomPasswordGenerated)
  return randomPasswordGenerated;

}
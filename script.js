// Assignment code here
// Assignment code here
//validate password function 
//var special characters
var specialchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", " < ", "=", " > ", " ? ", "@", " ^ ", "_", "~"];
//var lower case
var lowerchar = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upper case
var upperchar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var number
var number = ["1", "2", "3", "4", "5", "6", "7", "8","9","0"];
//mathrandom
// need a comfirm for each var
// step 1 validate number between 1 -128
// need prompt to confirm 

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

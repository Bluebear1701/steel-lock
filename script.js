// Assignment code here
//validate password function 
var passwordlength
var confirmspecial 
var confirmlower
var confirmupper
var confirmnumber
//var special characters
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", " < ", "=", " > ", " ? ", "@", " ^ ", "_", "~"];
//var lower case
var lower = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upper case
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var number
var number = ["1", "2", "3", "4", "5", "6", "7", "8","9","0"];

//function to generate a random numeric value
var randomNumber = function () {
var value = Math.floor(Math.random() * 10) + 128

return value;
};
// need a comfirm for each var if, if else
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


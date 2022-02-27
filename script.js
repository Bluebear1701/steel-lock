// Assignment code here
//validate password function 
var passwordlength

//var special characters
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", " < ", "=", " > ", " ? ", "@", " ^ ", "_", "~"];
//var lower case
var lower = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upper case
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var number
var number = ["1", "2", "3", "4", "5", "6", "7", "8","9","0"];

//function to generate a random numeric value
for(var i = 0; i <= passwordlength; i++)
var randomnumber = function () {
var password = Math.floor(Math.random() );

var passwordlength = (".");

return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 passwordlength = window.prompt("Choose a password lenght between 1 and 128")
 if (passwordlength < 8 || passwordlength >128) {
   var passwordlength = window.alert ("Incorrect length"+ passwordlength);   
 }
  else if (passwordlength >= 8 || passwordlength <=128)
  var special = confirm ("Would you like to use a Special character?");
  var lower = confirm ("Would like to use a lowercase character?");
  var upper = confirm ("Would like to use an Uppercase character?");
  var number = confirm ("Would you like to use Numbers?")

  if (special && lower && upper && number) {
    
  }

 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


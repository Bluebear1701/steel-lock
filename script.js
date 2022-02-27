// Assignment code here
//validate password function 
var passwordlength

//var special characters
var specialarr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "<", "=", ">", " ? ", "@", "^", "_", "~"];
//var lower case
var lowerarr = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upper case
var upperarr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var number
var numberarr = ["1", "2", "3", "4", "5", "6", "7", "8","9","0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //console.log ("button clicked")
  return password
}
// Write password to the #password input
function writePassword() {
 passwordlength = window.prompt("Choose a password lenght between 8 and 128")
 if (passwordlength < 8 || passwordlength >128) {
   var passwordlength = window.prompt ("Incorrect length try again");   
 }
else if (passwordlength >= 8 || passwordlength <=128){  
  var special = confirm ("Would you like to include Special characters?");
  console.log("Special")
  var lower = confirm ("Would like to include a lowercase character?");
  console.log("Lower")
  var upper = confirm ("Would like to include an Uppercase character?");
  console.log("upper")
  var number = confirm ("Would you like to include Numbers?")
  console.log("number")


var preferences=[]
//alts 
   if (lower) {
    preferences = preferences.concat(lowerarr);
    console.log(preferences); 
  }

   if (upper) {
      preferences = preferences.concat(upperarr);
      console.log(preferences);
  }
  
   if (number) {
    preferences = preferences.concat(numberarr);
    console.log(preferences);
  }
  
  if (special) {
    preferences = preferences.concat(specialarr);
    console.log(preferences);
  }
var password = ""

  for(var i = 0; i < passwordlength; i++) {
    var random = Math.floor (Math.random () * preferences.length)
    var char = preferences [ random ]
password = char + password
  }

  

 
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


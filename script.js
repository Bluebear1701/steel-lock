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
var password = function () {
var password = Math.floor(Math.random() );

var passwordlength = (".");


};
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
else if (passwordlength >= 8 || passwordlength <=128)  
  var special = confirm ("Would you like to include Special characters?");
  console.log("Special")
  var lower = confirm ("Would like to include a lowercase character?");
  console.log("Lower")
  var upper = confirm ("Would like to include an Uppercase character?");
  console.log("upper")
  var number = confirm ("Would you like to include Numbers?")
  console.log("number")

};
// all 4 preferences
  if (special && lower && upper && number) {
    preferences = special.concat(lower, upper, number);
    console.log(preferences); 
  }
//  3 prefences 
else if (special && lower && upper) {
  preferences = special.concat(lower, upper);
  console.log(preferences);
} 

else if (special && lower && upper && number) {
    preferences = special.concat(lower, number);
    console.log(preferences);
}

else if (special && lower && upper && number) {
  preferences = special.concat(upper, number);
  console.log(preferences);
}

else if (special && lower && upper && number) {
  preferences = upper.concat(lower, number);
  console.log(preferences);
} 

  // 2 preferences
  else if (special && lower && upper && number) {
    preferences = special.concat(lower);
    console.log(preferences); 
  }

  else if (special && lower && upper && number) {
      preferences = special.concat(upper);
      console.log(preferences);
  }
  
  else if (special && lower && upper && number) {
    preferences = special.concat(number);
    console.log(preferences);
  }
  
  else if (special && lower && upper && number) {
    preferences = lower.concat(upper);
    console.log(preferences);
  }
  
  else if (special && lower && upper && number) {
    preferences = lower.concat(number);
    console.log(preferences);
  }
  
  //1 preferences
  else if (special && lower && upper && number) {
    preferences = special;
    console.log(preferences);
  }  
    else if (special && lower && upper && number) {
      preferences = upper;
      console.log(preferences);
  } 

  else if (special && lower && upper && number) {
    preferences = number;
    console.log(preferences);
  }  

  else if (special && lower && upper && number) {
    preferences = lower;
    console.log(preferences);
  } 
var prefences=[]
//alts 
   if (lower) {
    preferences = preferences.concat(lower);
    console.log(preferences); 
  }

   if (upper) {
      preferences = preferences.concat(upper);
      console.log(preferences);
  }
  
   if (number) {
    preferences = preferences.concat(number);
    console.log(preferences);
  }
  
  if (special) {
    preferences = preferences.concat(special);
    console.log(preferences);
  }
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


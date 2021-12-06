// Assignment code here
function generatePassword(){
var passwordOptions = {
     "numbers":['1','2','3','4','6','7','8','9','0'],
     "symbols" :[ "!","@","#","$","%","&","&","*","^"]
   };

var lengthValidate = function(value){
  debugger;
  console.log(value);
  //length comes in a string.  if it is NAN, returns nulls
  password = Number(value);
  //if the password is null, tell user and call self again
  if (!password){
    window.alert("Invalid input. Try Again")
    x = window.prompt("select the length of your password between 8 and 128")
    lengthValidate(x)
    
  }
  //check to see if password is 8 or more or 128 or less. if not tell user and recall function
  else if (password > 129 || password < 7 ){
     window.alert("you have selected " + password + " this is invalid. try again")
    x = window.prompt("select the length of your password between 8 and 128")
    lengthValidate(x)
    

  }
  //password is valid
  else{
   window.alert("You have selected  " + password + " this is a valid  password length")
   return password
  }
}
//function to get a random int between 0 and a unspecified number
var getRandom = function(max){
    var randwhole =   Math.floor(Math.random() * max);
return randwhole
   };
//default is to includ lower case leters
password_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   
   var passwordLength = window.prompt("Select a password length between 8 and 128 ");
   lengthValidate(passwordLength)
   //conditional - if true append the numnber array to the password_array
   var useNumbers = window.confirm("do you want to include numbers?")
   if (useNumbers){
     password_array = password_array.concat(passwordOptions.numbers)
   }
   //condition, if true, add the symbols to password array
var useSymbols = window.confirm("do you want to include symbols?")
if (useSymbols){
   password_array = password_array.concat(passwordOptions.symbols)
}

//todo: add conditional for capital letters.  If true, use javascript equivlent of list comprehsnsion to add an uppercase to array

var password = ''
//for loop using the the passwordlength choice
for ( var i = 0 ; i < passwordLength; i++){
  //for each iteration, append a random character from password array 
password = password + password_array[getRandom(password_array.length)]
}

window.alert(password)
return password

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  console.log("passwordText.value: ",passwordText.value)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var passwordOptions = { "letters": [],
     "numbers":['1','2','3','4','6','7','8','9','0'],
     "symbols" :[ "!","@","#","$","%","&","&","*","^"]
   };

var lengthValidate = function(value){
  debugger;
  console.log(value);
  password = Number(value);

  if (!password){
    window.alert("Invalid input. Try Again")
    x = window.prompt("select the length of your password between 8 and 128")
    lengthValidate(x)
    
  }
  else if (password > 129 || password < 7 ){
     window.alert("you have selected " + password + " this is invalid. try again")
    x = window.prompt("select the length of your password between 8 and 128")
    lengthValidate(x)
    
    
  }
  else{
   window.alert("You have selected  " + password + " this is a valid  password length")
   return password
  }
}

var getRandom = function(max){
    var randwhole =   Math.floor(Math.random() * max+1);
return randwhole
   };

password_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   
   var passwordLength = window.prompt("Select a password length between 8 and 128 ");
   lengthValidate(passwordLength)

   var useNumbers = window.confirm("do you want to include numbers?")
   if (useNumbers){
     password_array.concat(passwordOptions.numbers)
   }
var useSymbols = window.confirm("do y ou want to include symbols?")
if (useSymbols){
  password_array.concat(passwordOptions.symbols)
}
password = ''
for ( var i = 0 ; i < passwordLength; i++){
password = password + password_array[getRandom(password_array.length)]
}
window.alert(password)
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

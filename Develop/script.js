  var passLen = 8; //Starting value limit of 8
  var passArr = []; //Empty array to store generated password

//Characters
  var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var charsCap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var nums = ['1','2','3','4','5','6','7','8','9','0'];
  var charSpec = ['!','@','#','$','%','^','&','*','(',')','-','=','_','+','[',']','{','}',';','.','/']
  


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //If generated the right prompts, password will generate
  if (prompts()) { //Returns true or false
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

function generatePassword() {
var ranPass = '';

  for (var i = 0; i < passLen; i++) {
    ranChar = Math.floor(Math.random()*passArr.length)
    //Math.floor returns the users maximum input (i.e. 50 characters) from the prompts function.
    //Math.random returns a random index from each prompt (i.e. char, num, etc.).
    ranPass = ranPass + passArr[ranChar];
  }
  //Displays random password
  return ranPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt Function
function prompts() {
  //Prompts the user a password length prompt. Turns input into an integer.
  passArr = [];
  passLen = parseInt(prompt("How long would you like your password? (8-128 characters)"));

  if (isNaN(passLen) || passLen < 8 || passLen > 128) {
    alert("Input has to be a number 8 - 128.");
    return false;
  }

  if (confirm("Lowercase letters?")) {
    passArr = passArr.concat(chars);
  }
  if (confirm("Uppercase letters?")) {
    passArr = passArr.concat(charsCap);
  }
  if (confirm("Numbers?")) {
    passArr = passArr.concat(nums);
  }
  if (confirm("Special characters?")) {
    passArr = passArr.concat(charSpec);
  }
  return true;
}
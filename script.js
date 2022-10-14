// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {

  const passwordOptions = {
    num: "1234567890",
    specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };
  const userSelect = [];
  let passInfo = ""



  let passwordLength = parseInt(prompt("enter a number between 8-128 for the password length"));
  if(passwordLength > 128 || passwordLength <= 8){
      passwordLength = parseInt(prompt("enter a number between 8-128 for the password length"));}

  const getLowerCase = window.confirm("Would you like to include LOWERCASE?")
  if(getLowerCase){
    userSelect.push(passwordOptions.lowerCase);
    passInfo += passwordOptions.lowerCase;
    console.log(userSelect)
  };

  const getUpperCase = window.confirm("Would you like to include UpperCase?")
  if(getUpperCase){
  userSelect.push(passwordOptions.upperCase);
  passInfo += passwordOptions.upperCase;
  console.log(userSelect);
  };

  const getSpecialChar = window.confirm("Would you like to include Special Characters?")
  if(getSpecialChar){
    userSelect.push(passwordOptions.specialChar);
    passInfo += passwordOptions.specialChar;

    console.log(userSelect);
  };

  const getNum = window.confirm("Would you like to include numbers?")
  if(getNum){
    userSelect.push(passwordOptions.num);
    passInfo += passwordOptions.num;
    console.log(userSelect);
  };

 
function generatePassword(){

   let randomPassword = "";

    // for loop to grab random stuff inside the string
    for (let i = 0; i < passwordLength; i++) {
     
      randomPassword += passInfo[Math.floor(Math.random() * passInfo.length)];
    };

    // return password results
    return randomPassword;
}
   

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  






}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

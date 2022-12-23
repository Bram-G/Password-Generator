// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// generate prompt for user input
function generatePassword(){
  passwordSpecs()
  getfullyDone()
  scramble()
  display()


}

var passwordLength = ''
var pasLow = ("")
var pasUpper = ("")
var pasNum = ("")
var pasSpec = ("")



function passwordSpecs(){ 
  var pasLength = prompt("Enter the number of characters you would like your password to be. Minimum 8 char, Max 128 char.")
  if (pasLength <8 || pasLength >128){
    alert('Try again and use a real number')
    return;
  } else if (pasLength >=8 || pasLength <=128){
    passwordLength = pasLength
    console.log(passwordLength)
  } else{
    alert('Try again and use a real number')
    return;
  }

  
  
}

let fullyDone = []
let generated = []

function getfullyDone(){
  
  var pasLow = confirm("Do you want lowercase characters in your password?")
  
  var pasUpper = confirm("Do you want uppercase characters in your password?")
  
  var pasNum = confirm("Would you want numbers in your password?")
  
  var pasSpec = confirm("Do you want special characters in your password?")
  
  if (pasLow == false && pasUpper == false && pasNum == false && pasSpec == false){
    alert("Try again and use at least one type of character!");
  }
  const charLow =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const charUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const charNum = ["1","2","3","4","5","6","7","8","9","0"]
  const charSpec = ["~","!","@","#","$","%","^","&","*","(",")","{","}","[","]",":",";","<",">","?","/","-","_","+","=","|"]
    
    if (pasLow === true){
        generated.push(charLow.join(''))
        console.log(pasLow)
    }
    
    if (pasUpper === true){
        generated.push(charUpper.join(''))
        console.log(pasUpper)
    }
    if (pasNum ===true){
        generated.push(charNum.join(''))
        console.log(pasNum)
    }
    if (pasSpec === true){
        generated.push(charSpec.join(''))
        console.log(pasSpec)
    } 
    console.log(generated)
      fullyDone = generated.join('')
      console.log (fullyDone)
    }

var randomGenerate = []
var randomPass = []
var finishedRandomPass = []
function scramble() {
  for (let i = 0; i < (parseInt(passwordLength)); i++) {
     randomGenerate = fullyDone[Math.floor(Math.random() * fullyDone.length)];
     randomPass.push(randomGenerate)
    }
    finishedRandomPass.push(randomPass.join('') )
    return finishedRandomPass;
  }

  function display(){
    document.querySelector("#password").value = finishedRandomPass
    console.log(finishedRandomPass)

  }
// usergen.generateBtn
// min 8 char to max 128char
// take input and create array of letter numbers and symbold according to input
// take random symbols and form password

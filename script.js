var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharArray = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ',', '^', '_', '`', '{', '}', '|', '~', '"'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var superArray = []; // this is gonna contain whatever the user chooses (yes not no) into one giant array that concatinates from the other arrays
var generateBtn = document.querySelector('#generate');

function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');
        passwordText.value = password;
}

    generateBtn.addEventListener('click', writePassword);
function generatePassword() {
    var welcomeMsg = confirm('welcome to the password generator! (click ok to continue)');
    console.log(welcomeMsg);
    if (welcomeMsg === true) {
        console.log('Ok great!');
    } else {
        console.log('No password generated');
        alert('no password');
    }

    var lengthMsg = parseInt(prompt('please enter the length of characters  for your password, between 9 and less than 128'));
    console.log(lengthMsg);
    if ((lengthMsg >= 9 && lengthMsg <= 128) && (!isNaN(lengthMsg))) {
        console.log('Wonderful');
    } else {
        console.log('wrong, try again');
        alert('this needs to be a number between 9 and 128 please submit again ');
    }

    var lowercaseMsg = confirm('do you want to include lowercase characters in your password?');
    console.log(lowercaseMsg);
    if (lowercaseMsg === true) {
        console.log(' adding in lowercase characters');
        superArray = superArray.concat(lowercaseArray);
    } else {
        console.log('No,lowercase needed');
        
    }

    var uppercaseMsg = confirm('do you want to include UPPERCASE characters in your password?');
    console.log(uppercaseMsg);
    if (uppercaseMsg === true) {
        console.log('adding UPPERCASE characters');
        superArray = superArray.concat(uppercaseArray);
    } else {
        console.log('NO, uppercase needed');
        
    }

    var numberMsg = confirm('do you want to include numbers in your password?');
    console.log(numberMsg);
    if (numberMsg === true) {
        console.log('adding in numbers');
        superArray = superArray.concat(numberArray);
    } else {
        console.log('No, number needed');
        
    }

    var specialCharMsg = confirm('do you want to include special !@#$%^&() characters in your password?');
    console.log(specialCharMsg);
    if (specialCharMsg === true) {
        console.log('adding special !@#$%^&() characters');
        superArray = superArray.concat(specialCharArray);
    } else {
        console.log('No, special !@#$%^&*() needed');
        
    }

    var password = '';
    for (var index = 0; index < lengthMsg; index++) {

        var randomNumber = Math.floor(Math.random() * superArray.length);

        password += superArray[randomNumber];
    }
    return password;
}
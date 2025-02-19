/**
 * This program, for the purposes of demonstrating understanding of JS basics, has three main functionalities:
 * - It can check if two passwords (strings) match and has at least 8 characters, has at least 1 numbeer, 1 uppercase character, and 1 lowercase character.
 * - A function that reverse a functions
 * - A function for storing the password to the object
 * 
 * @author Simonee Ezekiel M. Mariquit
 * @created_date Feb 19, 2025, 10:30 AM
 * References:
 * [1] String Slicing in JS https://www.w3schools.com/jsref/jsref_slice_string.asp
 * [2] ASCII Table https://www.ascii-code.com/
 */

// Test case for validating if two passwords match
const password1 = "AmongUs1!"
const password2 = "amogusss"
const password3 = "AMONGUSs"
const password4 = "Amonguss"
const password5 = "!@23%$^^*"
const password6 = "AmongUs1!"

function validate(pass1, pass2){
    // Check first if both strings are less than 8 characters
    if(pass1.length < 8 || pass2.length < 8){
        return false
    }

    // Then, use strict equality to check if the two strings are unequal.
    if(!(pass1 === pass2)){
        return false
    }

    // Check if the password has a lowercase character, has an uppercase character, AND has a number.
    // By default, we assume that it does not have each of those.
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;

    // Iterate through the string, check ASCII values, and if there is a match, set the flags to true
    for(let i = 0; i < pass1.length; i++){
        if('a' <= pass1[i] &&
            pass1[i] <= 'z'){

            hasLowercase = true;
        }
        if('A' <= pass1[i] && 
            pass1[i] <= 'Z'){

            hasUppercase = true
        }
        if('0' <= pass1[i] && 
            pass1[i] <= '9'){
            hasNumber = true
        }
    }
    
    // If all flags end up to be true, the passwords are valid.
    return (hasLowercase && hasUppercase && hasNumber)
}

// Test case for String reversal
const reversal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Recursive function to reverse the String.
function reverse(str) {
    // Edge case: String is empty
    if (str == ""){
        return ""
    }

    // Base case: string is of length 1
    if (str.length == 1) {
        return str
    }
    let firstChar = str[0];
    let restOfString = str.slice(1);
    restOfString = reverse(restOfString);

    return restOfString + firstChar;
}

function storePassword(username, pass1, pass2){
    let object = {
        name: username
    }

    if(validate(pass1, pass2)){
        object.newpassword = reverse(pass1);
    } else {
        object.newpassword = pass1;
    }

    return object
}

// Test case for string reversal
reversed = reverse(reversal);
console.log("Reversed String: " + reversed);

// Testcase for password checking
console.log(validate(password1, password2));
console.log(validate(password2, password2));
console.log(validate(password3, password3));
console.log(validate(password4, password4));
console.log(validate(password5, password5));
console.log(validate(password1, password6));

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));


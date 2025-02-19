/**
 * This program, for the purposes of demonstrating understanding of JS basics, has three main functionalities:
 * - It can check if two passwords (strings) match and has at least 8 characters, has at least 1 numbeer, 1 uppercase character, and 1 lowercase character.
 * - A function that reverse a functions
 * - A function for storing the password to the object
 * 
 * @author Simonee Ezekiel M. Mariquit
 * @created_date Feb 19, 2025, 10:30 AM
 */

// Test case for String reversal
const reversal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Recursive function to reverse the String.
function reverse(str) {
    if (str.length == 1) {
        return str
    }
    let firstChar = str[0];
    let restOfString = str.slice(1);
    restOfString = reverse(restOfString);

    return restOfString + firstChar;
}

// Test case for string reversal
reversed = reverse(reversal);
console.log("Reversed String: " + reversed);


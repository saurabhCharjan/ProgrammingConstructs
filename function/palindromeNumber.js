function checkPalindrome(number)
{
    let reversedNumber = 0;
     let numberCopy = number;
     while(numberCopy !=0)
     {
         currentDigit = numberCopy%10;
         reversedNumber = (reversedNumber * 10) + currentDigit; //creating the reversed number
         numberCopy= Math.floor(numberCopy / 10);
     }
     if(number == reversedNumber)
     {
     console.log("palindrome number");
     }
     else
     {
         console.log("not a palindrome");
     }
}
const prompt = require('prompt-sync')();
let checkNumber = parseInt(prompt('Enter a number :'));
checkPalindrome(checkNumber);
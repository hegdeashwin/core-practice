/**

Write a program to check if the string is palindrome

E.g Words like noon, civic, radar, level, reviver, racecar, madam, refer
are palindrome

*/

var inputString = "racecar";
var i = inputString.length - 1;
var reverseString = "";

for(; i >= 0; i--) {
  reverseString += inputString[i];
}

if (inputString === reverseString) {
  console.log(inputString + ' string is palindrome');
} else {
  console.log(inputString + ' string is not palindrome');
}

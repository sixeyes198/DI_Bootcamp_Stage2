
// 🌟 Exercise 3: Even Or Odd
// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

let userNum= prompt("Please chose a number!");

if (userNum % 2 == 0){
    console.log(userNum +" "+ "is  an even num");
} else{
    console.log(userNum + " "+ "is an odd num");
}
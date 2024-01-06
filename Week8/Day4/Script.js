// 🌟 Exercise 1 : Scope

// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
// function funcOne() {
//   let a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(`inside the funcOne function ${a}`);
// }

// Answer  a === 3

// #1.1 - run in the console:
// funcOne();
// #1.2 What will happen if the variable is declared with const instead of let ?
// We will get an error since a is a constant- function wont work

//#2
// const a = 0;
// function funcTwo() {
//   a = 5;
// }

// function funcThree() {
//   alert(`inside the funcThree function ${a}`);
// }
// // Answer // a == 0 , a ==5

// // #2.1 - run in the console:
// funcThree();
// funcTwo();
// funcThree();
// #2.2 What will happen if the variable is declared with const instead of let ?
// Answer // a == 0 , Error since a is constant

//#3
// function funcFour() {
//   window.a = "hello";
// }

// function funcFive() {
//   alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour();
// funcFive();

//Answer will say hello

//#4
// const a = 1;
// function funcSix() {
//   let a = "test";
//   alert(`inside the funcSix function ${a}`);
// }
// // Answer is aler test
// // #4.1 - run in the console:
// funcSix();
// #4.2 What will happen if the variable is declared
// with const instead of let ?
// we'll get test because the const is on the global scope and the let is inside the local

//#5
// let a = 2;
// if (true) {
//   let a = 5;
//   alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
// Answer //sincewe delacred it to be 2 its true  so we get the inside  a == 5 // outside of the if block = 2
// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared with const instead of let ?
// Answer // since its  true  a we get in the block =5 then on the second alert we get block 2

// Exercise 2 : Ternary Operator
// function winBattle() {
//   return true;
// }

// 1. Transform the winBattle() function to an arrow function.
// const winBattle = (x, y) => {
//   return x + y;
// };
// console.log(winBattle(2, 1));

// 2. Create a variable called experiencePoints.
// const experiencePoints;

// 3.  Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// const winBattle = () => true;
// const experiencePoints = winBattle() ? 10 : 1;

// // 4.  Console.log the experiencePoints variable.
// console.log(experiencePoints);

// Exercise 3 : Is It A String ?
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// const isString = (value) => typeof value === "string";

// Exercise 4 : Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// 1.  Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

// colors.forEach((element) => {
//   console.log(element);
// });

// 2. Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...") Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// const myChoice = colors.includes("Violet")
//   ? console.log("Yeah")
//   : console.log("no");

// Exercise 5 : Colors #2
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect… Hint : Use the array methods taught in class and ternary operator.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//   const element = index + 1 > 3 ? 0 : index + 1;
//   const suffix = ordinal[element];
//   console.log(`${index + 1}${suffix} choice is ${color}.`);
// });

//6. Exercise 6 : Bank Details
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):
// Create a global variable called bankAmount which value is the amount of money currently in your account.
// let bankAmount = 25000;
// // Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// const vat = 17;
// // Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// const details = [200, -100, 146, 167, 2900];
// // Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// // Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// let totalSum = 0;
// details.forEach((element, index) => {
//   details[index] += (element * vat) / 100;
//   totalSum += details[index];
// });
// // Display your current bankAccount standing at the end of the month.
// console.log(`Total bank acc at end of the month:
//  ${bankAmount + totalSum}`);

/////////////////////////////////////////////////////////////////

/// Daily Challenge : Go Wildcats

const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let usernames = [];
gameInfo.forEach((player) => {
  usernames.push(player.username + "!");
});
console.log(usernames);

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.

const winners = [];
gameInfo.forEach((player) => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});
console.log(winners);

// Find and display the total score of the users. (Hint: The total score is 71)

const totalScore = gameInfo.reduce((accumulator, player) => {
  return accumulator + player.score;
}, 0);

console.log(totalScore);

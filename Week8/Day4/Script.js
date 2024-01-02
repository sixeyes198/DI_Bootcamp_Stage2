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
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const ordinal = ["th", "st", "nd", "rd"];

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect… Hint : Use the array methods taught in class and ternary operator.

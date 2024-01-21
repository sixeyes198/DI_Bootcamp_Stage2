// Javascript Call Stack

// in JS we can do one single thing at a time, Because it has only 1 call stack

// call stack is a mechanism that helps the javaScript interpreter to keep track

// of the functions that a script calls. Every time the script calls a function

// its added to the top of the call stack

//Every time the function exits, the interpreter removes it from the call stack.

//////////// PROCESS of Call Stack  ////////////

// When you call a function, the engine pushes that function to the top of the stack,

// then creates an execution context.

// As each function runs, the call-stack pops it off and moves on to the following

// function until it is empty and all functions have been run.

//  This sequence is known as LIFO - Last In First Out.

// function thirdFunc() {
//   console.log("Greetings from thirdFunc()");
// }

// function secondFunc() {
//   thirdFunc();
//   console.log("Greetings from secondFunc()");
// }

// function firstFunc() {
//   secondFunc();
//   console.log("Greetings from firstFunc()");
// }

firstFunc();

////////////// Synchronous Programming

// Each event blocks the other until it had finished running.

// It means that when a function is called - perhaps one making a request to a server for an image - nothing else could happen on the page till Javascript loaded that image.

// For example, if you click a link before the image is loaded, Javascript would not handle the event until after the image was loaded.

// function secondFunc() {
//   console.log("Greetings from secondFunc()");
//   alert("Greetings from secondFunc()");
// }

// function firstFunc() {
//   secondFunc();
//   console.log("Greetings from firstFunc()");
// }

// firstFunc();

////////////// Asynchronous Programming

// Asynchronous programming allows multiple things to happen at the same time.

// When you start an action your program continues to run .when the action finishes

//the program is informed and gets access to the result.

//We do that by using WEB APIs that the browsers provide

// Application Programming Interface

//Example:  setTimeout() method is a Web API

// console.log("Start of script");

// setTimeout(function () {
//   console.log("First timeout completed");
// }, 2000);

// console.log("End of script");

/////////// Callback Functions

// A callback function is a function passed into another function as an argument

// setTimeout(function () {
//   console.log("First timeout completed");
// }, 2000);

/////////// Call Stack And Callback Queue

// console.log("start of script");

// setTimeout(function () {
//   console.log("First timeout completed");
// }, 2000);

// console.log("End of script");

////// Event Loop

// setTimeout(() => {
//   return console.log("Hey!");
// }, 1000);

//// Promises

// Promises are the alternative to callbacks for delivering the results of asynchronous computation.

//A promise has three states:
//1. Pending
//2. Fulfilled
//3. Rejected

// Promise Constructor:

// let promise = new Promise(function(resolve, reject) {
//     // executor
//   });

// The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically.
// The arguments resolve and reject are callbacks provided by JavaScript

// let goodGrades = true;

// let endSemester = new Promise(function (resolve, reject) {
//   if (goodGrades) {
//     resolve("I will get a gift");
//   } else {
//     reject("I won't get the gift");
//   }
// });

// console.log(endSemester);

// let semiSemester = new Promise((resolve, reject) => {
//   goodGrades
//     ? resolve("Im on the right track")
//     : reject("Not even close , got to do better!!");
// });
// console.log(semiSemester);

//////// Synchronous Programming

// const makeBurger = () => {
//   const meatType = getMeat();
//   const bunsType = getBuns();
//   const burger = putMeatBetwenBuns(bunsType, meatType);
//   return burger;
// };

// function getMeat() {
//   console.log("getting the beef from the butcher");
//   return "beef";
// }

// function getBuns() {
//   console.log("getting the buns from the bakery");
//   return "whole grain";
// }

// function putMeatBetwenBuns(bunsType, meatType) {
//   console.log(`creating the ${meatType} burger with ${bunsType} buns`);
//   return "Delicious Burger";
// }

// const burger = makeBurger();
// console.log(burger);

//////// Asynchronous programing

// const makeBurger = () => {
//   const meatType = getMeat();
//   const bunsType = getBuns();
//   const burger = putMeatBetwenBuns(bunsType, meatType);
//   return burger;
// };

// function getMeat() {
//   console.log("walking to the butcher...");
//   setTimeout(() => {
//     console.log("getting the beef from the butcher");
//     return "beef";
//   }, 2000);
// }

// function getBuns() {
//   console.log("getting the buns from the bakery");
//   return "whole grain";
// }

// function putMeatBetwenBuns(bunsType, meatType) {
//   console.log(`creating the ${meatType} burger with ${bunsType} buns`);
//   return "Delicious Burger";
// }

// const burger = makeBurger();
// console.log(burger);

/////// Promises

// function startBurger() {
//   return new Promise((resolve, reject) => {
//     console.log("walking to the butcher...");
//     setTimeout(() => {
//       console.log("getting the beef from the butcher");
//       resolve("beef");
//     }, 2000);
//   });
// }

// startBurger()
//   .then((meatType) => {
//     console.log("getting the buns from the bakery");
//     return [meatType, "whole grains"];
//   })
//   .then(([bunsType, meatType]) => {
//     console.log("preparing the burger...");
//     console.log(`The ${meatType} burger with ${bunsType} buns is created`);
//   });

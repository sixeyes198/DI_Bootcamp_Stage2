//  Exercise 1: Timer
//Part I

//In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// function sayHi(phrase) {
//   alert(phrase);
// }
// setTimeout(sayHi, 2000, `Hello world!`);

// Part II

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// const container = document.getElementById(`container`);
// console.log(container);

// function newElem() {
//   let newLine = document.createElement(`p`);
//   newLine.innerText = `Hello World`;
//   container.append(newLine);
//   console.log(container);
// }
// setTimeout(newElem, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
// const button = document.querySelector(`button`);
// button.addEventListener(`click`, stop);

// function stop() {
//   clearInterval(stopTimer);
// }

// function checkParagraphCount() {
//   const paragraphs = container.querySelectorAll(`p`);
//   if (paragraphs.length === 5) {
//     clearInterval(stopTimer);
//   }
// }
// let stopTimer = setInterval(function () {
//   let newLine2 = document.createElement(`p`);
//   newLine2.innerText = `Hello World`;
//   container.append(newLine2);
//   checkParagraphCount();
// }, 2000);

//Exercise 2 : Move The Box
// Copy the code above, to a structured HTML file.

// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// const button = document.querySelector(`button`);
// console.log(button);
// button.addEventListener(`click`, moveIt);

// function moveIt() {
//   let elem = document.getElementById(`animate`);
//   let pos = 0;
//   let id = setInterval(frame, 1);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.left = pos + `px`;
//     }
//   }
// }

// Exercise 3: Drag & Drop

// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target.

let drragedBox = document.getElementById(`box`);
console.log(drragedBox);
let target = document.getElementById(`target`);
console.log(target);
let target2 = document.getElementById(`target2`);
console.log(target2);

drragedBox.addEventListener(`dragstart`, function (e) {
  let selected = e.target;
  console.log(selected);
  target.addEventListener(`dragover`, function (e) {
    e.preventDefault();
  });
  target.addEventListener(`drop`, function (e) {
    target.appendChild(selected);
    selected = null;
  });
});

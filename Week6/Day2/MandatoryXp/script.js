//  Exercise 1: Timer
//Part I

//In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function sayHi(phrase) {
  alert(phrase);
}
setTimeout(sayHi, 2000, `Hello world!`);

// Part II

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

const container = document.getElementById(`container`);
console.log(container);

function newElem() {
  let newLine = document.createElement(`p`);
  newLine.innerText = `Hello World`;
  container.append(newLine);
  console.log(container);
}
setTimeout(newElem, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
const button = document.querySelector(`button`);
button.addEventListener(`click`, stop);

function stop() {
  clearInterval(stopTimer);
}

function checkParagraphCount() {
  const paragraphs = container.querySelectorAll(`p`);
  if (paragraphs.length === 5) {
    clearInterval(stopTimer);
  }
}
let stopTimer = setInterval(function () {
  let newLine2 = document.createElement(`p`);
  newLine2.innerText = `Hello World`;
  container.append(newLine2);
  checkParagraphCount();
}, 2000);

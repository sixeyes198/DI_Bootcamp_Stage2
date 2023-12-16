// SetTimeout()

// Allows us to run a function ONCE after the interval of time.

// function sayHi(phrase, who) {
//   alert(phrase + ", " + who);
// }

// setTimeout(sayHi, 1000, "Hello", "John");

//ClearTimeout() To Prevent The Function To Run
// Because calling a timer function schedules an action, that action can also be cancelled before it gets executed.
// A call to setTimeout returns a timer “ID” and you can use that timer ID with a clearTimeout call to cancel that timer.

// Excersice 1

// Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.
// const banner = document.querySelector(`div`);

// function showTitle() {
//   banner.setAttribute(`style`, `display:contents`);
// }
// setTimeout(showTitle, 5000);

// SetInterval()
// Allows us to run a function REPEATEDLY, starting after the interval of time, then repeating continuously at that interval.

// setInterval(function() {
//     // Do something every 5 seconds
// }, 5000);

//ClearInterval()
// Because calling a timer function schedules an action, that action can also be cancelled before it gets executed.
// A call to setInterval returns a timer “ID” and you can use that timer ID with a clearTimeout call to cancel that timer.

// let timer = setInterval(myTimer, 1000);

// function myTimer() {
//   let date = new Date();
//   let time = date.toLocaleTimeString();
//   // date.toLocaleTimeString() returns a string with a language sensitive representation of the time portion of this date
//   document.getElementById("demo").innerHTML = time;
// }

// function myStopFunction() {
//   clearInterval(timer);
// }

// Excersice 2
// Use the same code as before but create a countdown in the banner.
// ... "The sales end in 10sec ! "
// ... "The sales end in 9sec ! "
// etc ... until 0

// const banner = document.querySelector(`.banner`);
// let timerElement = document.getElementById(`Timer`);

// function showTitle() {
//   banner.setAttribute(`style`, `display:contents`);
// }
// setInterval(showTitle, 500);

// function hideTitle() {
//   let timer = parseFloat(timerElement.innerText);
//   if (timer === 0) {
//     clearInterval(intervalId);
//     banner.setAttribute(`style`, `display:none`);
//   } else {
//     timer -= 1;
//     timerElement.innerText = timer;
//   }
// }
// const intervalId = setInterval(hideTitle, 1000);

//  DRAG AND DROP EXAMPLE

// Get the draggable element
let draggableElement = document.getElementById(`draggable`);
console.log(draggableElement);
draggableElement.addEventListener("dragstart", function (event) {
  // Set the data to be dragged
  event.dataTransfer.setData("text", "drop here!");
});
// Get the drop target element
let dropTarget = document.getElementById("dropTarget");
// Add the dragover event listener to allow the drop
console.log(dropTarget);
dropTarget.addEventListener("dragover", function (event) {
  event.preventDefault(); // Prevent default behavior to allow the drop
  let draggableElement = event.dataTransfer.getData(
    "text",
    draggableElement.text
  );

  dropTarget.in = draggedData;
});
// Add the drop event listener to handle the dropped item
dropTarget.addEventListener("drop", function (event) {
  // Get the dragged data
  // Output the dragged data to the drop target
});

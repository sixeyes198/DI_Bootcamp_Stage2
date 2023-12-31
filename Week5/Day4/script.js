// Exercise 1 : Change The Article

// 1. Using a DOM property, retrieve the h1 and console.log it.

// const heading1 = document.querySelector(`h1`);
// console.log(heading1);

// 2. Remove the last paragraph in the <article> tag.Using Dom

// const container = document.querySelector(`article`);

// const last = document.getElementById("lastP");

// container.removeChild(last);
// console.log(container);

// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// const Style = document.querySelector(`h2`);
// Style.addEventListener(`click`, redBackground);
// function redBackground(e) {
//   const h2 = document.querySelector(`h2`);
//   h2.setAttribute(`style`, `background-color:red`);
// }

// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// const title1 = document.querySelector(`h3`);
// title1.addEventListener(`click`, hideTitle);
// function hideTitle() {
//   title1.setAttribute(`style`, `display:none`);
// }

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// const button = document.querySelector(`button`);
// const text = document.querySelectorAll(`p`);
// button.addEventListener(`click`, inlarge);

// function inlarge(e) {
//   for (let i = 0; i < text.length; i++) {
//     text[i].setAttribute(`style`, `font-weight:bold`);
//   }
// }

// Excersice 2 Work With Forms

// 1. Retrieve the form and console.log it.

// const form = document.forms;
// console.log(form);

// 2 Retrieve the inputs by their id and console.log them.

// const input1 = document.getElementById(`fname`);
// const input2 = document.getElementById(`lname`);
// console.log(input1, input2);

// 3 Retrieve the inputs by their name attribute and console.log them.

// const name1 = document.forms[0].firstname;
// const name2 = document.forms[0].lastname;
// console.log(name1, name2);

// 4 When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? //

// const button = document.forms[0].elements[2];
// const container = document.querySelector(`ul`);
// let li1 = document.createElement(`li`);
// let li2 = document.createElement(`li`);

// button.addEventListener(`submit`, getUserInfo);

// function getUserInfo() {
//   li1 = name1.firstname.input;
//   li2 = name2.lastname.input;
//   console.log(e.target);
// }

//Exercise 3 : Transform The Sentence

// 1 .Declare a global variable named allBoldItems.
// const allBoldItems = [];
// // // 2 .Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// const all = document.getElementsByTagName(`strong`);

// function getBoldItems() {
//   for (i = 0; i < all.length; i++) {
//     console.log(all[i].innerText);
//     allBoldItems.push(all[i]);
//   }
//   console.log(allBoldItems);
// }
// getBoldItems();

// // 3 . Create a function called highlight() that changes the color of all the bold text to blue.
// // const all = document.getElementsByTagName(`strong`);
// function highlight(e) {
//   for (i = 0; i < all.length; i++) {
//     all[i].setAttribute(`style`, `color:blue`);
//   }
// }
// highlight();

// // 4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// // const all = document.getElementsByTagName(`strong`);
// function returnItemsToDefault(e) {
//   for (i = 0; i < all.length; i++) {
//     all[i].setAttribute(`style`, `color:black`);
//   }
// }
// returnItemsToDefault();

// // 5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph).

// const onAndOff = document.querySelector(`p`);
// onAndOff.addEventListener(`mouseover`, highlight);
// onAndOff.addEventListener(`mouseout`, returnItemsToDefault);

// Exercice 4 : Volume Of A Sphere
// const radiusInput = document.getElementById(`radius`); //accessing
// const button = document.getElementById(`submit`); // accessing
// const volumeOutput = document.getElementById(`volume`);
// button.addEventListener(`click`, calculate); //creating click event, to call the function

// function calculate(e) {
//   e.preventDefault();
//   var r = Number(radiusInput.value); // creating a function and new variable for the calculation
//   var volume = Math.PI * r * r;
//   console.log(
//     (`The volume of a sphere with the radius of ${radiusInput} is:`,
//     volume.toFixed(2))
//   );
// }

// Excersice xp daily
//Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

const form = document.querySelector(`form`); //accessing the form

const noun = document.getElementById("noun"); // accessing the input
const adjective = document.getElementById("adjective"); // accessing the input
const person = document.getElementById("person"); // accessing the input
const verb = document.getElementById("verb"); // accessing the input
const place = document.getElementById("place"); // accessing the input
const story = document.getElementById(`story`);
//Accessing and adding an event listener for the  button

const button = document.getElementById(`lib-button`);
button.addEventListener(`click`, retriveData); //get info function

function retriveData(e) {
  e.preventDefault();
  console.log(
    noun.value,
    adjective.value,
    person.value,
    verb.value,
    place.value
  );
  story.textContent = `In a bustling ${place.value}, a ${adjective.value} named ${person.value} discovered a talking ${noun.value}.
   This chatty ${noun.value} had the unique ability to ${verb.value} in the most ${adjective.value} way possible. ${person.value} and the loquacious ${noun.value} teamed up, turning every ${place.value} they visited into a uproarious scene of ${adjective.value} laughter.`;
}

//Make sure the values are not empty - Added a required attribute to the html

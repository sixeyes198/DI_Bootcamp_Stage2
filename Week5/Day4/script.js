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

const form = document.forms;
console.log(form);

// 2 Retrieve the inputs by their id and console.log them.

// const input1 = document.getElementById(`fname`);
// const input2 = document.getElementById(`lname`);
// console.log(input1, input2);

// 3 Retrieve the inputs by their name attribute and console.log them.

// const name1 = document.forms[0].firstname;
// const name2 = document.forms[0].lastname;
// console.log(name1, name2);

// 4 When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? //  need to finish this !!
const button = document.forms[0].elements[2];
const container = document.querySelector(`ul`);
const li1 = document.createElement(`li`);
const li2 = document.createElement(`li`);
li1.textContent = "first name is:";
li2.textContent = "last name is:";
container.append(li1);
container.append(li2);

button.addEventListener(`click`, getUserInfo);

function getUserInfo(e) {
  e.preventDefault();
  let li = document.forms[0].firstname.value;
  let userInfo2 = document.forms[0].lastname.value;
  console.log(`Hey: ` + `${userInfo}`, `${userInfo2}`);
}

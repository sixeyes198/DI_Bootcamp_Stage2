// //For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?

// 2. The ul DOM node?

// 3. The second li (with Pete)?

// const div = document.querySelector(`div`); // 1st method
// console.log(div);

// const firstNode = document.querySelector(`body`); // 2nd method
// console.log(firstNode.firstElementChild);

// const ul = document.querySelector(`ul`); //1st method
// console.log(ul);

// const seconsNode = document.getElementById(`first`); //2nd method
// console.log(seconsNode);

// const li = document.getElementById(`second`); // 1st method
// console.log(li);

// const secondList = document.querySelector(`ul`); // 2nd method
// console.log(secondList.children[1]);

// const div = document.getElementById(`elem`);

// console.log(div.hasAttribute(`id`)); // boolean checks if true/false.

// console.log(div.getAttribute(`id`)); // get the specified attribute .

// console.log(div.setAttribute(`style`, `color:Blue`)); // changing the style of the element

// console.log(div.setAttribute(`class`, `myClass`)); // setting new attributes.

// // console.log(div.classList.remove(`myClass`));
// console.log(div.hasAttribute(`class`));

//Excersice 2

const style = document.getElementById(`text`);

style.setAttribute(
  `style`,
  `font-size:30px;color: orange;text-decoration:underline`
);

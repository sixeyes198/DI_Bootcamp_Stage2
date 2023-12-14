// Excersice 1//

// 1. Retrieve the div and console.log it
// const div = document.querySelector(`div`);
// console.log(div);

// 2. change the name “Pete” to “Richard”.
// const ul = (document.querySelectorAll(`li`)[1].innerText = `Richard`);
// console.log(ul);

// 3. Delete  the text node of Sarah

// const list1 = document.querySelectorAll(`li`)[3];
// list1.remove(`Sarah`); // here sarah is removed

// 4. change each first name  of the ul's

// const Lists = document.querySelectorAll(`.list`);
// Lists.forEach((list) => (list.firstElementChild.textContent = `Joe`));
// console.log(Lists);

//Exercise 2 :
// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// const style = document.getElementById(`color`);
// style.setAttribute(`style`, `padding:8px; background-color:lightblue`);
// console.log(style);

// const display = document.querySelector(`li`);
// display.setAttribute(`style`, `display:none`);
// console.log(display);

// const display2 = document.querySelectorAll(`li`)[1];
// display2.setAttribute(`style`, `border:2px dashed orange`);
// console.log(display2);

// const body = document.querySelector(`Body`);
// body.setAttribute(`style`, `font-size: 30px`);
// console.log(body);

// excersice 3

// using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// const div = document.getElementById(`navBar`);
// div.setAttribute(`id`, `socialNetworkNavigation`);
// console.log(div);

// const elem = document.createElement(`li`);

// const node = document.createTextNode(`Logout`);
// elem.append(node);

// const div2 = document.querySelector(`ul`).appendChild(elem);
// console.log(div2);

// const div3 = document.querySelector(`ul`).firstElementChild.textContent;
// console.log(div3);

// const div4 = document.querySelector(`ul`).lastElementChild.textContent;
// console.log(div4);

// Excersice 4 : My book list

//In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false)

// const books = [
//   {
//     title: `Game of thornes`,
//     author: `George R. R. Martin`,
//     Image: `https://prodimage.images-bn.com/pimages/9780553805444_p0_v5_s1200x630.jpg `,
//     alreadyRead: true,
//   },
//   {
//     title: `The witcher`,
//     author: `Andrzej Sapkowski`,
//     Image: ` https://m.media-amazon.com/images/I/51WpIuX+EIL.jpg `,
//     alreadyRead: true,
//   },
// ];

// const container = document.querySelector(".list-books");
// const table = document.createElement("table");
// const headerRow = document.createElement("tr");
// const thTitle = document.createElement("th");
// const thAuthor = document.createElement("th");
// const thimage = document.createElement("th");
// thTitle.textContent = "Title";
// thAuthor.textContent = "Author";
// thimage.textContent = "Img";
// table.style.border = "1px solid";
// container.append(table);
// table.append(headerRow);
// headerRow.append(thTitle, thAuthor, thimage);

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i]);
//   const tr = document.createElement("tr");
//   const tdTitle = document.createElement("td");
//   const tdAuthor = document.createElement("td");
//   const tdImage = document.createElement("td");
//   if (books[i].alreadyRead) {
//     tdAuthor.style.color = "red";
//     tdTitle.style.color = "red";
//   }
//   tdTitle.textContent = books[i].title;
//   tdAuthor.textContent = books[i].author;
//   tdImage.innerHTML = `<img src='${books[i].Image}' width="100px"/>`;
//   table.append(tr);
//   tr.append(tdTitle, tdAuthor, tdImage);
// }

// Excersice Daily xp

// 1. Create an array which value is the planets of the solar system.

const planetsOfSolarSystem = [
  `Mercury`,
  `Venus`,
  `Earth`,
  `Mars`,
  `Jupiter`,
  `Saturn`,
  `Uranus`,
  `Neptune`,
];

const classes = [
  `planet1`,
  `planet2`,
  `planet3`,
  `planet4`,
  `planet5`,
  `planet6`,
  `planet7`,
  `planet8`,
];
const colors = [
  `red`,
  `blue`,
  `yellow`,
  `purple`,
  `orange`,
  `green`,
  `pink`,
  `violt`,
];

// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (i = 0; i < planetsOfSolarSystem.length; i++) {
  const planetDiv = document.createElement(`div`); //8 Divs
  // planetDiv.setAttribute(`class`, `Planet`); // giving planet class
  planetDiv.classList.add(classes[i]);
  planetDiv.style.backgroundColor = colors[i]; // adding colors
  planetDiv.innerText = planetsOfSolarSystem[i]; // the given planets value
  console.log(planetDiv);
  const section = document.querySelector(`section`);
  section.append(planetDiv);
}

// 3.Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// console.log(planetsOfSolarSystem);
console.log(planetsOfSolarSystem);

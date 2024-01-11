const arrayOfQuotes = [
  {
    id: 0,
    author: "Drake",
    quote: "YOLO",
  },
  {
    id: 1,
    author: "lil wayne",
    quote: "a-mili..a-mili..a-mili..",
  },
  {
    id: 2,
    author: "Bob-Marley",
    quote: "No woman no cry",
  },
  {
    id: 3,
    author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: 4,
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life : it goes on.",
  },
  {
    id: 5,
    author: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    id: 6,
    author: "Franklin D. Roosevelt",
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
  },
  {
    id: 7,
    author: "Peter Drucker",
    quote: "The best way to predict the future is to create it.",
  },
];

// console.log(arrayOfQuotes);
// const generatedQuote = arrayOfQuotes.find((element) => element.id === 0);

const pQuote = document.getElementById("quoteDisplay");
const pAuthor = document.getElementById("authorDisplay");
const button = document.querySelector("button");
button.addEventListener("click", generateQuote);

let lastId = -1;

function generateQuote() {
  const nextQuote = arrayOfQuotes.find((quote) => quote.id > lastId);
  if (nextQuote) {
    lastId = nextQuote.id;
    pQuote.innerText = `"${nextQuote.quote}"`;
    pAuthor.innerText = `${nextQuote.author} `;
  } else {
    lastId = -1;
  }
}

const form = document.querySelector("form");
console.log(form); // to access the value
const subButton = document.getElementById("submit");
subButton.addEventListener("click", push);

function push(e) {
  e.preventDefault();
  const quoteInput = form.elements.quote.value;
  const authorInput = form.elements.author.value;

  const newQuote = {
    id: arrayOfQuotes.length,
    author: authorInput,
    quote: quoteInput,
  };
  arrayOfQuotes.push(newQuote);
  console.log(arrayOfQuotes);
  console.log(`quote:${quoteInput} Author: ${authorInput}`);
  form.reset();
}

const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");
const buttonfour = document.getElementById("four");
// console.log(`${buttonOne} ${buttonTwo} ${buttonThree} ${buttonfour}`);

buttonOne.addEventListener("click", count);
function count() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  alert(
    `The number of character inside this quote: ${quoteDisplay.innerText.length}`
  );
}
buttonTwo.addEventListener("click", count2);
function count2() {
  const secondqoute = document.getElementById("quoteDisplay");
  alert(
    ` The number of characters without space is: ${secondqoute.innerText.count(
      " "
    )}`
  );
}
// buttonThree.addEventListener("click");
// buttonfour.addEventListener("click");

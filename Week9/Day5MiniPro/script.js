const arrayOfQuotes = [
  {
    id: 0,
    author: "Drake",
    quote: "YOLO",
    likes: 0,
  },
  {
    id: 1,
    author: "lil wayne",
    quote: "a-mili a-mili a-mili..",
    likes: 0,
  },
  {
    id: 2,
    author: "Bob-Marley",
    quote: "No woman no cry",
    likes: 0,
  },
  {
    id: 3,
    author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
    likes: 0,
  },
  {
    id: 4,
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life : it goes on.",
    likes: 0,
  },
  {
    id: 5,
    author: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    likes: 0,
  },
  {
    id: 6,
    author: "Franklin D. Roosevelt",
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    likes: 0,
  },
  {
    id: 7,
    author: "Peter Drucker",
    quote: "The best way to predict the future is to create it.",
    likes: 0,
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
    likes: 0,
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
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quoteDisplayWithout = quoteDisplay.innerText
    .split(" ")
    .reduce((acc, val) => {
      acc += val.length;
      return acc;
    }, 0);
  alert(`The number of characters without space is: ${quoteDisplayWithout} `);
}

buttonThree.addEventListener("click", wordCount);
function wordCount() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quoteDisplayWords = quoteDisplay.innerText
    .split(" ")
    .filter((innerText) => innerText != " ").length;
  alert(`The number of words is : ${quoteDisplayWords}`);
}

buttonfour.addEventListener("click", like);
function like() {
  const currentQuote = arrayOfQuotes.find((quote) => quote.id === lastId);
  if (currentQuote) {
    currentQuote.likes++;
    alert(`Liked! total likes for this quote are: ${currentQuote.likes}`);
  }
}

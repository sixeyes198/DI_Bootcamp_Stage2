/// Daily challenge Play With Words

// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

const array = ["hello", "how", "are", "you"];

function makeAllCaps(wordsArray) {
  return new Promise((resolve, reject) => {
    const allStrings = wordsArray.every((word) => typeof word === "string");
    if (allStrings) {
      const capsLockWords = wordsArray.map((word) => word.toUpperCase());
      resolve(capsLockWords);
    } else {
      reject("The array containes non-string elements");
    }
  });
}

function sortWords(capsArray) {
  return new Promise((resolve, reject) => {
    if (capsArray.length >= 4) {
      const newCapsArr = capsArray.sort();
      resolve(newCapsArr);
    } else {
      reject("The length of the arrray is bigger then 4");
    }
  });
}

makeAllCaps(array)
  .then((ret) => {
    console.log(ret);
    return sortWords(ret);
  })
  .then((sortedArray) => {
    console.log(sortedArray);
  })
  .catch((error) => {
    console.log(error);
  });

// 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

//   this function converts the morse json string provided above to a morse javascript object.
//   if the morse javascript object is empty, throw an error (use reject)
//   else return the morse javascript object (use resolve)
function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        throw new Error("Morse object is empty");
      }
      resolve(morseJS);
    } catch (error) {
      reject(error);
    }
  });
}

// Function to translate user input to morse code
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    try {
      const userInput = prompt("Enter a word or sentence:");
      if (!userInput) {
        reject(new Error("Input cannot be empty"));
      }

      const morseTranslation = [];
      for (const char of userInput.toLowerCase()) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(new Error(`Character '${char}' not found in Morse object`));
        }
      }

      resolve(morseTranslation);
    } catch (error) {
      reject(error);
    }
  });
}

// Function to join and display morse translation on the DOM
function joinWords(morseTranslation) {
  const result = morseTranslation.join("<br>");
  document.body.innerHTML = `<div>${result}</div>`;
}

// Chain the three functions
toJs()
  .then(toMorse)
  .then(joinWords)
  .catch((error) => {
    console.error(error.message);
  });

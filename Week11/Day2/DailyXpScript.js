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

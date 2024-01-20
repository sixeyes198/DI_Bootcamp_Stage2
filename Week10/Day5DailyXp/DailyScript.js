///////// Daily Xp //////////////

//Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function isItAnagram(string1, string2) {
  const cleanedStr1 = string1
    .split("")
    .filter((char) => char != " ")
    .join("")
    .toLowerCase();
  const cleanedStr2 = string2
    .split("")
    .filter((char) => char != " ")
    .join("")
    .toLowerCase();

  if (cleanedStr1.length != cleanedStr2.length) {
    return false;
  }

  const sortedStr1 = cleanedStr1.split("").sort().join("");
  const sortedStr2 = cleanedStr2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

const result = isItAnagram("Astronomer", "Moon starer");
console.log(result);

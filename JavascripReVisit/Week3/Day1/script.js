// THE .split() METHOD!!
//It lets us break down a string into an array of smaller strings!!
//EXAMPLE 
// let string = `A-quick-brown-fox`;

// let arrayOfStrings = string.split("-");
// console.log(arrayOfStrings);


// .indexOf() method 
// the indexOf() method takes a string and a substring and
// returns the starting index of the first occurrence of the given substring in that string.

// console.log('To be or not to be'.indexOf('to'));


// .substring(startIndex, endIndex) method:
//Return the characthers in a string that begins at the startIndex and
// ends at the endIndex if its ommited then it takes the whole length..

// let string = `Hi, my name is Joe`;
// console.log(string.substring(4));


// .toLowerCase() method: 
// Returns the string with all of its characters converted to lowercase.

// let sentence = `I ATE a Whole PIZZA!`;
// console.log(sentence.toLowerCase());


// .replace() method: 
//  to replace a string or substring in a string. 
//  To achive the result you enter the word seperated by comma and the new word
//  The method returns a new string with the replacement.

// let sentence = `I restarted the js course.`;

// console.log(sentence.replace(`I`, `We just`));


//  .concat() method: 
//  This method copies existing arrays and merge them
//  together and returns a new array
//  it does not affect the existing arrays

// const array1 = ["a","b","c"];
// const array2 = ["d","e","f"];
// const array3 = array1.concat(array2);
// console.log(array3);


// .toUpperCase() method : 
//  this method as the name suggest it transforms the string
// characters to uppercase..

// let username = `Joe1234`;
// console.log(username.toUpperCase());


//   .trim() method :

//  This method  of String values removes whitespace from both ends of this string and returns a new string,
//  without modifying the original string.

// const string = `  This is with whitespce  `;
// console.log(string);
// console.log(string.trim()+ " " +"This is without");


// .charAt() method: 
//  returns the index of the character location

// const sentence  = `The black fox jumps over the cat`;

// const index = 4;
// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);



// Excersice 1 //
// let addressNumber = 30;

// let addressStreet = `ben yehudha`;

// let country = `Israel`;

// const globalAddress = `I live in ${country} , at ${addressStreet} ${addressNumber}.`
// console.log(globalAddress);



// isNaN() method:
// This method checks if its a number or string
// simply returns TRUE or False 

// const me = `Joe`;
// console.log(isNaN(me));




//  .toString() method: 
//  returns a number as a string.

// let num = 10;
// console.log(isNaN(num));// checkcs if its a number
// console.log(num.toString());// changing it to string...




//   .toFixed() method:

//    returns a string, with the number written
//     with a specified number of decimals:

// let num = 10.7668;

// console.log(num.toFixed(3));



///     Excersice 2 // 

// const birthYear = 1988;

// const futureYear = 2024;

// const calculatedYear = `${futureYear}` - `${birthYear}`;

// console.log(calculatedYear);




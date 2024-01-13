// Exercise 1 : Analyzing The Map Method...

// 1. Analyze this code, what will be the output ?
[1, 2, 3].map((num) => {
  if (typeof num === "number") return num * 2;
  return;
});

// the output should be an array : [2, 4, 6]

//Exercise 2: Analyzing The Reduce Method
//Analyze this code, what will be the output ?
[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);

//output should be : [1, 2, 0, 1, 2, 3] since our acc starts from [1, 2] and the concat method joins the numbers

// Exercise 3 : Analyze This Code // What is the value of i ?
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });

//The value of i is the index : Example i the index of 1 is 0 the index of 2 is 1.

// Exercise 4 : Nested Arrays
//

// 1. Using a method, take this array:

const array = [[1], [2], [3], [[[4]]], [[[5]]]];
// and modify it to look like this array: [1,2,3,[4],[5]] , Bonus Try to do it on one line.
const newArray = array.flat(2);
console.log(newArray);

//2.  modify the array to look like : ["Hello young grasshopper!","you are","learning fast!"].

const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
const concatedGreeting = greeting.flat(); // 2
console.log(concatedGreeting);

// 3. turn the greeting array into a string :
const sentence = concatedGreeting.reduce((acc, val) => acc + " " + val);
console.log(sentence);

///4.  Turn the trapped number 3  into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const unTrapped = trapped.flat(Infinity);
console.log(unTrapped);

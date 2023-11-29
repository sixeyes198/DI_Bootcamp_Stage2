//Exercise 1 : Evaluation , predicting

5 >= 1
//predict: true
console.log(5 >= 1);
//actual: true
0 === 1
//predict: false
console.log(0 === 1);
//actual: false
4 <= 1
//predict: false
console.log(4 <= 1);
//actual: false
1 != 1
//predict: false
console.log(1 != 1);
//actual: false
"A" > "B"
//predict: false
console.log("A" > "B");
//actual: false
"B" < "C"
//predict: true
console.log("B" < "C");
//actual: true
"a" > "A"
//predict: true
console.log("a" > "A");
//actual: true
"b" < "A"
//predict: false
console.log("b" < "A");
//actual: false
true === false
//predict: false
console.log(true === false);
//actual: false
true != true
//predict: false
console.log(true != true);
//actual: false


//Exercise 2 : Ask For Numbers
// 1. Ask the user for a string of numbers separated by commas


let inputString = prompt("Enter a string of numbers seperated by commas:");

//now using string methods im splitting the string into an array of numbers 

let numbersArray = inputString.split(",");
// used chatgpt for this one not proud of this ill re do it 

let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += Number(numbersArray[i]);
}

//2.  Console.log the sum of the numbers.
console.log("sum of numbers:", sum);
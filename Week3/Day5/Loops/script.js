//Exercise 1
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//ample Output: //"0 is even" //"1 is odd" //"2 is even"

// let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// function checkEvenOrOdd(number){
//     if (number % 2 === 0){
//         console.log(number +"is even");
//     } else {
//         console.log(number + "is odd");
//     }
// }

// for (let i = 0; i < arr.length; i++){
//     checkEvenOrOdd(arr[i]);
// }



//For in loop - in object
// let person = {fname:"John", lname:"Doe", age:25};
// for (let x in person){
//     // console.log(x);
//     console.log(person[x]);
// }

//For in/loop insided an array

// let colors = ["Blue","Pink","Yellow"];
// for (let i in colors) {
//     // console.log(i);
//     console.log(colors[i]);
// }

// For  Of loop 
// Loops through the values of an iterable objects such as Arrays and Strings.

// Careful: an object is not iterable

// let colors = ["blue", "yellow", "red"];

// for (let i of colors) {
//    console.log(i); // logs blue, yellow, red
// }

//for of doesn't work for object
// let person = {fname:"John", lname:"Doe", age:25};
// for (let x of person) {
//   console.log(x) 
// } // Error: object is not iterable



// While Loop
// Allows code to be executed repeatedly, based on a given Boolean condition.

// Syntax

// while (boolean condition)
// {
//    loop statements...
// }


// let n = 0;
// while (n < 3) {
//   n++;
//   console.log(n)
// }          //will give 1, 2, 3



// Do While Loop
// Similar to while loop, but it checks for condition after executing the statements. This is an of Exit Control Loop.
// The test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute whether the test condition is true or false at least once.

// Syntax

// do
// {
//     statements..
// }
// while (condition);


let i = 0;

do{
    console.log("The number is " + i)
    i++;
}
while(i < 10);


// Break Statement
// The break statement breaks the loop and continues executing the code after the loop

for (let i = 0; i < 10; i++) {
  if (i === 3) { 
      break;
    }
  console.log("The number is " + i); // 0 1 2
}


// Continue Statement
// The continue statement breaks one iteration (in the loop), and continues with the next iteration.

for (let i = 0; i < 10; i++) {
  if (i === 3) { 
      continue; 
  }
  console.log("The number is " + i); // 0 1 2 4 5 6 7 8 9 
}


// Exercise 2

let names= ["john", "sarah", 23, "Rudolf",34]

for (let i = 0; i < names.length; i++){
    if(typeof names[i]=== "string"){
        if(names[i][0] !== names[i][0].toUpperCase()){
            names[i] = names[i][0].toUpperCase() + names[i].slice(1);
        }
        console.log(names[i]);
    }
}




//Excersice 3 javascript calculator 
//1 prompt the user for the first number 
//2 Store the first number in a variable called num1.

let num1 = prompt('Enter the first number.');
console.log(typeof num1);
num1 = parseFloat(num1);

//3 Prompt the user for the second number.+
//4 Store the second number in a variable called num2.
//6 adding more actions

// let operation = prompt("Enter 1 - 4 mathematical operation: \n1. Addition (+)\n2. Subtraction (-)\n3. Multiplication (*)\n4. Division (/)");

// let num2 = prompt('Enter the second number.');
// console.log(typeof num2);
// num2 = parseFloat(num2);

// switch (operation) {
//     case '1':
//       var result = num1 + num2;
//       alert("Result: " + result);
//       break;
//     case '2':
//       var result = num1 - num2;
//       alert("Result: " + result);
//       break;
//     case '3':
//       var result = num1 * num2;
//       alert("Result: " + result);
//       break;
//     case '4':
//       if (num2 !== 0) {
//         var result = num1 / num2;
//         alert("Result: " + result);
//       } else {
//         alert("Cannot divide by zero");
//       }
//       break;
//     default:
//       alert("Invalid operation");
//   }

//5 Create an Alert where the value is the SUM of num1 and num2.

let sum = num1 + num2; 
alert("the sum is" + " " + sum);

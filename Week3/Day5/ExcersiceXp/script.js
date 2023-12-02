// 🌟 Exercise 1 : List Of People

// const people = ["Greg", "Mary", "Devon", "James"];
// //Write code to remove “Greg” from the people array.
// const missing = people.slice(1);
// console.log(missing)

// // Write code to replace “James” to “Jason”.

// missing.splice(2,1, "Jason");
// console.log(missing)

// //Write code to add your name to the end of the people array.

// missing.push("Joe");
// console.log(missing);

// // Write code that console.logs Mary’s index. take a look at the indexOf method 

// const maryIndex = missing.indexOf("Mary");
// console.log(maryIndex);

// //Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name.

// console.log(missing.slice(1,3));


// //Write code that gives the index of “Foo”. Why does it return -1 ?

// const index = "Foo";
// console.log(index);
// console.log(index.indexOf("Foo"));// i got 0 ** check with daniel?

// // Create a variable called "last" which value is the last element of the array.

// let last = missing[missing.length - 1];
// console.log(last);





//Part 2 



//1  Using a loop, iterate through the people array and console.log each person.

// const people = ["Greg", "Mary", "Devon", "James"];

// for (let i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

// //2 Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .

// for (let i = 0; i < people.length; i++){
//     if (i === 2) { 
//     console.log(people[i]);
//  }
// }


///Excersice 2 : Your favorite colors
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

// let colors = ["Blue","Pink","Purple","Yellow","Black"];

// for (let i = 0; i <colors.length; i++){
//     if ( i === 0){
//         console.log("my #1 choice is "+ colors[i]);
//     }
//     if ( i === 1){
//         console.log("my #2 choice is " + colors[i]);
//     }
//     if ( i === 2){
//         console.log("my #3 choice is " + colors[i]);
//     }
//     if ( i === 3){
//         console.log("my #4 choice is " + colors[i]);
//     }
//     if ( i === 4){
//         console.log("my #5 choice is " + colors[i]);
//     }
// }



//Excersice 3 : repeat the question
// 1 .Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)


// let userInput = prompt("please enter a number:");
// console.log(typeof userInput);
// let userNum = parseFloat(userInput);

// do{
//     prompt("Enter a new number:");
//     if(userNum === 10)
//     break;
// }
// while(userNum < 10);



//Excersice 4


// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
//excersice 4 / 2 Console.log the number of floors in the building.
// console.log(building.numberOfFloors);
// 4 /  3
// console.log how many apartments are on the floors 1 and 3.
//  let bothFloor = building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor
// console.log("there are" + " " + bothFloor + " " + "appartments all togther.");
//4 / 4 
//log in the name of the second tenant and the number of rooms he has in his apartment.
// let both = building.nameOfTenants[1] + " " + building.numberOfRoomsAndRent.dan[0];
// console.log(both);
//4 / 5 
// check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// let sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];

// if (sum > building.numberOfRoomsAndRent.dan[1]){
//     console.log(building.numberOfRoomsAndRent.dan[1] + 200);
// }else{
//     console.log("Dans rent is higher");
// }


//Exercise 5 : Family
//5 / 1 - Create an object called family with a few key value pairs.

// const family = {name:"Smith",members: 4,city:"Tel-aviv"}

//5 / 2 - Using a for in loop, console.log the keys of the object.
// for (let x in family){
//     console.log(x);
// }

//5 / 3 - Using a for in loop, console.log the values of the object.

// for (let y in family){
//     console.log(family[y]);
// }

//Exercise 6 : Rudolf
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }
// for (let x in details){
//     console.log(x +" "+ details[x]);
// }

//Excersice 7 : Secret Group

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// const societyName = names.map(names => names[0]).sort().join("");
// //map function exctracts the letters from each name, sort function to sort them 
// //and the join function to join them to one string
// console.log(societyName);
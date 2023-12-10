//Daily Challenge: JS Arrays & Methods

//Exercise 1:

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove Banana from the array.
fruits.splice(0, 1);
console.log(fruits);

// 2. Sort the array in alphabetical order.
fruits.sort();
console.log(fruits);

// 3. Add “Kiwi” to the end of the array.

fruits.push(`kiwi`);
console.log(fruits);

// 4. Remove “Apples” from the array. Don’t use the same method as in part 1.

let newArr = fruits.slice(1);
console.log(newArr);

// 5. Sort the array in reverse order.

console.log(newArr.reverse());

// Exercise 2

// 1.Access and then console.log “Oranges”.

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

const fruiteInArray = moreFruits[1][1][0];
console.log(fruiteInArray);

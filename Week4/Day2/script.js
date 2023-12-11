//Exercise 1 :  part 1 Information
// 1 / 1Create a function called infoAboutMe() that takes no parameter.
// 1 / 2 The function should console.log a sentence about you (ie. your name, age, hobbies ect…)
// 1 / 3 call the function
// function infoAboutMe(params) {
//     console.log(`My name is Joe , i am 35 years old , my fav color is blue`);
// }
// infoAboutMe();

// //part 2 /1 Create a function called..
// //2 / 2
// //2 / 3
// function infoAboutPerson(personName, personAge, personFavoriteColor){
// console.log(`My name is ${personName} I am ${personAge} , my fav color is ${personFavoriteColor}`);
// }
// infoAboutPerson("David", 45, "Blue");
// infoAboutPerson("Josh", 12, "Yellow");

//Excersice 2 Tips
//2 / 1 reate a function named calculateTip() that takes no parameter
//2 /2 Inside the function, use prompt to ask John for the amount of the bill.

//  function calculateTip(){
//     let bill = prompt(`Whats the amount of the bill`);
//     const parsedInput = parseFloat(bill);
//     console.log(typeof parsedInput);
//     let tip;
//     if (parsedInput < 50){
//         tip = 0.2 * parsedInput;
//         console.log(`Bill: $${parsedInput}`);
//         const Sum = tip + parsedInput;
//         console.log(`Your total plus Tip is $${Sum}`);
//         console.log(`tip 20`);
//     }else if (parsedInput > 200){
//         tip = 0.1 * parsedInput;
//         console.log(`Bill: $${parsedInput}`);
//         const Sum = tip + parsedInput;
//         console.log(`Your total plus Tip is $${Sum}`);
//         console.log(`tip 10`);
//     }else{
//         tip = 0.15 * parsedInput;
//         console.log(`Bill: $${parsedInput}`);
//         const Sum = tip + parsedInput;
//         console.log(`Your total plus Tip is $${Sum}`);
//         console.log(`Tip 15`);
//     }

// }
// calculateTip();

//Exercise 3 : Find The Numbers Divisible By 23

// function isDivisible(divisor){
//     // const divisor = 23;
//     let sum = 0;
// for (let i = 0; i < 500; i++){
//     if(i % divisor === 0){
//         console.log(`${i}  is divisable by ${divisor}`);
//         sum += i;
//     }
// }
// console.log(`The sum is ${sum}`);
// }
// isDivisible(23);
//This is bonus...
// isDivisible(3);
// isDivisible(45);

//Exercise 4 : Shopping List

// const stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };
// const prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };

// // 2. Create an array called shoppingList

// const shoppingList = ["Banana", "Orange", "Apple"];

// // 3. Create a function called myBill() that takes no parameters.
// // 4. function should return the total price of your shoppingList
// const sum = stock.banana + stock.orange + stock.apple;
// console.log(`$${sum}`);
// function myBill() {
//   if (stock.banana > 1 && stock.orange > 1 && stock.apple == 0) {
//     console.log(`The sum of your shopping list is: $${sum}`);
//   } else {
//     console.log("Items out of stock");
//   }
// }
// // 5. call the function
// myBill();

// Excersice 5:

// 1. Create a function named changeEnough(itemPrice, amountOfChange) that

// 2. In the function, determine whether or not you can afford the item.

// function changeEnough(itemPrice, amountOfChange) {
//   const sum = calculatedSum(amountOfChange);
//   if (sum >= itemPrice) {
//     console.log(`you can afford the item`);
//     return true;
//   } else {
//     console.log(`you cant afford the item`);
//     return false;
//   }
// }

// function calculatedSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let numberOfCoins = arr[i];
//     if (i === 0) {
//       coinValue = 0.25;
//     }
//     if (i === 1) {
//       coinValue = 0.1;
//     }
//     if (i === 2) {
//       coinValue = 0.05;
//     }
//     if (i === 3) {
//       coinValue = 0.01;
//     }
//     console.log(" we have " + numberOfCoins, coinValue);
//     sum = sum + numberOfCoins * coinValue;
//   }
//   console.log(sum);
//   return sum;
// }

// changeEnough(4.25, [25, 20, 5, 0]);

// Excersice 6:

//1. Define a function called hotelCost()

const hotelPrice1Night = 140;

function hotelCost() {
  let userChoice;
  do {
    userChoice = Number(
      prompt(`Welcome, How many nights would you like to stay?`)
    );
  } while (userChoice === 0 || isNaN(userChoice));
  return hotelPrice1Night * userChoice;
}

// 2. Define a function called planeRideCost().

function planeRideCost() {
  const london = 183;
  const paris = 220;
  const otherLocations = 300;

  let userDestination;
  do {
    userDestination = prompt(`Please enter your holiday destination:`);
  } while (!userDestination || !isNaN(userDestination));

  if (userDestination.toLowerCase() === `paris`) {
    return paris;
  } else if (userDestination.toLowerCase() === `london`) {
    return london;
  } else {
    return otherLocations;
  }
}

// 3. define a function called rentalCarCost().

function rentalCarCost() {
  let userNumOfDays;
  const carPrice = 40;
  const discountPercentage = 5;
  const rentalDiscount = (discountPercentage / 100) * carPrice;
  const discountedPrice = carPrice - rentalDiscount;

  do {
    userNumOfDays = Number(
      prompt(`How many days would you like to rent the car?`)
    );
  } while (userNumOfDays === 0 || isNaN(userNumOfDays));

  if (userNumOfDays <= 10) {
    return userNumOfDays * carPrice;
  } else {
    return discountedPrice * userNumOfDays;
  }
}

// 4. define a function totalVacationCost() that returns all the functions up top

function totalVacationCost() {
  const hotelPrice = hotelCost();
  const planeCost = planeRideCost();
  const carPrice = rentalCarCost();
  console.log(hotelPrice);
  console.log(planeCost);
  console.log(carPrice);
  console.log(
    `Your total sums up to :`,
    `$${hotelPrice + planeCost + carPrice}`
  );
}
totalVacationCost();

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
// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}; 

const shoppingList = ["Banana","Orange","Apple"];

function myBill() {
   if(stock.banana > 1) {
    console.log("the price for banana is:"  +'$'+ prices.banana);
   if (stock.orange > 1) {
    console.log("the price for orange is:" +'$'+prices.orange);
   }if ( stock.apple > 1) {
    console.log(prices.apple);
   }{
    console.log(`This item is out of stock`);
   }
 }
}
myBill()




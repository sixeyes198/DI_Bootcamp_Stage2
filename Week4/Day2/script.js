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

 function calculateTip(){
    let bill = prompt(`Whats the amount of the bill`);
    const parsedInput = parseFloat(bill);
    console.log(typeof parsedInput);
    if (parsedInput < 50){
        console.log(`tip 20`);
    }else if (parsedInput > 200){
        console.log(`tip 10`);
    }else{
        console.log(`Tip 15`);
    }

}
calculateTip();

// finish this at home
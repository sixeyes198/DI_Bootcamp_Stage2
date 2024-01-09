// Exercise 1 : Find The Sum

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const sum = (a, b) => a + b;
// console.log(sum(2, 5));

///////////////////////////////////////

// Exercise 2 : Kg And Grams

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
//1. First, use function declaration and invoke it.
// console.log(calculate(6));
// function calculate(kilogram) {
//   return kilogram * 1000;
// }

// // 2.  Then, use function expression and invoke it.
// const weightConverted = function (kilograms) {
//   return kilograms * 1000;
// };
// console.log(weightConverted(3));
// // 3. Write in a one line comment, the difference between function declaration and function expression.
// // The main difference is that function declarations are hoisted (can be used before declaration),
// // while function expressions are not hoisted and need to be defined before use.

// // 4. Finally, use a one line arrow function and invoke it.
// const convertedWeight = (kilograms) => kilograms * 1000;
// console.log(convertedWeight(2));

////////////////////////////////////////////////

// Exercise 3 : Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function (numberOfChildren, partnerName, geographicLocation, jobTitle) {
//   document.body.innerHTML =
//     `You will be a` +
//     " " +
//     jobTitle +
//     " " +
//     `in` +
//     " " +
//     geographicLocation +
//     " " +
//     "and married to" +
//     " " +
//     partnerName +
//     " " +
//     "with" +
//     " " +
//     numberOfChildren +
//     " " +
//     "kids.";
// })(3, "Jessica", "New York", "Software developer");

//////////////////////////////////////////////////////

// Exercise 4 : Welcome

// John has just signed in to your website and you want to welcome him.
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// (function (userName) {
//   alert(`hello` + " " + userName);
// })(`joe`);
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// (function (userName) {
//   let welcomeDiv = document.createElement("div");
//   welcomeDiv.className = "nav-item nav-link";
//   let profileImgUrl =
//     "https://pbs.twimg.com/profile_images/1725495920840585217/rdF0kKid_400x400.jpg";
//   welcomeDiv.innerHTML = `
//       <img src="${profileImgUrl}" alt="${userName} Profile Picture" class="rounded-circle" width="50" height="50"> Welcome, ${userName}!
//     `;
//   document.querySelector(".navbar-nav").appendChild(welcomeDiv);
// })("Joe");

/////////////////////////////////////////////////////

// Exercise 5 : Juice Bar
// function makeJuice(size) {
//   function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
//     document.body.innerHTML = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, and ${thirdIngredient}`;
//   }
//   addIngredients("Strawberry", "Banana", "Apple");
// }
// makeJuice("Small");

//part 2

// function makeJuice(size) {
//   const ingredients = []; //In the makeJuice function, create an empty array named ingredients.
//   function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
//     ingredients.push(firstIngredient, secondIngredient, thirdIngredient); // and push them into the ingredients array.

//     function displayJuice() {
//       document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(
//         ", "
//       )}`;
//     }
//     displayJuice();
//   }
//   addIngredients("Strawberry", "Banana", "Apple");
//   addIngredients("Orange", "Mango", "Pineapple");
// }
// makeJuice("Small");

///////////////////////////////////////////////////
// Daily Challenge: Groceries
// let client = "John";

// const groceries = {
//   fruits: ["pear", "apple", "banana"],
//   vegetables: ["tomatoes", "cucumber", "salad"],
//   totalPrice: "20$",
//   other: {
//     paid: true,
//     meansOfPayment: ["cash", "creditCard"],
//   },
// };

// const displayGroceries = () => {
//   groceries.fruits.forEach((fruit) => {
//     console.log(fruit);
//   });
// };
// displayGroceries();

// const cloneGroceries = () => {
//   // Create a copy of the client variable
//   let user = client;

//   // Change the client variable
//   client = "Betty";

//   // Check if the modification is seen in the user variable
//   console.log("User variable:", user);
//   // Yes, we will see the modification in the user variable because it's a simple assignment, and both user and client reference the same value.

//   // Create a copy of the groceries variable
//   let shopping = groceries;

//   // Change the value of the totalPrice key
//   groceries.totalPrice = "35$";

//   // Check if the modification is seen in the shopping object
//   console.log("Shopping object after changing totalPrice:", shopping);
//   // yes, we will  see the modification in the original groceries object. The shopping object is a shallow copy, so modifications to nested objects are reflected in the original.

//   // Change the value of the paid key in the other object
//   shopping.other.paid = false;

//   // Check if the modification is seen in the shopping object
//   console.log("Shopping object after changing paid:", shopping);
//   // Yes, we will see the modification in the original groceries object. The shopping object is a shallow copy, so modifications to nested objects are reflected in the original.
// };

// // Call the function to demonstrate the behavior
// cloneGroceries();

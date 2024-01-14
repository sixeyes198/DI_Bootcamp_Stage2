//  Exercise 1 : Location
//Analyze the code below. What will be the output?

// const person = {
//   name: "John Doe",
//   age: 25,
//   location: {
//     country: "Canada",
//     city: "Vancouver",
//     coordinates: [49.2827, -123.1207],
//   },
// };

// const {
//   name,
//   location: {
//     country,
//     city,
//     coordinates: [lat, lng],
//   },
// } = person;

// console.log(
//   `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
// );

// The output will be : I'm ,  "John Doe"  from "Vancouver". latitude (49.2827), Longitude (-123.1207)

// Exercise 2: Display Student Info
//Using the code under, destructure the parameter inside the function and return a string

// function displayStudentInfo(objUser) {
//   //destructuring
//   const { first, last } = objUser;
//   console.log(`your full name is: ${first} ${last}`);
// }

// displayStudentInfo({ first: "Elie", last: "Schoppik" });

// Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 };
//1.  Using methods taught in class, turn the users object into an array:

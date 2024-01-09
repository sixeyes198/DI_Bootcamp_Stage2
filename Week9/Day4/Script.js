// Exercise 1 : Analyzing
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ["bread", ...vegetables, "chicken", ...fruits];
// console.log(result);
// OUTPUT WILL BE result=[bread,carrot,potato,chicken,apple,orange]
// ------2------
// const country = "USA";
// console.log([...country]);
//OUTPUT will be country=[u,s,a]
// // ------Bonus------
// let newArray = [...[, ,]];
// console.log(newArray);
//output will be newArray = [undefined,undefined]

///////////////////////////////

// Exercise 2 : Employees
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
//1. Using the map() method, push into a new array the firstname of the user and a welcome message.

// let newWelcomeArry = users.map((element) => {
//   return "Hello" + " " + element.firstName;
// });
// console.log(newWelcomeArry);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

// let newDevArray = users
//   .filter((element) => {
//     if (element.role === "Full Stack Resident") {
//       return element;
//     }
//   })
//   .map((element) => console.log(element.lastName)); //3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
// console.log(newDevArray);

///////////////

// Exercise 3 : Star Wars

// const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
//1. Use the reduce() method to combine all of these into a single string.

// let newSentence = epic.reduce((acc, val) => {
//   return acc + " " + val;
// });
// console.log(newSentence);

//////////////////

// Exercise 4 : Employees #2

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

///1. using the filter() method, create a new array, containing the students that passed the course.
///2. Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
let newArry = students
  .filter((element) => element.isPassed === true)
  .forEach((element) =>
    console.log(
      `congragulation ${element.name} you passed the course in ${element.course} you on the right path `
    )
  );
// console.log(newArry);

// Exercises XP Ninja

//Exercise 1 : Dog Age To Human Years

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];
//1. Use a loop to find the sum of the dogs’ ages in human years. Hint: 1 dog year equals 7 human years

let sum = 0;

data.forEach((element) => {
  if (element.type === "dog") {
    sum += element.age * 7;
  }
});
console.log(sum);

//2. Using the reduce() method, find the sum of the dogs’ ages in human years.
const sumUsinReduce = data.reduce((acc, element) => {
  if (element.type === "dog") {
    return acc + element.age * 7;
  }
  return acc;
}, 0);
console.log(`Sum of dogs in human years: ${sumUsinReduce}`);

/////// Exercise 2 : Email ///////

//Clean up this email to have no whitespaces. Do it in a single line (return a new string).

const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";
const cleanEmail = userEmail3.split("").join("");
console.log(cleanEmail);

//////////// Exercise 3 : Employees #3 Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value. Example: { 'Bradley Bouley': 'Full Stack Resident' }
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const usersWithFullNameAsKey = users.map((user) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  return { [fullName]: user.role };
});
console.log(usersWithFullNameAsKey);

//Exercise 4 : Array To Object
// Use a for loop to get this output { x: 1, y: 1, z: 2 };
const letters = ["x", "y", "z", "z"];

const count = {};

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  count[letter] = (count[letter] || 0) + 1;
}
console.log(count);
// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

const countMap = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(countMap);

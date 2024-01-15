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
const arrayOfUsers = Object.entries(users);
console.log(arrayOfUsers); // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//2. Modify the outcome of part 1, by multipling the user’s ID by 2.

const newArrayDoubleIds = arrayOfUsers.map(([key, value]) => [key, value * 2]);
console.log(newArrayDoubleIds);

//Exercise 4 : Person Class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// Output is string of object

/// Exercise 5 : Dog Class

class Dog {
  constructor(name) {
    this.name = name;
  }
}

//   Analyze the options below. Which constructor will successfully extend the Dog class?

// 1
//  class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };

// 2  this is the correct answer because its extanding with extends and have the super class constructor and Add a new property
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

// 3
// class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };

// 4
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };

/// Exercise 6 : Challenges
// 1.  Evaluate these (ie True or False)

// [2] === [2] // flase comparing  two arrays equal only if they refer to the same obj in the memory ie: 0x01- 0x02
// {} === {} //  flase  same goes for objects

// 2. What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; // {number: 4}
// const object2 = object1; // first its {number: 5} // then {number: 4}
// const object3 = object2; // {number: 5} // then {number: 4}
// const object4 = { number: 5 }; // {number: 5}

// object1.number = 4;
// console.log(object2.number); // {number: 4}
// console.log(object3.number); // {number: 4}
// console.log(object4.number); // { number: 5}

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  sound(noise) {
    return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${noise}`;
  }
}

const farmerCow = new Mamal("Lily", "cow", "brown and white");
const cowSound = farmerCow.sound("mooo");
console.log(cowSound);

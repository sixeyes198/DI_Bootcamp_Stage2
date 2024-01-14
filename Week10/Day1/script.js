/////// Object.keys() /////////
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };

//   console.log(Object.keys(object1));

///////   Object.Values() /////////
//   const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };

//   console.log(Object.values(object1));
// expected output: ["somestring", 42, false]

////////// Object.Entries() ///////
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };

//   console.log(Object.entries(object1));
// expected output:
// [ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false ] ]

//   for (let [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }

// let myObj = {
//   name: "John",
//   lastName: "Doe",
//   age: 25,
//   friends: ["Mark", "Lucie", "Ana"],
// };

// console.log(Object.entries(myObj));

// for (let [key, value] of Object.entries(myObj)) {
//   console.log(`${key}: ${value}`);
// }

// const address = {
//   street: "Evergreen Terrace",
//   number: "742",
//   city: "Springfield",
//   state: "NT",
//   zip: "49007",
// };

// const { street: s, city: c } = address;
// console.log(s); //Evergreen Terrace
// console.log(c); //Springfield
// The key 'street' has a match in the data address. Therefore, the data value 'Evergreen Terrace' is assigned to the variable s.

//////// Property Value Shorthand: /////
// const address = {
//     street: 'Evergreen Terrace',
//     number: '742',
//     city: 'Springfield',
//     state: 'NT',
//     zip: '49007',
//   };

//   const { street, city } = address;
//   console.log(street) //Evergreen Terrace
//   console.log(city) //Springfield

//   //Other Example
//   let {e, f} = { e: 10, f: 20 };
//   console.log('e: ',e); // e: 10
//   console.log('f: ',f); // f: 20

////////////// Nested Object Destructuring  //////////////////
// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

//////// We define 3 local variables: name, maths, science //////
// Default value to the variable science, in case the key doesn't exist in the object student
// const { name, scores: {maths, science = 50} } = student;

// console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.
// scores are not defined as a variable. Instead, we use nested destructuring to extract the maths and science values from the nestedscores object.

//////// Object Destructuring Used As An Assignment To A Function ////////
// Destructuring can also be applied to function parameters to extract values and assign them to local variables

// const student = {
//   name: "John Doe",
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//     science: 85,
//   },
// };

// Without Destructuring
// function displaySummary(student) {
//   console.log("Hello, " + student.name);
//   console.log("Your Maths score is " + (student.scores.maths || 0));
//   console.log("Your English score is " + (student.scores.english || 0));
//   console.log("Your Science score is " + (student.scores.science || 0));
// }

// With Destructuring
// function displaySummary({
//   name,
//   scores: { maths = 0, english = 0, science = 0 },
// }) {
//   console.log("Hello, " + name);
//   console.log("Your Maths score is " + maths);
//   console.log("Your English score is " + english);
//   console.log("Your Science score is " + science);
// }

// displaySummary(student);

////////////// Spreading /////////
// let obj = {foo: 1, bar: 2};
// let newObj = {...obj, baz: 3}
// console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }

// If property keys clash, the property that is mentioned last “wins”:
// let obj = {foo: 1, bar: 2, baz: 3};
// let newObj = {...obj, foo: true}
// console.log(newObj) //{ foo: true, bar: 2, baz: 3 }

// let newObj =  {foo: true, ...obj}
// console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }

// let newObj = {...'abc'}
// console.log(newObj) //{ '0': 'a', '1': 'b', '2': 'c' }

// let newObj = {...['a', 'b']}
// console.log(newObj) //{ '0': 'a', '1': 'b' }

// Excersice ,Analyse this code before executing it. What will be the output ?
// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);
//Outout is {admin:true,name: "Lydia", age: 21}

//class and methods
/////////class decleration//////

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

////// Class Body And Method Definitions //////
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// //instance of the class Rectangle
// const square = new Rectangle(10, 10);

// //calling the method
// console.log(square.calcArea()); // 100

// console.log(square);
//Rectangle {height: 10, width: 10}
//__proto__:
//  constructor: class Rectangle
//  calcArea: ƒ calcArea()
//__proto__: Object

//Excersice
//Display the type of each rabbit and make them speak

// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// // console.log("Type of killerRabbit:", killerRabbit.type);
// // console.log("Type of blackRabbit:", blackRabbit.type);

// killerRabbit.speak("I'll get you!");
// blackRabbit.speak("Whats up doc!");

///////// Built-In Methods: Getters And Setters  ////////

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter Getters, is a method that lets us get some data from a class.
//   get area() {
//     return this.height * this.width;
//   }

//   // Setter Setters, are methods that give us the ability to set some fields of the class.
//   set area(factor) {
//     this.width = this.height * factor;
//   }
// }

// const square = new Rectangle(10, 10);
// square.area = 2;
// square.area; //200
// console.log(square.area);

///////   Sub Classing With Extends /////
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, noise) {
//     super(name); // call the super class constructor and pass in the name parameter
//     // Add a new property
//     this.noise = noise;
//   }

//   speak() {
//     console.log(`${this.name} barks.It says ${this.noise}`);
//   }
// }

// let d = new Dog("Mitzie", "Wouaf");
// console.log(d.name); // Mitzie
// d.speak(); // Mitzie barks.It says Wouaf
// console.log(d);
//Dog {name: "Mitzie", noise: "Wouaf"}
//__proto__: Animal
//  constructor: class Dog
//  speak: ƒ speak()
//__proto__: Object

//////// Date Object Examples  ///////

let date = document.getElementById("datetime");
date.addEventListener("change", function (event) {
  let date = new Date(event.target.value);
  console.log(date);
});

let now = new Date();
console.log(now);

let dateString = now.toString();
console.log("toString", dateString);

let day = now.getDay();
console.log("getDay", day);

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayName = dayNames[day];
console.log("dayNames", dayName);

console.log("getMonth", now.getMonth() + 1);
//returns the month of the date from 0 to 11,
//with 0 being January and 11 being December.

console.log("getDate", now.getDate());
// gives us the number for the dat of the month.

console.log("getFullYear", now.getFullYear());
// returns the 4 digit version of the year.

console.log("getHours", now.getHours());
// gives us a number from 0 to 23,
//which corresponds to midnight and 11pm.

console.log("getMinutes", now.getMinutes());
// returns the minutes of the hour from 0 to 59.

console.log("getSeconds", now.getSeconds());
// returns the seconds of the minute from 0 to 59.

console.log("getMilliseconds", now.getMilliseconds());
// returns a number from 0 to 999.

console.log("getTime", now.getTime());
// gives us the number of milliseconds that have elapsed since Jan 1, 1970 midnight UTC.

let today = new Date();
let anotherDay = new Date(2021, 1, 19, 11, 55);
let diff = anotherDay - today;
console.log("diff", diff);
let days = diff / (1000 * 60 * 60 * 24);
console.log("days", days);
console.log(Math.floor(days));

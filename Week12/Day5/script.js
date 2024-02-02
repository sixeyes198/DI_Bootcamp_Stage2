/// introduction node.js

// const a = 2;
// const b = 5;

// setTimeout(() => {
//   console.log(a + b);
// }, 4000);

const greeting = require("./greeting.js");
greeting.Hello("joe");

greeting.bye("Joe");

const slugify = require("slugify");
console.log(slugify("My new web site"));

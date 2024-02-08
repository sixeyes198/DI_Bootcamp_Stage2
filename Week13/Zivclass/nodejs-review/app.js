// const { getUsers } = require("./users.js");
import { getUsers } from "./users.cjs";

// console.log(c);

/** 
1. fetch users in a file called users.js
2. return from a function the users 
3. in app.js , console log only the name of the users
4. in index.js console log only the email of the users
*/
getUsers().then((data) => {
  printNames(data);
});

function printNames(arr) {
  arr.forEach((element) => {
    console.log(element.name);
  });
}

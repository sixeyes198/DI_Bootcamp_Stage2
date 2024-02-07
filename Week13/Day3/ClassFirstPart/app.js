// console.log  only the users name
// const { users } = require("./users.js");
import { users } from "./users.js";

// users();
async function name() {
  try {
    const usersName = await users();
    usersName.forEach((element) => {
      console.log(element.name);
    });
  } catch (e) {
    console.log(e);
  }
}
name();

///////** NOTES use extention .cjs on the file name when you want to use the module es6

//// When we want to ignore all the node modules in the subfolders we can use the gitinit file and **/node_modules

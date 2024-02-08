const { getUsers } = require("./users.cjs");
// import { getUsers } from "./users.js";

async function emails() {
  try {
    const users = await getUsers();
    users.forEach((element) => {
      console.log(element.email);
    });
  } catch (error) {
    console.log(error);
  }
}
emails();

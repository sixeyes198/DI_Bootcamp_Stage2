//  console.log the email of the users
// const { users } = require("./users.js");
import { users } from "../users.js";

async function emails() {
  try {
    const userEmails = await users();
    userEmails.forEach((element) => {
      console.log(element.email);
    });
  } catch (error) {
    console.log(error);
  }
}
emails();

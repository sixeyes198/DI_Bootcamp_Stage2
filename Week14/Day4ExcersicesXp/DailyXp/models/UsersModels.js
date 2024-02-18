import { db } from "../config/db.js";

//using bcrypt
import bcrypt from "bcrypt";
await bcrypt.compare(password, hash);

//example how to use bcrypt

// const bcrypt = require("bcrypt");
// const password = 1234567;

// const salt = bcrypt.genSaltSync(10);
// console.log(salt);

// const hash = bcrypt.hashSync(password+"", salt);
// console.log(hash);

// const hashpassword = '$2b$10$V7ffSkuYTlfXVXUr.CX9eOj36YqAkA1DGcgDUgL48Okx.7Gj3TXCG';

// const match = bcrypt.compareSync(password+"", hashpassword);
// console.log(match);

//1 POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database

// export const createNewUser = (userName, password) => {
//   return db("users").insert();
// };
//2 POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.

//3 GET /users: Retrieve a list of all registered users from the database

//4 GET /users/:id: Retrieve a specific user by ID from the database

// 5 PUT /users/:id: Update a user’s information by ID in the database

import { db } from "../config/db.js";

//1 POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database

export const newUserRegister = (username, password) => {
  return db("hashpwd").insert({ username, password }, [
    "id",
    "username",
    "password",
  ]);
};

export const userRegister = (email, username, first_name, last_name) => {
  return db("users").insert({ email, username, first_name, last_name }, [
    "id",
    "email",
    "username",
    "first_name",
    "last_name",
  ]);
};

//2 POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
export const userLogin = (username) => {
  return db("hashpwd")
    .select("username", "password")
    .where({ username: username });
};

//3 GET /users: Retrieve a list of all registered users from the database

export const allUsers = (email, username, first_name, last_name) => {
  return db("users").select("email", "username", "first_name", "last_name");
};
//4 GET /users/:id: Retrieve a specific user by ID from the database

export const search4Users = (id) => {
  return db("users")
    .select("id", "email", "username", "first_name", "last_name")
    .where({ id: id });
};

// 5 PUT /users/:id: Update a user’s information by ID in the database

export const editUser = (email, username, first_name, last_name) => {
  return db("users")
    .where({ id: id })
    .update({ email, username, first_name, last_name }, [
      "email",
      "username",
      "first_name",
      "last_name",
    ]);
};

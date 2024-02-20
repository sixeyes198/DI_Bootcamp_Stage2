import {
  newUserRegister,
  userRegister,
  allUsers,
  search4Users,
  editUser,
  userLogin,
} from "../models/UsersModels.js";
//using bcrypt
import bcrypt from "bcrypt";
// await bcrypt.compare(password, hash);

// 1 creating a new user
export const _newUserRegister = async (req, res) => {
  try {
    const { username, password, email, first_name, last_name } = req.body;
    const user = await userRegister(email, username, first_name, last_name);
    const hashedPassword = bcrypt.hashSync(password + "", 10);
    console.log(password);
    console.log(hashedPassword);
    const response = await newUserRegister(username, hashedPassword);
    console.log(response);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "Cant create new user" });
  }
};
// 2 user login

export const _userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userLogin(username);
    if (user.length === 0) {
      return res.status(404).json({ messege: "user not found " });
    }
    const match = bcrypt.compareSync(password + "", user[0].password);
    if (!match) {
      return res.status(404).json({ messege: "Password is incorrect" });
    }
    res
      .status(200)
      .json({ username: user[0].username, messege: "You are  logged in" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "Password is incorrect" });
  }
};

/// getting all users

export const _allUsers = async (req, res) => {
  try {
    const response = await allUsers();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "Cant find users" });
  }
};

// searching for users by id

export const _search4Users = async (req, res) => {
  try {
    const response = await search4Users(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "Cant find user" });
  }
};

// Edit user information

export const _editUser = async (req, res) => {
  const { email, username, first_name, last_name } = req.body;
  try {
    const response = await editUser(email, username, first_name, last_name);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "Cant edit the information" });
  }
};

//example how to use bcrypt

// // const bcrypt = require("bcrypt");
// const password = 1234567;

// const salt = bcrypt.genSaltSync(10);
// console.log(salt);

// const hash = bcrypt.hashSync(password + "", salt);
// console.log(hash);

// const hashpassword =
//   "$2b$10$V7ffSkuYTlfXVXUr.CX9eOj36YqAkA1DGcgDUgL48Okx.7Gj3TXCG";

// // comparing to get true or false
// const match = bcrypt.compareSync(password + "", hashpassword);
// console.log(match);

import express from "express";

import {
  _newUserRegister,
  _allUsers,
  _search4Users,
  _editUser,
  _userLogin,
} from "../controllers/UsersControllers.js";

const router = express.Router();

router.post("/register", _newUserRegister);
router.post("/login", _userLogin);
router.get("/users", _allUsers);
router.get("/users/:id", _search4Users);
router.put("/users/:id", _editUser);
export default router;

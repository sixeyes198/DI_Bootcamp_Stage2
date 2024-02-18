import express from "express";
import {
  _getAllPosts,
  _search4Id,
  _newPost,
  _editPost,
  _delPost,
} from "../controllers/PostsController.js";

const router = express.Router();

router.get("/posts", _getAllPosts);
router.get("/posts/:id", _search4Id);
router.post("/posts", _newPost);
router.put("/posts/:id", _editPost);
router.delete("/posts/:id", _delPost);

export default router;

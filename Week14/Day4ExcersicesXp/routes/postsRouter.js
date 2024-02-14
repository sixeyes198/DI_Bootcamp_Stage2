import express from "express";
const router = express.Router();

import {
  getAllData,
  //   getPostById,
  //   createPost,
  //   updatePost,
  //   deletePost,
} from "../controllers/PostsControler.js";

router.get("/post", getAllData);
// router.get("/:id", getPostById);
// router.post("/", createPost);
// router.put("/:id", updatePost);
// router.delete("/:id", deletePost);

export default router;

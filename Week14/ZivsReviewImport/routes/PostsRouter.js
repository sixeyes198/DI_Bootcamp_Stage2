import express from "express";
import {
  _getAllPosts,
  _getPostsId,
  _getPostsIdParam,
} from "../controllers/postsController.js";

const router = express.Router();

router.get("/posts", _getAllPosts);
router.get("/postsSearch", _getPostsId);
router.get("/postsParam/:id", _getPostsIdParam);

export default router;

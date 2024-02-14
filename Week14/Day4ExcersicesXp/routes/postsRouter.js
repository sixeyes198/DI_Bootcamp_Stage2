import express from "express";
import { getAllData } from "../controllers/PostsControler.js";

const router = express.Router();

router.get("/post", getAllData);

export default router;

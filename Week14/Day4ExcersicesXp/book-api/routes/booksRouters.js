import express from "express";
import {
  _getAllBooks,
  _searchForBook,
} from "../controllers/BooksControllers.js";

const router = express.Router();

router.get("/api/books", _getAllBooks);
router.get("/api/books/:id", _searchForBook);
export default router;

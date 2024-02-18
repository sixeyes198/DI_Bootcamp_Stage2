import { db } from "../config/db.js";

export const getAllBooks = () => {
  return db("books").select("id", "title", "author", "publishedyear");
};

export const searchForBook = (id) => {
  return db("books")
    .select("id", "title", "author", "publishedyear")
    .where({ id: id });
};

// export const createBook = async () => {
//   const response = await db("books").insert({
//     title: "My new book ",
//     author: "John doe",
//     publishedyear: 2024,
//   });
// };
// createBook();

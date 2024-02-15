import { db } from "../config/db.js";

export const getAllPosts = () => {
  return db("posts").select("id", "title", "content");
};

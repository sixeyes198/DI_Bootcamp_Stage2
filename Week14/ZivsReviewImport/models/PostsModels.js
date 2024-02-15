import { db } from "../config/db.js";

export const getAllPosts = () => {
  return db("posts").select("id", "title", "content");
};

export const getPostsId = (name) => {
  return db("posts").select("id", "title", "content").where("id", name);
};

export const getPostsIdParam = (id) => {
  return db("posts").select("id", "title", "content").where({ id: id });
};

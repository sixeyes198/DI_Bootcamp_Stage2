import { db } from "../config/db.js";

// GET ALL POSTS
export const getAllPosts = () => {
  return db("posts").select("id", "title", "content");
};

// GET /posts/:id: Return a specific blog post based on its id.
export const search4Id = (id) => {
  return db("posts").select("id", "title", "content").where({ id: id });
};

// POST /posts: Create a new blog post.

export const newPost = (title, content) => {
  return db("posts").insert(
    {
      title,
      content,
    },
    ["id", "title", "content"]
  );
};

/// Put updating content

export const editPost = (title, content, id) => {
  console.log(id, title, content);
  return db("posts")
    .where({ id: id })
    .update({ title, content }, ["title", "content"]);
};

// DELETE /posts/:id: Delete a blog post.

export const delPost = (id) => {
  return db("posts").where({ id: id }).delete();
};

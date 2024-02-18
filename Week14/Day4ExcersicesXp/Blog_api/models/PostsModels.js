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

// export const newPost = async () => {
//   const response = await db("posts").insert({
//     title: "JavaScript course",
//     content: "New js course starting this summer",
//   });
// };
// newPost();

// POST /posts: Create a new blog post.

// const pushData = async () => {
//   const res = await db("posts").insert({
//     title: " apple vison pro",
//     content:
//       "the apple vision pro is the best product in the market right now ,Order now at a price of : $5000",
//   });
//   console.log(res);
// };
// pushData();

// PUT /posts/:id: Update an existing blog post.

// db("posts")
//   .update({ title: "javascript & PostgressSQL" })
//   .where({ id: 5 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DELETE /posts/:id: Delete a blog post.

// db("posts")
//   .delete()
//   .where({ id: 6 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

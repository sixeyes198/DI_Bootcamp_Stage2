import express from "express";
import postsRouter from "../routes/postsRouter.js";
import { getAllData } from "../config/pgConnects.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/posts", postsRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(process.env.PORT || 3002, () => {
  console.log(`Running on ${process.env.PORT || 3002}`);
});

// app.use(router);
// app.get("/posts", (req, res) => {
//   res.json(blogPosts);
// });

// app.get("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const post = blogPosts.find((item) => item.id == id);
//   res.json(post);
// });

// app.post("/posts", (req, res) => {
//   const { title, content } = req.body;
//   const newPost = {
//     id: blogPosts.length + 1,
//     title,
//     content,
//   };
//   blogPosts.push(newPost);
//   res.json(blogPosts);
// });

// app.put("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const { title, content } = req.body;
//   const index = blogPosts.findIndex((item) => item.id == id);
//   blogPosts[index] = { ...blogPosts[index], title, content };
//   res.json(blogPosts);
// });

// app.delete("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const blogPostsIndex = blogPosts.findIndex((item) => item.id == id);
//   blogPosts.splice(blogPostsIndex, 1);
//   res.json(blogPosts);
// });

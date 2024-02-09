import express from "express";

const app = express();

let blogData = [
  {
    id: 1,
    title: "Anime",
    content: " anime of the week",
  },
  {
    id: 2,
    title: "Racing",
    content: " race of the year",
  },
  { id: 3, title: "grammys", content: "best hip-hop album " },
];

//get all blog data
app.get("/posts", (req, res) => {
  res.send(blogData);
});

// Get a blog post by id
app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogData.find((post) => post.id === postId);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send("post not found");
  }
});

// Create a new blog post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: blogData.length + 1,
    title,
    content,
  };
  blogData.push(newPost);
  res.status(201).send("new blog post created succesfully");
});

// Update an existing blog post by id
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = blogData.findIndex((post) => post.id === postId);
  if (postIndex !== -1) {
    blogData[postIndex].title = title;
    blogData[postIndex].content = content;
    res.send("Blog post updated successfully");
  } else {
    res.status(404).send("Post not found");
  }
});

// Delete a blog post by id
app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = blogData.findIndex((post) => post.id === postId);
  if (postIndex !== -1) {
    blogData.splice(postIndex, 1);
    res.send("Blog post deleted successfully");
  } else {
    res.status(404).send("Post not found");
  }
});

app.listen(3000, "localhost", () => {
  console.log("Server is listening on port 3000");
});

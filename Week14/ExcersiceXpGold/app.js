import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on ${process.env.PORT || 3000}`);
});

const blogPosts = [
  {
    id: 1,
    title: "Fantastic Voyage",
    content:
      "An exhilarating journey into the human body. The special effects were mind-blowing, and the storyline kept me on the edge of my seat the whole time. Highly recommend!",
    timestamp: "2024-02-12T08:30:00Z",
  },
  {
    id: 2,
    title: "Mystic Shadows",
    content:
      "A mesmerizing tale of magic and intrigue. The characters were compelling, and the plot twists kept me guessing until the very end. A must-watch for fantasy lovers!",
    timestamp: "2024-02-12T10:15:00Z",
  },
  {
    id: 3,
    title: "Galactic Odyssey",
    content:
      "A thrilling space adventure that left me breathless. The visual effects were stunning, and the action sequences were out of this world. 10/10 would watch again!",
    timestamp: "2024-02-12T12:45:00Z",
  },
];

// GET /posts: Retrieve a list of all blog posts.

app.get("/posts", (req, res) => {
  res.json(blogPosts);
});
// GET /posts/:id: Retrieve a specific blog post by ID.
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const filterdPost = blogPosts.find((item) => item.id == id);
  if (!filterdPost) {
    return res.status(404).send("cant access the specified post");
  }
  res.json(filterdPost);
});
// POST /posts: Create a new blog post.
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: blogPosts.length + 1,
    title,
    content,
  };
  blogPosts.push(newPost);
  res.json(blogPosts);
});
// PUT /posts/:id: Update a blog post by ID.

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const index = blogPosts.findIndex((item) => item.id == id);
  blogPosts[index] = { title, content };
  res.json(blogPosts);
});

// DELETE /posts/:id: Delete a blog post by ID.

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const blogPostsindx = blogPosts.findIndex((item) => item.id == id);
  blogPosts.splice(blogPostsindx, 1);
  res.json("Blog successfully deleted");
});

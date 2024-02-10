import express from "express";
import { fetchPosts } from "./data/dataService.js";

const app = express();

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data retrieved succesfully", posts);
    res.send(posts);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(5000, "localhost", () => {
  console.log("listening on port 5000");
});

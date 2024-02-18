import {
  getAllPosts,
  search4Id,
  newPost,
  editPost,
  delPost,
} from "../models/PostsModels.js";

// GET ALL POSTS
export const _getAllPosts = async (req, res) => {
  try {
    const response = await getAllPosts();
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "You got lost" });
  }
};

// // Get post by id.

export const _search4Id = async (req, res) => {
  try {
    const response = await search4Id(req.params.id);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "I cant find the specifec post" });
  }
};

// // POST /posts: Create a new blog post.

export const _newPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const response = await newPost(title, content);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "Sorry could not enter the data" });
  }
};

// PUT // updating an existing post
export const _editPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const response = await editPost(title, content, req.params.id);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "Cant edit the specified post " });
  }
};

// DELETE // deleting a post

export const _delPost = async (req, res) => {
  try {
    const response = await delPost(req.params.id);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "cant delete post" });
  }
};

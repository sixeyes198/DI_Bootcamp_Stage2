import { getAllPosts, search4Id } from "../models/PostsModels.js";

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

// export const _newPost = async (req, res) => {
//   const { title, contnet } = req.body;
//   const newPostData = { ...req.body };
//   try {
//     const response = await newPost(newPostData);
//     res.json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ messege: "Sorry could not enter the data" });
//   }
// };

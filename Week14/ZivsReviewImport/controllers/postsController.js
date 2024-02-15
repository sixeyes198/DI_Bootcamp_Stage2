import { getAllPosts } from "../models/PostsModels.js";

export const _getAllposts = async (req, res) => {
  try {
    const response = await getAllPosts();
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "You got lost" });
  }
};

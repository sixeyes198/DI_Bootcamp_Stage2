import {
  getAllPosts,
  getPostsId,
  getPostsIdParam,
} from "../models/PostsModels.js";

// Getting all postsdata
export const _getAllPosts = async (req, res) => {
  try {
    const response = await getAllPosts();
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "You got lost" });
  }
};

// Getting posts by id
export const _getPostsId = async (req, res) => {
  //   const { id } = req.query;
  try {
    const response = await getPostsId(req.query.id);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json("You got lost in the matrix");
  }
};

export const _getPostsIdParam = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getPostsIdParam(id);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

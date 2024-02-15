// import knex from "knex";
// export const dataBase = knex({
//   client: "pg",
//   connection: {
//     host: "localhost",
//     port: 5432,
//     user: "postgres",
//     database: "postgres",
//     password: "yossi",
//   },
// });

// db.select("id", "name", "price").from("products")
// const getAllData = async () => {
//   const res = await dataBase.select("id", "title", "content").from("posts");
//   console.log(res);
// };

const getAllData = async () => {
  try {
    const result = await dataBase
      .select("id", "title", "content")
      .from("posts");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// const getPostById = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
//     if (result.rows.length === 0) {
//       const error = new Error("Post not found");
//       error.status = 404;
//       throw error;
//     }
//     res.json(result.rows[0]);
//   } catch (error) {
//     next(error);
//   }
// };

// const createPost = async (req, res, next) => {
//   const { title, content } = req.body;
//   try {
//     const result = await pool.query(
//       "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
//       [title, content]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     next(error);
//   }
// };

// const updatePost = async (req, res, next) => {
//   const { id } = req.params;
//   const { title, content } = req.body;
//   try {
//     const result = await pool.query(
//       "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *",
//       [title, content, id]
//     );
//     if (result.rows.length === 0) {
//       const error = new Error("Post not found");
//       error.status = 404;
//       throw error;
//     }
//     res.json(result.rows[0]);
//   } catch (error) {
//     next(error);
//   }
// };

// const deletePost = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const result = await pool.query(
//       "DELETE FROM posts WHERE id = $1 RETURNING *",
//       [id]
//     );
//     if (result.rows.length === 0) {
//       const error = new Error("Post not found");
//       error.status = 404;
//       throw error;
//     }
//     res.json({ message: "Post deleted successfully" });
//   } catch (error) {
//     next(error);
//   }
// };

export { getAllData };
// export { getAllData, getPostById, createPost, updatePost, deletePost };

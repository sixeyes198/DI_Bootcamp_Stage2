import express from "express";
import router from "./routes/TestingRouter.js";
import posts_router from "./routes/PostsRouter.js";
import postsId_router from "./routes/PostsRouter.js";
import postsIdParam_router from "./routes/PostsRouter.js";
import cors from "cors";

const app = express();
app.use(cors());
app.listen(3001);

app.use(router);
app.use(posts_router);
// app.use(postsId_router);
// app.use(postsIdParam_router);

import express from "express";
import router from "../ZivsReviewImport/routes/TestingRouter.js";

const app = express();

app.listen(3001);

app.use(router);

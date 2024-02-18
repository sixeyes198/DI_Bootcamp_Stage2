import express from "express";
import router from "./routes/booksRouters.js";

const app = express();

app.use(router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on ${process.env.PORT || 5000}`);
});

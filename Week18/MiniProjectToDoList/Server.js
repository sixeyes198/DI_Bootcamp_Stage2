const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/tasksRoute.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/todo", router);
app.use("/api/todo", router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});

app.post("/api/world", (req, res) => {
  console.log("Received:", req.body.value);
  res.json(
    `I received your POST request, this is what you sent me: ${req.body.value}`
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

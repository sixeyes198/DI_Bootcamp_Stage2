const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

app.get("/api/greetings", (req, res) => {
  res.json([
    { greeting1: "Hey" },
    { greeting2: "Yo" },
    { greeting3: "Whats up?" },
  ]);
});

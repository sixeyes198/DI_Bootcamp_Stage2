import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

let dataBase = [
  {
    id: 1,
    title: "anime",
    content: " figures",
  },
  {
    id: 2,
    title: "racing",
    content: " cars",
  },
  { id: 3, title: "grammys", content: "actor of the month" },
];

app.get("/dataBase", (req, res) => {
  res.json(dataBase);
});

fetch(dataBase);

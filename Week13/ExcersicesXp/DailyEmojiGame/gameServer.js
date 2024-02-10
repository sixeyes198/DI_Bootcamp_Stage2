import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.listen(5000, "localhost", () => {
  console.log("Listening on port 5000");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let emojis = [
  { emoji: "😊", name: "Smiling Face with Smiling Eyes" },
  { emoji: "🌟", name: "Glowing Star" },
  { emoji: "🐱", name: "Cat Face" },
  { emoji: "🌹", name: "Rose" },
  { emoji: "🎉", name: "Party Popper" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "😀", name: "grinning face" },
  { emoji: "😎", name: "smiling face with sunglasses" },
  { emoji: "😂", name: "face with tears of joy" },
  { emoji: "😍", name: "smiling face with heart-eyes" },
  { emoji: "🤔", name: "thinking face" },
];

let score = 0;

app.get("/api/emojis", (req, res) => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  //   res.send({ emoji: randomEmoji.emoji });

  const options = [];

  options.push(randomEmoji.name);
  while (options.length < 4) {
    const randomDistractorIndex = Math.floor(Math.random() * emojis.length);
    const randomDistractor = emojis[randomDistractorIndex].name;
    if (options.includes(randomDistractor)) {
      options.push(randomDistractor);
    }
  }
  options.sort(() => {
    Math.random() - 2;
  });
  res.send({ emoji: randomEmoji.emoji, options });
});

app.post("/guess", (req, res) => {
  const { guess, correctName } = req.body;
  if (guess === correctName) {
    score++;
    res.send({ correct: true, score });
  } else {
    res.send({ correct: false, score });
  }
});

app.get("/leaderboard", (req, res) => {
  // implement leaderboard logic fetching from a database...
  res.send({ score });
});

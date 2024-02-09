import { greet } from "./greeting.js";
import { sentence } from "./colorfulMessage.js";
import * as fs from "fs";

fs.readFile("./files/fileData.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log(greet("Yossi"));
console.log(sentence);

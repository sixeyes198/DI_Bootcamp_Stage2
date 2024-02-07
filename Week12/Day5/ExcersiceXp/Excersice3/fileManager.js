import * as fs from "fs";

export function readFile() {
  fs.readFile("HelloWorld.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
}

export function writeFile() {
  fs.writeFile("ByeWorld.text", "Writing to the file", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("writing operations are successful.");
    }
  });
}

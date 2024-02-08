import * as fs from "fs";

const data = fs.readFile("source.txt", "utf-8", (err, data) => {
  console.log(data);
  const newData = fs.writeFile(
    "destination.txt",
    "hey Now you are reading the content",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Writting operation complete");
      }
    }
  );
});

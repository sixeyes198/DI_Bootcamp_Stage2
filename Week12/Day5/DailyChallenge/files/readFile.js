import * as fs from "fs";

export function poem() {
  const data = fs.readFile("filedata.txt", "utf-8", (err, data) => {
    console.log(data);
  });
}

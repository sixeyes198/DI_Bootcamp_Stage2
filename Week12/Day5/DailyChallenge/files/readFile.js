import * as fs from "fs";

export function poem() {
  return new Promise((resolve, reject) => {
    fs.readFile("filedata.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

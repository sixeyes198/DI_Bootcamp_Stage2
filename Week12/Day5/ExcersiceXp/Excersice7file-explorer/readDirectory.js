import * as fs from "fs";
import path from "path";
// const folderName = "Week12Day5ExcersiceXpExcersice7file-explorer";
const folderName =
  "C:\\Users\\yossi\\OneDrive\\שולחן העבודה\\DI_Bootcamp_Stage2\\Week12\\Day5"; //path.resolve();
const data = fs.readdir(
  folderName,
  { encoding: "utf-8", withFileTypes: true },
  (err, data) => {
    console.log(data);
  }
);

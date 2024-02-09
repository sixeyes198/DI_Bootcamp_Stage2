import { poem } from "./readFile.js";

async function main() {
  try {
    const poemData = await poem();
    console.log(poemData);
  } catch (error) {
    console.log(`error reading the file: ${error}`);
  }
}

main();

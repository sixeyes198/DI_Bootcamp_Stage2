import { dataBase } from "../config/db.js";

export const getAllData = async () => {
  const res = await dataBase.select("id", "title", "content").from("posts");
  console.log(res);
};

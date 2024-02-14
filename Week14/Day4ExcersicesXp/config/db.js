// export const blogPosts = [
//   {
//     id: 1,
//     title: "Introduction to JavaScript",
//     content:
//       "JavaScript is a popular programming language used for creating interactive websites.",
//   },
//   {
//     id: 2,
//     title: "Getting Started with React",
//     content: "React is a JavaScript library for building user interfaces.",
//   },
//   {
//     id: 3,
//     title: "CSS Basics",
//     content:
//       "CSS stands for Cascading Style Sheets and is used for styling web pages.",
//   },
// ];

import knex from "knex";
export const dataBase = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "yossi",
  },
});

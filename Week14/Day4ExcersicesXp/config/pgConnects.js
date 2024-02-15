import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "yossi",
  },
});

console.log(db);

// const getAllData = async () => {
//   const result = await db.select("id", "title", "content").from("posts");
//   console.log(result);
// };

// export { getAllData };

/// how to use the import module

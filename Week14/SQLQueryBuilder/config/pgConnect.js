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

// console.log(db);

//Selecting the data from the table

// db.select("id", "name", "price").from("products")

// Resolving a promise with then & catch

//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Using async await to resolve the promise

// const getData = async () => {
//   const res = await db.select("id", "name", "price").from("products");
//   console.log(res);
// };

// getData();

//inserting data with then & catch
db("products")
  .insert({ name: "iphone 15 Pro max", price: 1000 })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//inserting the data with async await

// const pushData = async () => {
//   const res = await db("products").insert({
//     name: " apple vison pro",
//     price: 5000,
//   });
//   console.log(res);
// };
// pushData();

// db("products")
//   .update({ price: 5000 })
//   .where({ id: 4 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/// Deleting data at specified location by id
// db("products")
//   .delete()
//   .where({ id: 4 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

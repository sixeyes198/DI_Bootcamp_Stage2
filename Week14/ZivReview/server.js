import express from "express";

const app = express();

// app.listen(5000, "localhost", () => {
//   console.log("listening on port 5000");
// });

app.listen(process.env.PORT || 3001, () => {
  console.log(`Running on ${process.env.PORT || 3001}`);
});

const products = [
  { id: 1, name: "iphone", price: 1000 },
  { id: 2, name: "ipad", price: 700 },
  { id: 3, name: "iwatch", price: 500 },
];

app.get("/test", (req, res) => {
  res.send("<h1>You passed the test</h1>");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// getting data with req / params
app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(404).json("Product not found");
  }
  res.json(product);
});

/// getting data using query

app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filterProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filterProducts.length === 0) {
    return res.status(404).json({ message: "cant find your search" });
  }
  res.send("okk");
});

import express from "express";
import { products } from "../config/dataBase.js";

const router = express.Router();

router.use((req, res) => {
  res.send(req.body);
});

router.get("/api/products", (req, res) => {
  res.json(products);
});

router.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(404).json("Product not found");
  }
  res.json(product);
});

router.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  //  const newProduct = {... req.body, id: product.length+1} //another way to do it
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  if (!newProduct) {
    return router.status(404).send("Cant add product");
  }
  res.json(products);
});

// Put - Updating a product using both req.params && req.body

router.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const index = products.findIndex((item) => item.id == id);
  products[index] = { ...products[index], name, price };
  if (!products[index]) {
    return res.status(404).send({ message: " Product does not exist" });
  }
  res.json(products);
});

// Delete a product

router.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((item) => item.id == id);
  products.splice(productIndex, 1);
  if (!productIndex) {
    return res.status(404).send("Cant delete product");
  }
  res.json("product  deleted successfully");
});

export default router;

import {
  getAllProducts,
  getOneProduct,
  searchForProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductsController.js";

router.get("/api/products", getAllProducts);
router.get("/api/products/:id", getOneProduct);
router.get("/api/search", searchForProduct);
router.get("/api/products", createNewProduct);
router.get("/api/products/:id", updateProduct);
router.get("/api/products/:id", deleteProduct);

import { products } from "../config/dataBase.js";

export const getAllProducts = (req, res) => {
  res.json(products);
};

export const getOneProduct = (req, res) => {
  const { id } = req.params;
  const product = product.find((item) => item.id == id);
  if (!product) {
    return res.status(404).send("There is an issue ");
  }
  res.json(product);
};

export const searchForProduct = (req, res) => {
  console.log(req.query);
  const { name } = req.body;
  const filterProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
    if (filterProducts.length === 0) {
      return res.status(404).send("Your search was not found");
    }
    res.json(filterProducts);
  });
};

export const createNewProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(products);
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const indx = products.findIndex((item) => item.id == id);
  products[indx] = { ...products[indx], name, price };
  res.json(products);
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);
  products.splice(index, 1);
  res.json(products);
};

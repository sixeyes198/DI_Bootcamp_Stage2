const { products } = require("./products.js");

const shopProduct = (productName) => {
  const res = products.filter((product) => product.name == productName);
  console.log(res);
};

shopProduct("Laptop");
shopProduct("Running Shoes");
// console.log(products);

import { Link } from "react-router-dom";
const Shop = (props) => {
  const products = [
    { id: 1, name: "iMac", price: 800 },
    { id: 2, name: "iPhone", price: 1000 },
    { id: 3, name: "iWatch", price: 500 },
  ];
  return (
    <>
      <h1>Shop</h1>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <Link to={`/product/${item.id}/${item.name}`}>Buy now</Link>
          </div>
        );
      })}
    </>
  );
};
export default Shop;

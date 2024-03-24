import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const { products } = props;
  return (
    <>
      <h2>My shop</h2>
      {products.map((item) => {
        return (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div
              style={{
                display: "inline-block",
                margin: "20px",
                padding: "20px",
                border: "1px solid #333",
              }}
            >
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
            </div>
          </Link>
        );
      })}
    </>
  );
};
export default Shop;

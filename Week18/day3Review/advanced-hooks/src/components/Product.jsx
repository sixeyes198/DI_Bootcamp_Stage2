import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = (props) => {
  const { products } = props;
  const [prod, setrProd] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((item) => item.id == params.id);
    console.log(product);
    setrProd(product);
  }, []);

  const goToCart = () => {
    navigate(`/cart/${prod.name}/${prod.price}`);
  };

  return (
    <div>
      <h1>Product</h1>
      <h2>Name: {prod.name}</h2>
      <h2>Price: {prod.price}$</h2>
      <p>description: {prod.description}</p>
      <button onClick={() => goToCart()}>Buy now </button>
    </div>
  );
};
export default Product;

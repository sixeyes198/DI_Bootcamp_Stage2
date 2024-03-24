import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../App";

const Cart = (props) => {
  const params = useParams();
  //   const { mycart, setMyCart } = props;
  const { mycart, setMyCart } = useContext(AppContext);

  useEffect(() => {
    mycart.push({ name: params.name, price: params.price });
    setMyCart([...mycart]);
  }, []);

  const clearCart = () => {
    setMyCart([]);
  };

  return (
    <div>
      <h2>My Cart</h2>
      <div>
        {mycart.map((item, index) => {
          return (
            <div key={index}>
              {item.name} - {item.price}$
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
      <div>
        <Link to={"/"}>Continue shopping</Link>
      </div>
    </div>
  );
};
export default Cart;

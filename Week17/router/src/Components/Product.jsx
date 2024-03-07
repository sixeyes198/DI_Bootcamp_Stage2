import { useParams } from "react-router-dom";

const Product = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h2>Product Name:{params.b}</h2>
      <h2>Product Id:{params.a}</h2>
    </>
  );
};
export default Product;

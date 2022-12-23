import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  return (
    <div>
      <i>Product component: {params.productId}</i>
    </div>
  );
};

export default Product;

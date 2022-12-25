import { useLoaderData } from "react-router-dom";

import { IProduct } from "src/common/interfaces";
import SectionWrapper from "src/components/SectionWrapper";

const Product = () => {
  const data = useLoaderData() as { products: IProduct[] };

  return (
    <SectionWrapper title="Product component">
      <ul>
        {data.products.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default Product;

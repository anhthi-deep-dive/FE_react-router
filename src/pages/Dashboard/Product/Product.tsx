import { generatePath, useLoaderData, useNavigate } from "react-router-dom";

import { Routes } from "src/common/constants";
import { IProduct } from "src/common/interfaces";
import SectionWrapper from "src/components/SectionWrapper";

const Product = () => {
  const navigate = useNavigate();
  const data = useLoaderData() as { products: IProduct[] };

  return (
    <SectionWrapper title="Product component">
      <ul>
        {data.products.map((product) => (
          <li key={product.title}>
            <button
              onClick={() => {
                navigate(
                  generatePath(Routes.Dashboard.Product.path, {
                    productId: product.id,
                  })
                );
              }}
            >
              {product.title}
            </button>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default Product;

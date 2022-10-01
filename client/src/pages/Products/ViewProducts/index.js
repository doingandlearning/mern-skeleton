import React from "react";

import { getProducts } from "../../../utils/productService";

import "./ViewProducts.css";

export default function ViewProducts() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const products = await getProducts();
      setProducts(products);
    }
    getData();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div className="productCard">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.quantity} left</p>
          </div>
        );
      })}
    </div>
  );
}

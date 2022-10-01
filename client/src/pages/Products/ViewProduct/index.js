import React from "react";

import { getProduct } from "../../../utils/productService";

import { useParams } from "react-router-dom";

export default function ViewProducts() {
  const [product, setProduct] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    if (!id) return;
    async function getData() {
      const product = await getProduct(id);
      setProduct(product);
    }
    getData();
  }, [id]);

  return (
    <div>
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.quantity} left</p>
      </div>
    </div>
  );
}

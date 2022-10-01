import React, { useEffect, useState } from "react";

import { getProduct, updateProduct } from "../../../utils/productService";
import { Link, Navigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const [values, setValues] = React.useState({
    name: "",
    description: "",
    image: "",
    category: "",
    quantity: "",
    price: "",
    redirect: false,
    error: "",
  });

  const { id } = useParams();

  React.useEffect(() => {
    if (!id) return;
    getProduct(id).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          id: data._id,
          name: data.name,
          description: data.description,
          category: data.category,
          quantity: data.quantity,
          price: data.price,
        });
      }
    });
  }, [id]);

  const clickSubmit = () => {
    let productData = new FormData();
    values.name && productData.append("name", values.name);
    values.description && productData.append("description", values.description);
    values.image && productData.append("image", values.image);
    values.category && productData.append("category", values.category);
    values.quantity && productData.append("quantity", values.quantity);
    values.price && productData.append("price", values.price);

    updateProduct(id, productData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, redirect: true });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };

  const imageUrl = values.id
    ? `/api/product/image/${values.id}?${new Date().getTime()}`
    : "/api/product/defaultphoto";

  if (values.redirect) {
    return <Navigate to={"/products"} />;
  }
  return (
    <div>
      <div>
        <div>
          <h1>Edit Product</h1>
          <br />
          <img src={imageUrl} />
          <br />
          <input
            accept="image/*"
            onChange={handleChange("image")}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <button variant="contained" color="secondary" component="span">
              Change Image
            </button>
          </label>{" "}
          <span>{values.image ? values.image.name : ""}</span>
          <br />
          <input
            id="name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
          <br />
          <input
            id="multiline-flexible"
            label="Description"
            rows="3"
            value={values.description}
            onChange={handleChange("description")}
            margin="normal"
          />
          <br />
          <input
            id="category"
            label="Category"
            value={values.category}
            onChange={handleChange("category")}
            margin="normal"
          />
          <br />
          <input
            id="quantity"
            label="Quantity"
            value={values.quantity}
            onChange={handleChange("quantity")}
            type="number"
            margin="normal"
          />
          <br />
          <input
            id="price"
            label="Price"
            value={values.price}
            onChange={handleChange("price")}
            type="number"
            margin="normal"
          />
          <br />
          {values.error && (
            <div component="p" color="error">
              {values.error}
            </div>
          )}
        </div>
        <div>
          <button color="primary" variant="contained" onClick={clickSubmit}>
            Update
          </button>
          <Link to={`/products/update/${id}`}>
            <button variant="contained">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

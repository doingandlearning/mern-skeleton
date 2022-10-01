import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { create } from "../../../utils/productService";

export default function NewProduct() {
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

  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    let value = name === "image" ? event.target.files[0] : event.target.value;

    setValues({ ...values, [name]: value });
  };

  const clickSubmit = async (e) => {
    let productData = new FormData();
    values.name && productData.append("name", values.name);
    values.description && productData.append("description", values.description);
    values.image && productData.append("image", values.image);
    values.category && productData.append("category", values.category);
    values.quantity && productData.append("quantity", values.quantity);
    values.price && productData.append("price", values.price);

    create(productData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", redirect: true });
      }
    });
  };

  return (
    <div>
      <h1>Add new product</h1>
      <form onSubmit={clickSubmit}>
        <div>
          <input
            accept="image/*"
            onChange={handleChange("image")}
            id="icon-button-file"
            type="file"
          />
          <span>{values.image ? values.image.name : ""}</span>
        </div>
        <div>
          <label for="name">Name</label>
          <input
            id="name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
        </div>
        <div>
          <label for="description">Description</label>
          <textarea
            id="multiline-flexible"
            label="Description"
            rows="2"
            value={values.description}
            onChange={handleChange("description")}
            margin="normal"
          />
        </div>
        <div>
          <label for="category">Category</label>
          <input
            id="category"
            label="Category"
            value={values.category}
            onChange={handleChange("category")}
            margin="normal"
          />
        </div>
        <div>
          <label for="quantity">Quantity</label>
          <input
            id="quantity"
            label="Quantity"
            value={values.quantity}
            onChange={handleChange("quantity")}
            type="number"
            margin="normal"
          />
        </div>
        <div>
          <label for="price">Price</label>
          <input
            id="price"
            label="Price"
            value={values.price}
            onChange={handleChange("price")}
            type="number"
            margin="normal"
          />
        </div>
        {values.error && <div>{values.error}</div>}
        <div>
          <button>Submit</button>
          <Link to="/products/add">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

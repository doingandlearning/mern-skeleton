import tokenService from "./tokenService.js";

export const create = async (product) => {
  try {
    const token = tokenService.getToken();
    let response = await fetch("/api/products/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: product,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async () => {
  try {
    let response = await fetch("/api/products/");
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (id) => {
  try {
    let response = await fetch(`/api/products/${id}`);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (id, product) => {
  console.log(product);
  try {
    const token = tokenService.getToken();
    let response = await fetch(`/api/products/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: product,
    });
    console.log(response);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

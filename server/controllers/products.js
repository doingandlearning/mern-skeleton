import Product from "../models/product.js";

export async function createProduct(req, res, next) {
  try {
    const product = await new Product(req.body).save();
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export async function getProduct(req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "No product with that ID exists", error: true });
    }
    return res.json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export async function getAllProducts(req, res, next) {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export async function updateProduct(req, res, next) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

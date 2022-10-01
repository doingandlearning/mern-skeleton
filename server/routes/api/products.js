import * as productCtrl from "../../controllers/products.js";
import { Router } from "express";

import { checkAuth } from "../../middleware/auth.js";

const router = Router();

router
  .route("/")
  .get(productCtrl.getAllProducts)
  .post(checkAuth, productCtrl.createProduct);

router
  .route("/:id")
  .get(productCtrl.getProduct)
  .patch(checkAuth, productCtrl.updateProduct)
  .delete(checkAuth, productCtrl.deleteProduct);

export default router;

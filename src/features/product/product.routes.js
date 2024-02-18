// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from './product.controller.js';
import { upload } from '../../middlewares/fileupload.middleware.js';

// 2. Initialize Express Router.
const productRouter = express.Router();

const productController = new ProductController();

// All the paths to controllers methods
// localhost/api/products
productRouter.get('/', productController.getAllProducts);
productRouter.post(
  '/',
  upload.single('imageUrl'),
  productController.addProduct
);
productRouter.get('/:id', productController.getOneProduct);

export default productRouter;

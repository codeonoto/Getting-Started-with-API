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
// for filter it will works as:
// localhost:3200/api/products/filter?minPrice=10&maxPrice=20&category=Category1
productRouter.get('/filter', productController.filterProducts); 
productRouter.get('/', productController.getAllProducts);
productRouter.post(
  '/',
  upload.single('imageUrl'),
  productController.addProduct
);
productRouter.get('/:id', productController.getOneProduct);

export default productRouter;

// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from './product.controller.js';

// 2. Initialize Express Router.
const productRouter = express.Router();

const productController = new ProductController();

// All the paths to controllers methods
// localhost/api/products
productRouter.get('/', productController.getAllProducts);
productRouter.post('/', productController.addProduct);

export default productRouter;

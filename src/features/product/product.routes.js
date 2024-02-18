// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from './product.controller';

// 2. Initialize Express Router.
const router = express.Router();

const productController = new ProductController();

// All the paths to controllers methods
// localhost/api/products
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);


export default router;

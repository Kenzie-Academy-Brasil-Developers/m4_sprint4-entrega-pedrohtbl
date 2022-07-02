import { Router } from "express";
import { createProductController, deleteProductController, getProductController, getProductsCategoryController, getProductsController, updateProductController } from "../controllers/products.controllers";
import createProductSchema from "../database/schemas/createProductSchema";
import schemaValidation from "../middlewares/schemaValidation.middleware";

const productsRouter = Router()

productsRouter.post('', createProductController)
productsRouter.get('', getProductsController)
productsRouter.get('/:id', getProductController)
productsRouter.patch('/:id', updateProductController)
productsRouter.delete('/:id', deleteProductController)
productsRouter.get('/category/:category_id', getProductsCategoryController)

export default productsRouter
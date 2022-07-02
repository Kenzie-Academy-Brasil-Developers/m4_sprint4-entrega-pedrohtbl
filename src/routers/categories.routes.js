import { Router } from "express";
import { createCategoriesController, deleteCategoryController, getCategoriesController, getCategoryController, updateCategoryController } from "../controllers/categories.controllers";
import createCategoriesSchema from "../database/schemas/createCategoriesSchema";
import schemaValidation from "../middlewares/schemaValidation.middleware";

const categoriesRouter = Router()

categoriesRouter.post('', schemaValidation(createCategoriesSchema), createCategoriesController)
categoriesRouter.get('', getCategoriesController)
categoriesRouter.get('/:id', getCategoryController)
categoriesRouter.patch('/:id', updateCategoryController)
categoriesRouter.delete('/:id', deleteCategoryController )

export default categoriesRouter
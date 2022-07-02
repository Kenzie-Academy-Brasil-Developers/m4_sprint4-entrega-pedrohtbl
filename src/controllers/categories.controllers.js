import createCategoriesService from "../services/categories/createCategories.service"
import deleteCategoryService from "../services/categories/deleteCategory.service"
import getCategoriesService from "../services/categories/getCategories.service"
import getCategoryService from "../services/categories/getCategory.service"
import updateCategoryService from "../services/categories/updateCategory.service"

export const createCategoriesController = async (req,res) =>{
    try {
        const data = req.body
        const category = await createCategoriesService(data)

        return res.status(201).json({
            message: "Category created",
            category
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const getCategoriesController = async (req,res) =>{
    try {
        const categories = await getCategoriesService()

        return res.status(200).json(categories)

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const getCategoryController = async (req,res) =>{
    try {
        const id = req.params.id
        const category = await getCategoryService(id)

        return res.status(200).json(category)

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const updateCategoryController = async (req,res) =>{
    try {
        const id = req.params.id
        const data = req.body

        const newCategory = await updateCategoryService(id, data)

        return res.status(200).json({
            message: "Category updated",
            category: newCategory
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const deleteCategoryController = async (req,res) =>{
    try {
        const id = req.params.id

        await deleteCategoryService(id)

        return res.status(204).json()

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
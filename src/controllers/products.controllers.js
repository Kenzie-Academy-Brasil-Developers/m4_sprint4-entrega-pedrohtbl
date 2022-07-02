import createProductService from "../services/products/createProduct.service"
import deleteProductService from "../services/products/deleteProduct.service"
import getProductService from "../services/products/getProduct.service"
import getProductsService from "../services/products/getProducts.service"
import getProductsCategoryService from "../services/products/getProductsCategory.service"
import updateProductService from "../services/products/updateProduct.service"

export const createProductController = async (req,res) =>{
    try {
        const data = req.body
        const product = await createProductService(data)

        return res.status(201).json({
            message: "Product created",
            product
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const getProductsController = async (req, res) =>{
    try {
        const products = await getProductsService()

        return res.status(200).json(products)

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const getProductController = async (req, res) =>{
    try {
        const id = req.params.id

        const product = await getProductService(id)

        return res.status(200).json(product)

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const updateProductController = async (req,res) =>{
    try {
        const id = req.params.id
        const data = req.body
        
        const updatedProduct = await updateProductService(id,data)

        return res.status(200).json({
            message: "Product updated",
            product: updatedProduct
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const deleteProductController = async (req, res) =>{
    try {
        const id = req.params.id
        await deleteProductService(id)

        return res.status(204).json()

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const getProductsCategoryController = async (req, res) =>{
    try {
        const id = req.params.category_id

        const products = await getProductsCategoryService(id)

        return res.status(200).json(products)

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
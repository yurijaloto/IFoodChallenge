import express from 'express'
import { ProductController } from './../controllers/productController.js'

const productController = new ProductController()
export const productRouter = express.Router()
productRouter.post('/', productController.createProduct)
productRouter.patch('/:id', productController.updateProduct)
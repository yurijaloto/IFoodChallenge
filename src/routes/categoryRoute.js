import express from 'express'
import { CategoryController } from './../controllers/categoryController.js'

const categoryController = new CategoryController()
export const categoryRouter = express.Router()
categoryRouter.post('/', categoryController.createCategory)
categoryRouter.patch('/:id', categoryController.updateCategory)
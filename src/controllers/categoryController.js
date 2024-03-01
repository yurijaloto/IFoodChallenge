import { CreateCategoryService } from "../services/categoryServices/createCategoryService.js";

export class CategoryController {
  async createCategory(req, res) {
    const createCategoryService = new CreateCategoryService()
    const category = await createCategoryService.execute(req.body)
    return res.status(200).json(category)
  }

  async updateCategory(req, res) {
    res.status(200).json({
      ok: "ok"
    })
  }
}
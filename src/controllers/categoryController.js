export class CategoryController {
  async createCategory(req, res) {
    const category = req.body;
    res.status(200).json({
      category
    })
  }

  async updateCategory(req, res) {
    res.status(200).json({
      ok: "ok"
    })
  }
}
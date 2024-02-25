export class ProductController {
  async createProduct(req, res) {
    const product = req.body;
    return res.status(200).json({
      product
    })
  }

  async updateProduct(req, res) {
    res.status(200).json({
      ok: "ok"
    })
  }
}
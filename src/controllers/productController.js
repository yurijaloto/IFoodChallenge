import { CreateProductService } from "../services/productServices/createProductService.js";
import { UpdateProductService } from "../services/productServices/updateProductService.js";

export class ProductController {
  async createProduct(req, res) {
    const createProductService = new CreateProductService();
    const product = await createProductService.execute(req.body);
    return res.status(200).json(product)
  }

  async updateProduct(req, res) {
    const updateProductService = new UpdateProductService();
    const updatedProduct = await updateProductService.execute(req.body);
    res.status(200).json(updatedProduct)
  }
}
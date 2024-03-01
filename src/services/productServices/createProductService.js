import { ProductModel } from "../../models/productModel.js";
import { ProductRepository } from "../../repositories/productRepository.js";

export class CreateProductService {
  async execute(product) {
    const productRepository = new ProductRepository();
    const productInstance = new ProductModel(product);
    const createdProduct = productRepository.createProduct(productInstance);

    return createdProduct;
  }
}
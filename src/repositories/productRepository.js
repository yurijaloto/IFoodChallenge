export class ProductRepository {
  async createProduct(product) {
    const savedProduct = await product.save();
    return savedProduct;
  }
}
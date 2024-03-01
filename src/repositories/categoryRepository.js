export class CategoryRepository {
  async createCateogry(category) {
    const savedCategory = await category.save()
    return savedCategory
  }
}
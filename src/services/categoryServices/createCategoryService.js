import { CategoryModel } from '../../models/categoryModel.js';
import { CategoryRepository } from './../../repositories/categoryRepository.js';
import { SNSConfig } from './../../config/aws/awsSNSConfig.js'

export class CreateCategoryService {
  async execute(category) {
    const categoryRepository = new CategoryRepository();
    const categoryInstance = new CategoryModel(category);
    const awsConfig = new SNSConfig();
    // awsConfig.configCredentials()
    const publishedMessage = await awsConfig.publishToSNS('teste')
    console.log(publishedMessage)
    const createdCategory = categoryRepository.createCateogry(categoryInstance);

    return createdCategory;
  }
}
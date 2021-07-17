import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category | null;
  list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };

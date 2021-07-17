import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category();
    Object.assign(category, { name, description, created_at: new Date() });

    this.categories.push(category);

    return category;
  }

  findByName(name: string): Category | null {
    return this.categories.find(element => element.name === name) || null;
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepository };

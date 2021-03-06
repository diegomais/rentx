import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { ListCategoriesService } from '../services/ListCategoriesService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const category = createCategoryService.execute({ name, description });

  return response.status(201).json({ category });
});

categoriesRoutes.get('/', (request, response) => {
  const listCategoriesService = new ListCategoriesService(categoriesRepository);

  const categories = listCategoriesService.execute();

  return response.json(categories);
});

export { categoriesRoutes };

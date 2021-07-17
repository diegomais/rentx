import { Router } from 'express';

import { SpecificationsRepository } from '../repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../services/CreateSpecificationService';
import { ListSpecificationsService } from '../services/ListSpecificationsService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  );

  const specification = createSpecificationService.execute({
    name,
    description,
  });

  return response.status(201).json({ specification });
});

specificationsRoutes.get('/', (request, response) => {
  const listSpecificationsService = new ListSpecificationsService(
    specificationsRepository,
  );

  const specifications = listSpecificationsService.execute();

  return response.json(specifications);
});

export { specificationsRoutes };

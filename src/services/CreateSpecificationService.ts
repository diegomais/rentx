import { Specification } from '../model/Specification';
import { SpecificationsRepository } from '../repositories/SpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    return this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };

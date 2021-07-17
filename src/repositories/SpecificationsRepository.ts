import { Specification } from '../model/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();
    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification | null {
    return this.specifications.find(element => element.name === name) || null;
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };

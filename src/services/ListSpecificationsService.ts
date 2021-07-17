import { Specification } from '../model/Specification';
import { SpecificationsRepository } from '../repositories/SpecificationsRepository';

class ListSpecificationsService {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationsService };

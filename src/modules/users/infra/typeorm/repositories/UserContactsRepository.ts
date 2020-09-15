import { getRepository, Repository } from 'typeorm';

import IUserContactsRepository from '@modules/users/repositories/IUserContactsRepository';
import ICreateUserContactDTO from '@modules/users/dtos/ICreateUserContactDTO';

import UserContact from '../entities/UserContact';

class UserContactsRepository implements IUserContactsRepository {
  private ormRepository: Repository<UserContact>;

  constructor() {
    this.ormRepository = getRepository(UserContact);
  }

  public async create(data: ICreateUserContactDTO[]): Promise<UserContact[]> {
    const userContacts = this.ormRepository.create(data);

    await this.ormRepository.save(userContacts);

    return userContacts;
  }

  public async save(
    userContact: ICreateUserContactDTO[],
  ): Promise<UserContact[]> {
    return this.ormRepository.save(userContact);
  }
}

export default UserContactsRepository;

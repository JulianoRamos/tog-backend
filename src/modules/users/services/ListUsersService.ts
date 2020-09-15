import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

@injectable()
class ListUserContactsService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}

export default ListUserContactsService;

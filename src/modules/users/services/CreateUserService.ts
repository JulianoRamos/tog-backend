import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  lastname: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ name, lastname }: IRequest): Promise<User> {
    const user = await this.usersRepository.create({
      name,
      lastname,
    });

    return user;
  }
}

export default CreateUserService;

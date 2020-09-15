import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserContactsRepository from '@modules/users/repositories/IUserContactsRepository';
import UserContactsRepository from '@modules/users/infra/typeorm/repositories/UserContactsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserContactsRepository>(
  'UserContactsRepository',
  UserContactsRepository,
);

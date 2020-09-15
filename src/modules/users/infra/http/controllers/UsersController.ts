import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import CreateUserContactService from '@modules/users/services/CreateUserContactService';
import ListUsersService from '@modules/users/services/ListUsersService';

export default class UsersController {
  public async index(_: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);

    const users = await listUsers.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, lastname, contacts } = request.body;

    const createUser = container.resolve(CreateUserService);
    const createUserContact = container.resolve(CreateUserContactService);

    const user = await createUser.execute({
      name,
      lastname,
    });

    const userContacts = await createUserContact.execute({
      contacts,
      user_id: user.id,
    });

    return response.json({ ...user, contacts: userContacts });
  }
}

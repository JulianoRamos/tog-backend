import { injectable, inject } from 'tsyringe';

import IUserContactsRepository from '../repositories/IUserContactsRepository';

import UserContact from '../infra/typeorm/entities/UserContact';

interface IContact {
  name: string;
}

interface IRequest {
  contacts: IContact[];
  user_id: string;
}

@injectable()
class CreateUserContactService {
  constructor(
    @inject('UserContactsRepository')
    private userContactsRepository: IUserContactsRepository,
  ) { }

  public async execute({
    contacts,
    user_id,
  }: IRequest): Promise<UserContact[]> {
    const userContacts = await this.userContactsRepository.create(
      contacts.map(contact => ({
        name: contact.name,
        user_id,
      })),
    );

    return userContacts;
  }
}

export default CreateUserContactService;

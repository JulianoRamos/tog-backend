import ICreateUserContactDTO from '../dtos/ICreateUserContactDTO';
import UserContact from '../infra/typeorm/entities/UserContact';

export default interface IUsersRepository {
  create(data: ICreateUserContactDTO[]): Promise<UserContact[]>;
  save(userContact: UserContact[]): Promise<UserContact[]>;
}

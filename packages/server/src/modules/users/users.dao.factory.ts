import { CreateUserDto, GetUserDto } from 'commons/lib/dtos';
import { IUserDao } from './interfaces';
import { DB_QUERY_LIMIT, errorCodes } from '../../const';
import DaoValidation from '../common/DaoValidation';
import { mapDaoListToDtoList, mapDaoToDto } from './utils';
import { IUserModel, UserDocument } from '../../model/user';

class UsersDaoFactory implements IUserDao {
  private userModel: IUserModel;

  constructor(userModel: IUserModel) {
    this.userModel = userModel;
  }

  async createUser(dto: CreateUserDto): Promise<GetUserDto> {
    const user: UserDocument = await this.userModel.create(dto);
    return mapDaoToDto(user);
  }

  async getUsers(): Promise<GetUserDto[]> {
    const users: UserDocument[] = await this.userModel.find({}).limit(DB_QUERY_LIMIT);
    return mapDaoListToDtoList(users);
  }

  async getUserById(id: string): Promise<GetUserDto> {
    DaoValidation.validateId(id);

    const user: UserDocument | null = await this.userModel.findOne({ _id: id });

    if (user) return mapDaoToDto(user);

    throw new Error(errorCodes.USER_NOT_FOUND);
  }

  async getUserByCredentials(email: string, password: string): Promise<GetUserDto> {
    const user: UserDocument | null = await this.userModel.findOne({ email, password });

    if (user) return mapDaoToDto(user);

    // todo: return entity or null, throw errow in service or controller if null
    throw new Error(errorCodes.USER_NOT_FOUND);
  }
}

export default UsersDaoFactory;

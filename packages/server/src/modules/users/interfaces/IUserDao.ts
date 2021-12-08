import { CreateUserDto, GetUserDto } from 'commons/lib/dtos';

interface IUserDao {
  getUsers: () => Promise<GetUserDto[]>;
  getUserById: (id: string) => Promise<GetUserDto>;
  getUserByCredentials: (email: string, password: string) => Promise<GetUserDto>;
  createUser: (dto: CreateUserDto) => Promise<GetUserDto>;
}

export default IUserDao;

import { GetUserDto } from 'commons/lib/dtos';

interface IUserDao {
  getUsers: () => Promise<GetUserDto[]>;
  getUserById: (id: string) => Promise<GetUserDto>;
}

export default IUserDao;

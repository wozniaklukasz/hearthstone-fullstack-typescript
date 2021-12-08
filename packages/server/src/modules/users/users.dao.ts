import UsersDaoFactory from './users.dao.factory';
import { UserModel } from '../../model/user';

const UsersDao = () => new UsersDaoFactory(UserModel);

export default UsersDao;

import UsersControllerFactory from './users.controller.factory';
import UsersDao from './users.dao';

const UsersController = () => new UsersControllerFactory(UsersDao());

export default UsersController;

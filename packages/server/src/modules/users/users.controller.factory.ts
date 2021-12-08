import { NextFunction, Request, Response } from 'express';
import { GetUserDto } from 'commons/lib/dtos';
import { IUsersController, IUserDao } from './interfaces';
import ControllerService from '../common/ControllerService';

class UsersControllerFactory implements IUsersController {
  private usersDao: IUserDao;

  constructor(usersDao: IUserDao) {
    this.usersDao = usersDao;
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.params;
      const user: GetUserDto = await this.usersDao.createUser({
        email,
        password,
      });
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.params;
      const user: GetUserDto = await this.usersDao.getUserByCredentials(email, password);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users: GetUserDto[] = await this.usersDao.getUsers();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = ControllerService.getIdFromRequest(req);
      const user: GetUserDto = await this.usersDao.getUserById(id);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}

export default UsersControllerFactory;

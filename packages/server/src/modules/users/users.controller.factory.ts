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
      console.log('register');
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('login');
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

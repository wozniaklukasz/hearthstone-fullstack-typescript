import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutes } from '../common/common.routes';
import { IUsersController } from './interfaces';

export class UsersRoutesFactory extends CommonRoutes<IUsersController> {
  constructor(app: Application, controller: IUsersController) {
    super(app, controller);
  }

  configureRoutes() {
    this.app.route(`/api/users`).get(async (req: Request, res: Response, next: NextFunction) => {
      await this.controller.getUsers(req, res, next);
    });

    this.app.route(`/api/users/:id`).get(async (req: Request, res: Response, next: NextFunction) => {
      await this.controller.getUserById(req, res, next);
    });

    this.app.route(`/api/login`).get(async (req: Request, res: Response, next: NextFunction) => {
      await this.controller.login(req, res, next);
    });

    this.app.route(`/api/register`).get(async (req: Request, res: Response, next: NextFunction) => {
      await this.controller.register(req, res, next);
    });
  }
}

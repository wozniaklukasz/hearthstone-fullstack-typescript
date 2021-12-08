import { Application } from 'express';
import { UsersRoutesFactory } from './users.routes.factory';
import UsersController from './users.controller';

export const UsersRoutes = (app: Application) => new UsersRoutesFactory(app, UsersController());

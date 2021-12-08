import { NextFunction, Request, Response } from 'express';

interface IUsersController {
  login: (req: Request, res: Response, next: NextFunction) => void;
  register: (req: Request, res: Response, next: NextFunction) => void;
  getUsers: (req: Request, res: Response, next: NextFunction) => void;
  getUserById: (req: Request, res: Response, next: NextFunction) => void;
}

export default IUsersController;

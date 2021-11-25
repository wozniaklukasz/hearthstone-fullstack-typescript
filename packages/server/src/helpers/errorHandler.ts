import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  res.send({ error: err.message });
  next();
};

export { errorHandler };

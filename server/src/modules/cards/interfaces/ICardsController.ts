import { NextFunction, Request, Response } from 'express';

interface ICardsController {
  getCards: (req: Request, res: Response, next: NextFunction) => void;
  getCardById: (req: Request, res: Response, next: NextFunction) => void;
}

export default ICardsController;

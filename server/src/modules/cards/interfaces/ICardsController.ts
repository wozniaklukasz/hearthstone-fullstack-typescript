import { GetCardDto } from '../types';
import { NextFunction, Request, Response } from 'express';

interface ICardsController {
  getCards: (req: Request, res: Response, next: NextFunction) => void;
  getCardById: (deckId: string) => Promise<GetCardDto>;
}

export default ICardsController;

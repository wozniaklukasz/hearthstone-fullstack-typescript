import { NextFunction, Request, Response } from 'express';

interface IDecksController {
  getDecks: (req: Request, res: Response, next: NextFunction) => void;
  getDeckById: (req: Request, res: Response, next: NextFunction) => void;
  createDeck: (req: Request, res: Response, next: NextFunction) => void;
  updateDeck: (req: Request, res: Response, next: NextFunction) => void;
  deleteDeck: (req: Request, res: Response, next: NextFunction) => void;
}

export default IDecksController;

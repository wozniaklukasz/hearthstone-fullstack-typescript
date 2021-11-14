import { NextFunction, Request, Response } from 'express';
import { ICardsController, ICardsDao } from './interfaces';
import { GetCardDto } from './types';
import ControllerService from '../common/ControllerService';

class CardsControllerFactory implements ICardsController {
  private cardsDao: ICardsDao;

  constructor(cardsDao: ICardsDao) {
    this.cardsDao = cardsDao;
  }

  async getCards(req: Request, res: Response, next: NextFunction) {
    try {
      const cards: GetCardDto[] = await this.cardsDao.getCards();
      res.status(200).send(cards);
    } catch (error) {
      next(error);
    }
  }

  async getCardById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = ControllerService.getIdFromRequest(req);
      const card: GetCardDto = await this.cardsDao.getCardById(id);
      res.status(200).send(card);
    } catch (error) {
      next(error);
    }
  }
}

export default CardsControllerFactory;

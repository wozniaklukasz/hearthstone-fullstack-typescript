import { NextFunction, Request, Response } from 'express';
import { ICardsController, ICardsDao } from './interfaces';
import { GetCardDto } from './types';
import ControllerValidation from '../common/ControllerValidation';

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
      ControllerValidation.requestContainsParamId(req);
      const card: GetCardDto = await this.cardsDao.getCardById(req.params.id);
      res.status(200).send(card);
    } catch (error) {
      next(error);
    }
  }
}

export default CardsControllerFactory;

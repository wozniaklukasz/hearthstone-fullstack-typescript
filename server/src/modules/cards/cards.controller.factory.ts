import { ICardsController, ICardsDao } from './interfaces';
import { GetCardDto } from './types';
import { NextFunction, Request, Response } from 'express';

class CardsControllerFactory implements ICardsController {
  private cardsDao: ICardsDao;

  constructor(cardsDao: ICardsDao) {
    this.cardsDao = cardsDao;
  }

  async getCards(req: Request, res: Response, next: NextFunction) {
    return this.cardsDao
      .getCards()
      .then((resp) => {
        res.status(200).send(resp);
      })
      .catch((error) => {
        next(error);
      });
  }

  async getCardById(id: string): Promise<GetCardDto> {
    return this.cardsDao.getCardById(id);
  }
}

export default CardsControllerFactory;

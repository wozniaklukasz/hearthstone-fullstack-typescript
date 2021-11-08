import { ICardsController, ICardsDao } from './interfaces';
import { GetCardDto } from './types';

class CardsControllerFactory implements ICardsController {
  private cardsDao: ICardsDao;

  constructor(cardsDao: ICardsDao) {
    this.cardsDao = cardsDao;
  }

  async getCards(): Promise<GetCardDto[]> {
    return this.cardsDao.getCards();
  }

  async getCardById(id: string): Promise<GetCardDto> {
    return this.cardsDao.getCardById(id);
  }
}

export default CardsControllerFactory;

import { CreateDeckDto, GetDeckDto } from './types';
import { IDecksDao } from './interfaces';

class DecksControllerFactory {
  private decksDao: IDecksDao;

  constructor(decksDao: IDecksDao) {
    this.decksDao = decksDao;
  }

  async getDecks(): Promise<GetDeckDto[]> {
    return this.decksDao.getDecks();
  }

  async getDeckById(deckId: string): Promise<GetDeckDto> {
    return this.decksDao.getDeckById(deckId);
  }

  async createDeck(deckDto: CreateDeckDto): Promise<GetDeckDto> {
    return this.decksDao.createDeck(deckDto);
  }
}

export default DecksControllerFactory;

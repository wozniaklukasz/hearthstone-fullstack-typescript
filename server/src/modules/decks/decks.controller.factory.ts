import { CreateDeckDto, GetDeckDto } from './types';
import { IDecksController, IDecksDao } from './interfaces';

class DecksControllerFactory implements IDecksController {
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

  async updateDeck(deckId: string, deckDto: CreateDeckDto): Promise<GetDeckDto> {
    return this.decksDao.updateDeck(deckId, deckDto);
  }

  async deleteDeck(deckId: string): Promise<string> {
    return this.decksDao.deleteDeck(deckId);
  }
}

export default DecksControllerFactory;

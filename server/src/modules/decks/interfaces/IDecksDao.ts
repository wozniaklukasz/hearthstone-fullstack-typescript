import { CreateDeckDto, GetDeckDto } from '../types';

interface IDecksDao {
  getDecks: () => Promise<GetDeckDto[]>;
  getDeckById: (deckId: string) => Promise<GetDeckDto>;
  createDeck: (deckDto: CreateDeckDto) => Promise<GetDeckDto>;
}

export default IDecksDao;

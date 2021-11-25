import { CreateDeckDto, GetDeckDto } from '../types';

interface IDecksDao {
  getDecks: () => Promise<GetDeckDto[]>;
  getDeckById: (deckId: string) => Promise<GetDeckDto>;
  createDeck: (deckDto: CreateDeckDto) => Promise<GetDeckDto>;
  updateDeck: (deckId: string, deckDto: CreateDeckDto) => Promise<GetDeckDto>;
  deleteDeck: (deckId: string) => Promise<string>;
}

export default IDecksDao;

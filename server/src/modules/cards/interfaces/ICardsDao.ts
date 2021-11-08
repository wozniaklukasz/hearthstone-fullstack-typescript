import { GetCardDto } from '../types';

interface ICardsDao {
  getCards: () => Promise<GetCardDto[]>;
  getCardById: (deckId: string) => Promise<GetCardDto>;
}

export default ICardsDao;

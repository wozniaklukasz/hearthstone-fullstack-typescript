import { GetCardDto } from 'commons/lib/dtos';

interface ICardsDao {
  getCards: () => Promise<GetCardDto[]>;
  getCardById: (deckId: string) => Promise<GetCardDto>;
}

export default ICardsDao;

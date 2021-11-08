import { GetCardDto } from '../types';

interface ICardsController {
  getCards: () => Promise<GetCardDto[]>;
  getCardById: (deckId: string) => Promise<GetCardDto>;
}

export default ICardsController;

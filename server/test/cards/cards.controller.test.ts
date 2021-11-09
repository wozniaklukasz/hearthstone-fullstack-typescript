import { ICardsController, ICardsDao } from '../../src/modules/cards/interfaces';
import CardsControllerFactory from '../../src/modules/cards/cards.controller.factory';
import { cardDto } from './consts';

describe('Card Controller', () => {
  const cardsDaoMock: ICardsDao = {
    getCards: () => Promise.resolve([cardDto]),
    getCardById: () => Promise.resolve(cardDto),
  };

  let cardsController: ICardsController;

  beforeEach(() => {
    cardsController = new CardsControllerFactory(cardsDaoMock);
  });

  it('getCards return list of cards', (done) => {
    cardsController.getCards().then((resp) => {
      expect(resp).toStrictEqual([cardDto]);
      done();
    });
  });

  it('getCardById return a card', (done) => {
    cardsController.getCardById('myId').then((resp) => {
      expect(resp).toStrictEqual(cardDto);
      done();
    });
  });
});

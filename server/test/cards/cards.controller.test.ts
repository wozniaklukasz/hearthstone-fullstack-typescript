import { GetCardDto } from '../../src/modules/cards/types';
import { ICardsController, ICardsDao } from '../../src/modules/cards/interfaces';
import CardsControllerFactory from '../../src/modules/cards/cards.controller.factory';

describe('Card Controller', () => {
  const cardDto: GetCardDto = {
    id: 'id',
    imageId: 'string',
    name: 'string',
    text: 'string',
    flavor: 'string',
    artist: 'string',
    attack: 10,
    cardClass: 'any',
    collectible: true,
    cost: 20,
    elite: true,
    faction: 'any',
    health: 8,
    mechanics: [],
    rarity: 'any',
    cardSet: 'any',
    type: 'any',
  };

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

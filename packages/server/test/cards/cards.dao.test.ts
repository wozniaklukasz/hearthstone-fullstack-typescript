import { errorCodes } from 'src/const';
import CardsDaoFactory from '../../src/modules/cards/cards.dao.factory';
import { ICardsDao } from '../../src/modules/cards/interfaces';
import { ICardModel } from '../../src/model/card';
import { cardDao, cardDto } from './consts';

const cardModelMock = {
  find: jest.fn().mockReturnThis(),
  limit: () => {
    return Promise.resolve([cardDao]);
  },
  findOne: () => {
    return Promise.resolve(cardDao);
  },
} as unknown as ICardModel;

describe('Card DAO', () => {
  let cardsDao: ICardsDao;

  beforeEach(() => {
    cardsDao = new CardsDaoFactory(cardModelMock);
  });

  it('getCards return list of cards', (done) => {
    cardsDao.getCards().then((resp) => {
      expect(resp).toStrictEqual([cardDto]);
      done();
    });
  });

  it('getCardById return a card', (done) => {
    cardsDao.getCardById('6165c29b1e5377d3327c6364').then((resp) => {
      expect(resp).toStrictEqual(cardDto);
      done();
    });
  });
});

describe('Card DAO throw errors', () => {
  let cardsDao: ICardsDao;

  beforeEach(() => {
    cardsDao = new CardsDaoFactory(cardModelMock);
  });

  it('getCardById throws an error if card will be null', () => {
    const expectedError = new Error(errorCodes.CARD_NOT_FOUND);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cardModelMock.findOne = jest.fn(() => Promise.resolve(null));

    return expect(cardsDao.getCardById('6165c29b1e5377d3327c6364')).rejects.toStrictEqual(expectedError);
  });

  it('getCardById throws an error if id is incorrect', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    return expect(cardsDao.getCardById('myId')).rejects.toStrictEqual(expectedError);
  });
});

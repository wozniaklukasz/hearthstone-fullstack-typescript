import DecksDaoFactory from 'src/modules/decks/decks.dao.factory';
import { IDeckModel } from 'src/model';
import { errorCodes } from 'src/const';
import { IDecksDao } from '../../src/modules/decks/interfaces';
import { deckDao, deckDto } from './consts';

const deckModelMock = {
  // find is mocked this way because of chaining .limit() on it (https://stackoverflow.com/questions/57719741/how-do-i-mock-and-test-chained-function-with-jest)
  find: jest.fn().mockReturnThis(),
  limit: () => {
    return Promise.resolve([deckDao]);
  },
  findOne: () => {
    return Promise.resolve(deckDao);
  },
  create: () => {
    return Promise.resolve(deckDao);
  },
  updateOne: () => {
    return Promise.resolve();
  },
  deleteOne: () => {
    return Promise.resolve();
  },
} as unknown as IDeckModel;

describe('Deck DAO', () => {
  let decksDao: IDecksDao;

  beforeEach(() => {
    decksDao = new DecksDaoFactory(deckModelMock);
  });

  it('getDecks return list of decks', (done) => {
    decksDao.getDecks().then((resp) => {
      expect(resp).toStrictEqual([deckDto]);
      done();
    });
  });

  it('getDeckById return a deck', (done) => {
    decksDao.getDeckById('6165c29b1e5377d3327c6364').then((resp) => {
      expect(resp).toStrictEqual(deckDto);
      done();
    });
  });

  it('createDeck return a deck', (done) => {
    decksDao.createDeck({ title: 'some title' }).then((resp) => {
      expect(resp).toStrictEqual(deckDto);
      done();
    });
  });

  it('updateDeck returns updated deck', (done) => {
    const idToUpdate = '6165aff6eafa52aec41a57e2';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deckModelMock.updateOne = jest.fn(() => ({ modifiedCount: 1 }));

    decksDao.updateDeck(idToUpdate, deckDto).then((resp) => {
      expect(resp).toStrictEqual(deckDto);
      done();
    });
  });

  it('deleteDeck return a deck id', (done) => {
    const idToDelete = '6165aff6eafa52aec41a57e2';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deckModelMock.deleteOne = jest.fn(() => ({ deletedCount: 1 }));

    decksDao.deleteDeck(idToDelete).then((resp) => {
      expect(resp).toBe(idToDelete);
      done();
    });
  });
});

describe('Deck DAO throw errors', () => {
  let decksDao: DecksDaoFactory;

  beforeEach(() => {
    decksDao = new DecksDaoFactory(deckModelMock);
  });

  it('getDeckById throws an error if deck will be null', () => {
    const expectedError = new Error(errorCodes.DECK_NOT_FOUND);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deckModelMock.findOne = jest.fn(() => Promise.resolve(null));

    return expect(decksDao.getDeckById('6165c29b1e5377d3327c6364')).rejects.toStrictEqual(expectedError);
  });

  it('getDeckById throws an error if id is incorrect', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    return expect(decksDao.getDeckById('myId')).rejects.toStrictEqual(expectedError);
  });

  it('updateDeck throws an error if number of modified decks will be less than 1', () => {
    const expectedError = new Error(errorCodes.DECK_NOT_FOUND);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deckModelMock.updateOne = jest.fn(() => ({ modifiedCount: 0 }));

    return expect(decksDao.updateDeck('6165c29b1e5377d3327c6364', deckDto)).rejects.toStrictEqual(expectedError);
  });

  it('updateDeck throws an error if id is incorrect', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    return expect(decksDao.updateDeck('myId', deckDto)).rejects.toStrictEqual(expectedError);
  });

  it('deleteDeck throws an error if number of deleted decks will be less than 1', () => {
    const expectedError = new Error(errorCodes.DECK_NOT_FOUND);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deckModelMock.deleteOne = jest.fn(() => ({ deletedCount: 0 }));

    return expect(decksDao.deleteDeck('6165c29b1e5377d3327c6364')).rejects.toStrictEqual(expectedError);
  });

  it('deleteDeck throws an error if id is incorrect', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    return expect(decksDao.deleteDeck('myId')).rejects.toStrictEqual(expectedError);
  });
});

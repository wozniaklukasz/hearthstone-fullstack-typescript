import DecksDaoFactory from 'src/modules/decks/decks.dao.factory';
import { GetDeckDto } from 'src/modules/decks/types';
import { IDeckModel, TDeckDocument } from 'src/model';
import { errorCodes } from 'src/const';

describe('Deck DAO', () => {
  const deckDao: TDeckDocument = {
    _id: 'id',
    title: 'title',
    createdAt: '11',
    updatedAt: '12',
  };
  const expectedDeckDto: GetDeckDto = {
    id: 'id',
    title: 'title',
    createdAt: '11',
    updatedAt: '12',
  };
  const deckModelMock = {
    find: () => {
      return Promise.resolve([deckDao]);
    },
    findOne: () => {
      return Promise.resolve(deckDao);
    },
    create: () => {
      return Promise.resolve(deckDao);
    },
    remove: () => {
      return Promise.resolve();
    },
  } as unknown as IDeckModel;

  let decksDao: DecksDaoFactory;

  beforeEach(() => {
    decksDao = new DecksDaoFactory(deckModelMock);
  });

  it('getDecks return list of decks', (done) => {
    decksDao.getDecks().then((resp) => {
      expect(resp).toStrictEqual([expectedDeckDto]);
      done();
    });
  });

  it('getDeck return a deck', (done) => {
    decksDao.getDeckById('6165c29b1e5377d3327c6364').then((resp) => {
      expect(resp).toStrictEqual(expectedDeckDto);
      done();
    });
  });

  it('createDeck return a deck', (done) => {
    decksDao.createDeck({ title: 'some title' }).then((resp) => {
      expect(resp).toStrictEqual(expectedDeckDto);
      done();
    });
  });

  it('deleteDeck return a deck id', (done) => {
    const idToDelete = '6165aff6eafa52aec41a57e2';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deckModelMock.remove = jest.fn(() => ({ deletedCount: 1 }));

    decksDao.deleteDeck(idToDelete).then((resp) => {
      expect(resp).toBe(idToDelete);
      done();
    });
  });
});

describe('Deck DAO throw errors', () => {
  const deckModelMock = {
    findOne: () => {
      return Promise.resolve(null);
    },
  } as unknown as IDeckModel;
  const decksDao = new DecksDaoFactory(deckModelMock);

  it('getDeck throws an error if deck will be null', () => {
    const expectedError = new Error(errorCodes.DECK_NOT_FOUND);

    return expect(decksDao.getDeckById('6165c29b1e5377d3327c6364')).rejects.toStrictEqual(expectedError);
  });

  it('getDeck throws an error if id is incorrect', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    return expect(decksDao.getDeckById('myId')).rejects.toStrictEqual(expectedError);
  });

  it('deleteDeck throws an error if number of deleted decks will be less than 1', () => {
    const expectedError = new Error(errorCodes.DECK_NOT_FOUND);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deckModelMock.remove = jest.fn(() => ({ deletedCount: 0 }));

    return expect(decksDao.getDeckById('6165c29b1e5377d3327c6364')).rejects.toStrictEqual(expectedError);
  });

  it('deleteDeck throws an error if response from deckModel.remove will NOT contains deletedCount', () => {
    const expectedError = new Error(errorCodes.DECK_NOT_FOUND);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deckModelMock.remove = jest.fn(() => ({}));

    return expect(decksDao.deleteDeck('6165c29b1e5377d3327c6364')).rejects.toStrictEqual(expectedError);
  });

  it('deleteDeck throws an error if id is incorrect', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    return expect(decksDao.deleteDeck('myId')).rejects.toStrictEqual(expectedError);
  });
});

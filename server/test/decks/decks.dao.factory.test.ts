import DecksDaoFactory from '../../src/modules/decks/decks.dao.factory';
import { DeckDao, GetDeckDto } from '../../src/modules/decks/types';

describe('Deck DAO', () => {
  const deckDao: DeckDao = {
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
  };
  const decksDao = new DecksDaoFactory(deckModelMock);

  it('getDecks return list of decks', (done) => {
    decksDao.getDecks().then((resp) => {
      expect(resp).toStrictEqual([expectedDeckDto]);
      done();
    });
  });

  it('getDeck return a deck', (done) => {
    decksDao.getDeckById('myId').then((resp) => {
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
});

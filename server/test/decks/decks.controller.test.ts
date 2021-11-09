import { IDecksController, IDecksDao } from '../../src/modules/decks/interfaces';
import DecksControllerFactory from '../../src/modules/decks/decks.controller.factory';
import { deckDto } from './consts';

describe('Deck Controller', () => {
  const decksDaoMock: IDecksDao = {
    getDecks: () => Promise.resolve([deckDto]),
    getDeckById: () => Promise.resolve(deckDto),
    createDeck: () => Promise.resolve(deckDto),
    updateDeck: () => Promise.resolve(deckDto),
    deleteDeck: (deckId) => Promise.resolve(deckId),
  };

  let decksController: IDecksController;

  beforeEach(() => {
    decksController = new DecksControllerFactory(decksDaoMock);
  });

  it('getDecks return list of decks', (done) => {
    decksController.getDecks().then((resp) => {
      expect(resp).toStrictEqual([deckDto]);
      done();
    });
  });

  it('getDeck return a deck', (done) => {
    decksController.getDeckById('myId').then((resp) => {
      expect(resp).toStrictEqual(deckDto);
      done();
    });
  });

  it('createDeck return a deck', (done) => {
    decksController.createDeck({ title: 'some title' }).then((resp) => {
      expect(resp).toStrictEqual(deckDto);
      done();
    });
  });

  it('updateDeck return a deck', (done) => {
    decksController.updateDeck('id', { title: 'some title' }).then((resp) => {
      expect(resp).toStrictEqual(deckDto);
      done();
    });
  });

  it('deleteDeck return a deck id', (done) => {
    decksController.deleteDeck('some id').then((resp) => {
      expect(resp).toBe('some id');
      done();
    });
  });
});

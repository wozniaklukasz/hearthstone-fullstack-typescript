import express, { Application, Request, Response } from 'express';
import { IDecksController, IDecksDao } from '../../src/modules/decks/interfaces';
import DecksControllerFactory from '../../src/modules/decks/decks.controller.factory';
import { deckDto } from './consts';
import { DecksRoutesFactory } from '../../src/modules/decks/decks.routes.factory';
import request from 'supertest';
import { errorCodes } from '../../src/const';

// not 'pure' unit tests because of using routes
describe('Deck Controller return appropriate responses', () => {
  let app: Application;
  let decksController: IDecksController;

  const decksDaoMock: IDecksDao = {
    getDecks: () => Promise.resolve([deckDto]),
    getDeckById: () => Promise.resolve(deckDto),
    createDeck: () => Promise.resolve(deckDto),
    updateDeck: () => Promise.resolve(deckDto),
    deleteDeck: (deckId) => Promise.resolve(deckId),
  };

  beforeEach(() => {
    app = express();
    decksController = new DecksControllerFactory(decksDaoMock);
    app.use(express.json());
    new DecksRoutesFactory(app, decksController);
  });

  it('getDecks return list of decks', (done) => {
    request(app).get('/api/decks').expect(200).expect([deckDto], done);
  });

  it('getDeck return a deck', (done) => {
    request(app).get('/api/decks/123').expect(200).expect(deckDto, done);
  });

  it('createDeck return a deck', (done) => {
    request(app).post('/api/decks').expect(200).expect(deckDto, done);
  });

  it('updateDeck return a deck', (done) => {
    request(app).put('/api/decks/123').expect(200).expect(deckDto, done);
  });

  it('deleteDeck return a deck id', (done) => {
    request(app).delete('/api/decks/123').expect(200).expect('123', done);
  });
});

describe('Deck Controller handle errors (call next function)', () => {
  let decksController: IDecksController;

  const req = { params: { id: '123' }, body: { title: '123' } } as unknown as Request;
  const res = {} as Response;
  const next = jest.fn();

  const decksDaoMock: IDecksDao = {
    getDecks: () => Promise.reject('getDecks error'),
    getDeckById: () => Promise.reject('getDeckById error'),
    createDeck: () => Promise.reject('createDeck error'),
    updateDeck: () => Promise.reject('updateDeck error'),
    deleteDeck: () => Promise.reject('deleteDeck error'),
  };

  beforeEach(() => {
    decksController = new DecksControllerFactory(decksDaoMock);
  });

  it('getDecks call next fn', async () => {
    await decksController.getDecks(req, res, next);

    expect(next).toBeCalledWith('getDecks error');
  });

  it('getDeckById call next fn', async () => {
    await decksController.getDeckById(req, res, next);

    expect(next).toBeCalledWith('getDeckById error');
  });
  it('createDeck call next fn', async () => {
    await decksController.createDeck(req, res, next);

    expect(next).toBeCalledWith('createDeck error');
  });
  it('updateDeck call next fn', async () => {
    await decksController.updateDeck(req, res, next);

    expect(next).toBeCalledWith('updateDeck error');
  });
  it('deleteDeck call next fn', async () => {
    await decksController.deleteDeck(req, res, next);

    expect(next).toBeCalledWith('deleteDeck error');
  });
});

describe('Deck Controller throw errors if no id', () => {
  let decksController: IDecksController;
  const expectedError = new Error(errorCodes.INVALID_ID);

  const req = {} as Request;
  const res = {} as Response;
  const next = jest.fn();

  beforeEach(() => {
    decksController = new DecksControllerFactory({} as IDecksDao);
  });

  it('getDeckById throw error if no id', async () => {
    await decksController.getDeckById(req, res, next);

    expect(next).toBeCalledWith(expectedError);
  });

  it('updateDeck throw error if no id', async () => {
    await decksController.updateDeck(req, res, next);

    expect(next).toBeCalledWith(expectedError);
  });

  it('deleteDeck throw error if no id', async () => {
    await decksController.deleteDeck(req, res, next);

    expect(next).toBeCalledWith(expectedError);
  });
});

import express, { Application, Request, Response } from 'express';
import request from 'supertest';
// todo: fix imports
import { ICardsController, ICardsDao } from '../../src/modules/cards/interfaces';
import CardsControllerFactory from '../../src/modules/cards/cards.controller.factory';
import { cardDto } from './consts';
import { CardsRoutesFactory } from '../../src/modules/cards/cards.routes.factory';
import { errorCodes } from '../../src/const';

// not 'pure' unit tests because of using routes
describe('Card Controller return appropriate responses', () => {
  let app: Application;
  let cardsController: ICardsController;

  const cardsDaoMock: ICardsDao = {
    getCards: () => Promise.resolve([cardDto]),
    getCardById: () => Promise.resolve(cardDto),
  };

  beforeEach(() => {
    app = express();
    cardsController = new CardsControllerFactory(cardsDaoMock);
    new CardsRoutesFactory(app, cardsController);
  });

  it('getCards return list of cards', (done) => {
    request(app).get('/api/cards').expect(200).expect([cardDto], done);
  });

  it('getCardById return a card', (done) => {
    request(app).get('/api/cards/123').expect(200).expect(cardDto, done);
  });
});

describe('Card Controller handle errors (call next function)', () => {
  let cardsController: ICardsController;

  const req = { params: { id: '123' } } as unknown as Request;
  const res = {} as Response;
  const next = jest.fn();

  const cardsDaoMock: ICardsDao = {
    getCards: () => Promise.reject('getCards error'),
    getCardById: () => Promise.reject('getCardById error'),
  };

  beforeEach(() => {
    cardsController = new CardsControllerFactory(cardsDaoMock);
  });

  it('getCardById call next fn', async () => {
    await cardsController.getCards(req, res, next);

    expect(next).toBeCalledWith('getCards error');
  });

  it('getCardById call next fn', async () => {
    await cardsController.getCardById(req, res, next);

    expect(next).toBeCalledWith('getCardById error');
  });
});

describe('Card Controller throw errors', () => {
  it('getCardById throw error if no id', async () => {
    const expectedError = errorCodes.INVALID_ID;

    const req = {} as Request;
    const res = {} as Response;
    const next = jest.fn();

    const cardsController = new CardsControllerFactory({} as ICardsDao);

    await cardsController.getCardById(req, res, next);

    expect(next).toBeCalledWith(expectedError);
  });
});

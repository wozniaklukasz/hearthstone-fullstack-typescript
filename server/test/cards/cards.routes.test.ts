import express, { Application } from 'express';
import request from 'supertest';
import { CardsRoutesFactory } from '../../src/modules/cards/cards.routes.factory';
import { ICardsController } from '../../src/modules/cards/interfaces';
import { GetCardDto } from '../../src/modules/cards/types';
import { errorHandler } from '../../src/helpers/errorHandler';

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

describe('Cards routes works', () => {
  let app: Application;

  beforeAll(() => {
    app = express();
    const cardsControllerMock: ICardsController = {
      getCards: () => Promise.resolve([cardDto]),
      getCardById: () => Promise.resolve(cardDto),
    };

    new CardsRoutesFactory(app, cardsControllerMock);
  });

  it('/api/cards returns list of cards', (done) => {
    request(app).get('/api/cards').expect(200).expect([cardDto], done);
  });

  it('/api/cards/:id returns a card', (done) => {
    request(app).get('/api/cards/123').expect(200).expect(cardDto, done);
  });
});

describe('Cards routes handle errors', () => {
  let app: Application;
  const expectedError = { error: 'error message' };

  beforeAll(() => {
    app = express();
    const cardsControllerMock: ICardsController = {
      getCards: () => {
        throw new Error('error message');
      },
      getCardById: () => {
        throw new Error('error message');
      },
    };

    new CardsRoutesFactory(app, cardsControllerMock);
    app.use(errorHandler);
  });

  it('/api/cards returns error message', (done) => {
    request(app).get('/api/cards').expect(500).expect(expectedError, done);
  });

  it('/api/cards/:id returns error message', (done) => {
    request(app).get('/api/cards/123').expect(500).expect(expectedError, done);
  });
});

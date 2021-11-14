import express, { Application, Request, Response } from 'express';
import request from 'supertest';
import { CardsRoutesFactory } from '../../src/modules/cards/cards.routes.factory';
import { ICardsController } from '../../src/modules/cards/interfaces';

describe('Cards routes call appropriate controller methods', () => {
  let app: Application;
  let cardsControllerMock: ICardsController;

  beforeAll(() => {
    app = express();

    cardsControllerMock = {
      getCards: (req: Request, res: Response) => res.end(),
      getCardById: (req: Request, res: Response) => res.end(),
    };

    new CardsRoutesFactory(app, cardsControllerMock);
  });

  it('GET /api/cards', (done) => {
    const getCards = jest.spyOn(cardsControllerMock, 'getCards');

    request(app)
      .get('/api/cards')
      .end(() => {
        expect(getCards).toHaveBeenCalled();
        done();
      });
  });

  it('GET /api/cards/:id', (done) => {
    const getCardById = jest.spyOn(cardsControllerMock, 'getCardById');

    request(app)
      .get('/api/cards/123')
      .end(() => {
        expect(getCardById).toHaveBeenCalled();
        done();
      });
  });
});

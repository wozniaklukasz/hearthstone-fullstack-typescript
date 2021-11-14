import express, { Application, Request, Response } from 'express';
import request from 'supertest';
import { IDecksController } from '../../src/modules/decks/interfaces';
import { DecksRoutesFactory } from '../../src/modules/decks/decks.routes.factory';

describe('Decks routes call appropriate controller methods', () => {
  let app: Application;
  let decksControllerMock: IDecksController;

  beforeEach(() => {
    app = express();
    decksControllerMock = {
      getDecks: (req: Request, res: Response) => res.end(),
      getDeckById: (req: Request, res: Response) => res.end(),
      createDeck: (req: Request, res: Response) => res.end(),
      updateDeck: (req: Request, res: Response) => res.end(),
      deleteDeck: (req: Request, res: Response) => res.end(),
    };

    // express.json() is required to make post/put work
    app.use(express.json());
    new DecksRoutesFactory(app, decksControllerMock);
  });

  it('GET /api/decks', (done) => {
    const getDecks = jest.spyOn(decksControllerMock, 'getDecks');

    request(app)
      .get('/api/decks')
      .end(() => {
        expect(getDecks).toHaveBeenCalled();
        done();
      });
  });

  it('GET /api/decks/:id', (done) => {
    const getDeckById = jest.spyOn(decksControllerMock, 'getDeckById');

    request(app)
      .get('/api/decks/123')
      .end(() => {
        expect(getDeckById).toHaveBeenCalled();
        done();
      });
  });

  it('POST /api/decks/', (done) => {
    const createDeck = jest.spyOn(decksControllerMock, 'createDeck');

    request(app)
      .post('/api/decks/')
      .end(() => {
        expect(createDeck).toHaveBeenCalled();
        done();
      });
  });

  it('PUT /api/decks/:id', (done) => {
    const updateDeck = jest.spyOn(decksControllerMock, 'updateDeck');

    request(app)
      .put('/api/decks/123')
      .end(() => {
        expect(updateDeck).toHaveBeenCalled();
        done();
      });
  });

  it('DELETE /api/decks/:id', (done) => {
    const deleteDeck = jest.spyOn(decksControllerMock, 'deleteDeck');

    request(app)
      .delete('/api/decks/123')
      .end(() => {
        expect(deleteDeck).toHaveBeenCalled();
        done();
      });
  });
});

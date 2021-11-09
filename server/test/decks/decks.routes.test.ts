import express, { Application } from 'express';
import request from 'supertest';
import { errorHandler } from '../../src/helpers/errorHandler';
import { IDecksController } from '../../src/modules/decks/interfaces';
import { deckDto } from './consts';
import { DecksRoutesFactory } from '../../src/modules/decks/decks.routes.factory';

describe('Decks routes works', () => {
  let app: Application;

  beforeEach(() => {
    app = express();
    const decksControllerMock: IDecksController = {
      getDecks: () => Promise.resolve([deckDto]),
      getDeckById: () => Promise.resolve(deckDto),
      createDeck: () => Promise.resolve(deckDto),
      updateDeck: () => Promise.resolve(deckDto),
      deleteDeck: () => Promise.resolve('123'),
    };

    // express.json() is required to make post/put work
    app.use(express.json());
    new DecksRoutesFactory(app, decksControllerMock);
  });

  it('GET /api/decks returns list of decks', (done) => {
    request(app).get('/api/decks').expect(200).expect([deckDto], done);
  });

  it('GET /api/decks/:id returns a card', (done) => {
    request(app).get('/api/decks/123').expect(200).expect(deckDto, done);
  });

  it('POST /api/decks/ returns a card', (done) => {
    request(app).post('/api/decks').expect(200).expect(deckDto, done);
  });

  it('PUT /api/decks/:id returns a card', (done) => {
    request(app).put('/api/decks/123').expect(200).expect(deckDto, done);
  });

  it('DELETE /api/decks/:id returns deleted id', (done) => {
    request(app).delete('/api/decks/123').expect(200).expect('123', done);
  });
});

describe('decks routes handle errors', () => {
  let app: Application;
  const expectedError = { error: 'error message' };

  beforeAll(() => {
    app = express();
    const decksControllerMock: IDecksController = {
      getDecks: () => {
        throw new Error('error message');
      },
      getDeckById: () => {
        throw new Error('error message');
      },
      createDeck: () => {
        throw new Error('error message');
      },
      updateDeck: () => {
        throw new Error('error message');
      },
      deleteDeck: () => {
        throw new Error('error message');
      },
    };

    // express.json() is required to make post/put work
    app.use(express.json());
    new DecksRoutesFactory(app, decksControllerMock);
    app.use(errorHandler);
  });

  it('GET /api/decks returns error message', (done) => {
    request(app).get('/api/decks').expect(500).expect(expectedError, done);
  });

  it('GET /api/decks/:id returns error message', (done) => {
    request(app).get('/api/decks/123').expect(500).expect(expectedError, done);
  });

  it('POST /api/decks returns error message', (done) => {
    request(app).post('/api/decks').expect(500).expect(expectedError, done);
  });

  it('PUT /api/decks/:id returns error message', (done) => {
    request(app).put('/api/decks/123').expect(500).expect(expectedError, done);
  });

  it('DELETE /api/decks/:id returns error message', (done) => {
    request(app).delete('/api/decks/123').expect(500).expect(expectedError, done);
  });
});

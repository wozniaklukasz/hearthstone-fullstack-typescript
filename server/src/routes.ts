import express from 'express';
import { DecksRoutes } from './modules/decks/decks.routes';
import { CardsRoutes } from './modules/cards/cards.routes';

const initRoutes = (app: express.Application) => {
  new DecksRoutes(app);
  CardsRoutes(app);
};

export default initRoutes;

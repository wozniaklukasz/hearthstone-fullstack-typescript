import { Application } from 'express';
import { CardsRoutesFactory } from './cards.routes.factory';
import CardsController from './cards.controller';

export const CardsRoutes = (app: Application) => new CardsRoutesFactory(app, CardsController());

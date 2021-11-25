import { Application } from 'express';
import { DecksRoutesFactory } from './decks.routes.factory';
import DecksController from './decks.controller';

export const DecksRoutes = (app: Application) => new DecksRoutesFactory(app, DecksController());

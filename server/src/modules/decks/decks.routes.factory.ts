import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutes } from '../common/common.routes';
import { IDecksController } from './interfaces';

export class DecksRoutesFactory extends CommonRoutes<IDecksController> {
  constructor(app: Application, controller: IDecksController) {
    super(app, controller);
  }

  configureRoutes() {
    this.app
      .route(`/api/decks`)
      .get(async (req: Request, res: Response, next: NextFunction) => await this.controller.getDecks(req, res, next))
      .post(
        async (req: Request, res: Response, next: NextFunction) => await this.controller.createDeck(req, res, next),
      );

    this.app
      .route(`/api/decks/:id`)
      .get(async (req: Request, res: Response, next: NextFunction) => await this.controller.getDeckById(req, res, next))
      .put(async (req: Request, res: Response, next: NextFunction) => await this.controller.updateDeck(req, res, next))
      .delete(
        async (req: Request, res: Response, next: NextFunction) => await this.controller.deleteDeck(req, res, next),
      );
  }
}

import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutes } from '../common/common.routes';
import DecksController from './decks.controller';
import { IDecksController } from './interfaces';

export class DecksRoutes extends CommonRoutes {
  private decksController: IDecksController;

  constructor(app: Application) {
    super(app);
    this.decksController = DecksController();
  }

  configureRoutes() {
    this.app
      .route(`/api/decks`)
      .get((req: Request, res: Response, next: NextFunction) => {
        this.decksController
          .getDecks()
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      })
      .post((req: Request, res: Response, next: NextFunction) => {
        this.decksController
          .createDeck({ title: req.body.title })
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      });

    this.app
      .route(`/api/decks/:id`)
      .get((req: Request, res: Response, next: NextFunction) => {
        this.decksController
          .getDeckById(req.params.id)
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      })
      .put((req: Request, res: Response, next: NextFunction) => {
        this.decksController
          .updateDeck(req.params.id, { title: req.body.title })
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      })
      .delete((req: Request, res: Response, next: NextFunction) => {
        this.decksController
          .deleteDeck(req.params.id)
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      });
  }
}

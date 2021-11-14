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
      .get((req: Request, res: Response, next: NextFunction) => {
        this.controller
          .getDecks()
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      })
      .post((req: Request, res: Response, next: NextFunction) => {
        this.controller
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
        this.controller
          .getDeckById(req.params.id)
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      })
      .put((req: Request, res: Response, next: NextFunction) => {
        this.controller
          .updateDeck(req.params.id, { title: req.body.title })
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      })
      .delete((req: Request, res: Response, next: NextFunction) => {
        this.controller
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

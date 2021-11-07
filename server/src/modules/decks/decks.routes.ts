import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutes } from '../common/common.routes';
import DecksController from './decks.controller';

export class DecksRoutes extends CommonRoutes {
  decksController;

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
      .route(`/api/decks/:deckId`)
      .get((req: Request, res: Response, next: NextFunction) => {
        this.decksController
          .getDeckById(req.params.deckId)
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      })
      .put((req: Request, res: Response, next: NextFunction) => {
        this.decksController
          .updateDeck(req.params.deckId, { title: req.body.title })
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      })
      .delete((req: Request, res: Response, next: NextFunction) => {
        this.decksController
          .deleteDeck(req.params.deckId)
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((error) => {
            next(error);
          });
      });
  }
}

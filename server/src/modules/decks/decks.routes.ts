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
      .get((req: Request, res: Response) => {
        this.decksController
          .getDecks()
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      })
      .post((req: Request, res: Response) => {
        this.decksController
          .createDeck({ title: req.body.title })
          .then((resp) => {
            res.status(200).send(resp);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      });

    this.app
      .route(`/api/decks/:deckId`)
      .all((err: Error, req: Request, res: Response, next: NextFunction) => {
        next();
      })
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
      .put((req: Request, res: Response) => {
        res.status(200).send(`PUT requested for id ${req.params.deckId}`);
      })
      .patch((req: Request, res: Response) => {
        res.status(200).send(`PATCH requested for id ${req.params.deckId}`);
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

import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutes } from '../common/common.routes';
import { ICardsController } from './interfaces';
import CardsController from './cards.controller';

export class CardsRoutes extends CommonRoutes {
  private cardsController: ICardsController;

  constructor(app: Application) {
    super(app);
    this.cardsController = CardsController();
  }

  configureRoutes() {
    this.app.route(`/api/cards`).get((req: Request, res: Response, next: NextFunction) => {
      this.cardsController
        .getCards()
        .then((resp) => {
          res.status(200).send(resp);
        })
        .catch((error) => {
          next(error);
        });
    });

    this.app.route(`/api/cards/:id`).get((req: Request, res: Response, next: NextFunction) => {
      this.cardsController
        .getCardById(req.params.id)
        .then((resp) => {
          res.status(200).send(resp);
        })
        .catch((error) => {
          next(error);
        });
    });
  }
}

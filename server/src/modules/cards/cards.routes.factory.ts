import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutes } from '../common/common.routes';
import { ICardsController } from './interfaces';

export class CardsRoutesFactory extends CommonRoutes {
  private cardsController: ICardsController;

  constructor(app: Application, cardsController: ICardsController) {
    super(app);
    this.cardsController = cardsController;
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

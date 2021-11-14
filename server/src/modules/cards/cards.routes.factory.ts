import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutes } from '../common/common.routes';
import { ICardsController } from './interfaces';

export class CardsRoutesFactory extends CommonRoutes<ICardsController> {
  constructor(app: Application, controller: ICardsController) {
    super(app, controller);
  }

  configureRoutes() {
    this.app.route(`/api/cards`).get(async (req: Request, res: Response, next: NextFunction) => {
      await this.controller.getCards(req, res, next);
    });

    this.app.route(`/api/cards/:id`).get((req: Request, res: Response, next: NextFunction) => {
      this.controller
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

import express from 'express';
import {CommonRoutes} from "../common/common.routes";
import DecksController from "./decks.controller";

export class DecksRoutes extends CommonRoutes {
    decksController;

    constructor(app: express.Application) {
        super(app);
        this.decksController = DecksController();
    }

    configureRoutes() {
        this.app.route(`/api/decks`)
            .get((req: express.Request, res: express.Response) => {
                this.decksController.getDecks()
                    .then(resp => {
                        res.status(200).send(resp);
                    }).catch(err => {
                        res.status(500).send(err);
                    })
            })
            .post((req: express.Request, res: express.Response) => {
                this.decksController.createDeck({ title: req.body.title })
                    .then(resp => {
                        res.status(200).send(resp);
                    }).catch(err => {
                        res.status(500).send(err);
                    })
            });

        this.app.route(`/api/decks/:deckId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                this.decksController.getDeckById(req.params.deckId)
                    .then(resp => {
                        res.status(200).send(resp);
                    }).catch(err => {
                        res.status(500).send(err);
                    })
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.deckId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.deckId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.deckId}`);
            });
    }
}

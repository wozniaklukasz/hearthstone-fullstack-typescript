import express from "express";
import {DecksRoutes} from "../decks/decks.routes";

const initRoutes = (app: express.Application) => {
    new DecksRoutes(app);
}

export default initRoutes;

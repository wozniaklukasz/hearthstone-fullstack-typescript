import { NextFunction, Request, Response } from 'express';
import { CreateDeckDto, GetDeckDto } from 'commons/lib/dtos';
import { IDecksController, IDecksDao } from './interfaces';
import ControllerService from '../common/ControllerService';

class DecksControllerFactory implements IDecksController {
  private decksDao: IDecksDao;

  constructor(decksDao: IDecksDao) {
    this.decksDao = decksDao;
  }

  async getDecks(req: Request, res: Response, next: NextFunction) {
    try {
      const decks: GetDeckDto[] = await this.decksDao.getDecks();
      res.status(200).send(decks);
    } catch (error) {
      next(error);
    }
  }

  async getDeckById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = ControllerService.getIdFromRequest(req);
      const deck: GetDeckDto = await this.decksDao.getDeckById(id);
      res.status(200).send(deck);
    } catch (error) {
      next(error);
    }
  }

  async createDeck(req: Request, res: Response, next: NextFunction) {
    try {
      const deckDto: CreateDeckDto = { title: req.body.title };
      const deck: GetDeckDto = await this.decksDao.createDeck(deckDto);
      res.status(200).send(deck);
    } catch (error) {
      next(error);
    }
  }

  async updateDeck(req: Request, res: Response, next: NextFunction) {
    try {
      const id = ControllerService.getIdFromRequest(req);
      const deckDto: CreateDeckDto = { title: req.body.title };
      const deck: GetDeckDto = await this.decksDao.updateDeck(id, deckDto);
      res.status(200).send(deck);
    } catch (error) {
      next(error);
    }
  }

  async deleteDeck(req: Request, res: Response, next: NextFunction) {
    try {
      const id = ControllerService.getIdFromRequest(req);
      await this.decksDao.deleteDeck(id);
      res.status(200).send(id);
    } catch (error) {
      next(error);
    }
  }
}

export default DecksControllerFactory;

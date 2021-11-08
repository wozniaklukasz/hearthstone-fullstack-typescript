import { DeleteResult, UpdateResult } from 'mongodb';
import { CreateDeckDto, GetDeckDto } from './types';
import { IDecksDao } from './interfaces';
import { mapDaoListToDtoList, mapDaoToDto } from './utils';
import { IDeckModel, DeckDocument } from '../../model';
import { errorCodes } from '../../const';
import DaoValidationService from '../common/daoValidationService';

class DecksDaoFactory implements IDecksDao {
  private deckModel: IDeckModel;

  constructor(deckModel: IDeckModel) {
    this.deckModel = deckModel;
  }

  async getDecks(): Promise<GetDeckDto[]> {
    const decks: DeckDocument[] = await this.deckModel.find({});
    return mapDaoListToDtoList(decks);
  }

  async getDeckById(deckId: string): Promise<GetDeckDto> {
    DaoValidationService.validateId(deckId);

    const deck: DeckDocument | null = await this.deckModel.findOne({ _id: deckId });

    if (deck) {
      return mapDaoToDto(deck);
    }

    throw new Error(errorCodes.DECK_NOT_FOUND);
  }

  async createDeck(deckDto: CreateDeckDto): Promise<GetDeckDto> {
    const deck: DeckDocument = await this.deckModel.create(deckDto);
    return mapDaoToDto(deck);
  }

  async updateDeck(deckId: string, deckDto: CreateDeckDto): Promise<GetDeckDto> {
    DaoValidationService.validateId(deckId);

    const updateResult: UpdateResult = await this.deckModel.updateOne({ _id: deckId }, deckDto);

    if (updateResult && updateResult.modifiedCount > 0) {
      return await this.getDeckById(deckId);
    }

    throw new Error(errorCodes.DECK_NOT_FOUND);
  }

  async deleteDeck(deckId: string): Promise<string> {
    DaoValidationService.validateId(deckId);

    const deleteResult: DeleteResult = await this.deckModel.deleteOne({ _id: deckId });

    if (deleteResult && deleteResult.deletedCount > 0) {
      return deckId;
    }

    throw new Error(errorCodes.DECK_NOT_FOUND);
  }
}

export default DecksDaoFactory;

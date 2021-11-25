import { DeleteResult, UpdateResult } from 'mongodb';
import { CreateDeckDto, GetDeckDto } from 'commons/lib/dtos';
import { IDecksDao } from './interfaces';
import { mapDaoListToDtoList, mapDaoToDto } from './utils';
import { IDeckModel, DeckDocument } from '../../model';
import { DB_QUERY_LIMIT, errorCodes } from '../../const';
import DaoValidation from '../common/DaoValidation';

class DecksDaoFactory implements IDecksDao {
  private deckModel: IDeckModel;

  constructor(deckModel: IDeckModel) {
    this.deckModel = deckModel;
  }

  async getDecks(): Promise<GetDeckDto[]> {
    const decks: DeckDocument[] = await this.deckModel.find({}).limit(DB_QUERY_LIMIT);
    return mapDaoListToDtoList(decks);
  }

  async getDeckById(deckId: string): Promise<GetDeckDto> {
    DaoValidation.validateId(deckId);

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
    DaoValidation.validateId(deckId);

    const updateResult: UpdateResult = await this.deckModel.updateOne({ _id: deckId }, deckDto);

    if (updateResult && updateResult.modifiedCount > 0) {
      return await this.getDeckById(deckId);
    }

    throw new Error(errorCodes.DECK_NOT_FOUND);
  }

  async deleteDeck(deckId: string): Promise<string> {
    DaoValidation.validateId(deckId);

    const deleteResult: DeleteResult = await this.deckModel.deleteOne({ _id: deckId });

    if (deleteResult && deleteResult.deletedCount > 0) {
      return deckId;
    }

    throw new Error(errorCodes.DECK_NOT_FOUND);
  }
}

export default DecksDaoFactory;

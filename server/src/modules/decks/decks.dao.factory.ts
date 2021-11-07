import { CreateDeckDto, GetDeckDto } from './types';
import { IDecksDao } from './interfaces';
import { mapDaoListToDtoList, mapDaoToDto } from './utils';
import { IDeckModel, TDeckDocument } from '../../model';
import { errorCodes } from '../../const';
import DaoValidationService from '../common/daoValidationService';
import { DeleteResult } from 'mongodb';

class DecksDaoFactory implements IDecksDao {
  private deckModel: IDeckModel;

  constructor(deckModel: IDeckModel) {
    this.deckModel = deckModel;
  }

  async getDecks(): Promise<GetDeckDto[]> {
    const decks: TDeckDocument[] = await this.deckModel.find({});
    return mapDaoListToDtoList(decks);
  }

  async getDeckById(deckId: string): Promise<GetDeckDto> {
    DaoValidationService.validateId(deckId);

    const deck: TDeckDocument | null = await this.deckModel.findOne({ _id: deckId });

    if (deck) {
      return mapDaoToDto(deck);
    }

    throw new Error(errorCodes.DECK_NOT_FOUND);
  }

  async createDeck(deckDto: CreateDeckDto): Promise<GetDeckDto> {
    const deck: TDeckDocument = await this.deckModel.create(deckDto);
    return mapDaoToDto(deck);
  }

  async deleteDeck(deckId: string): Promise<string> {
    DaoValidationService.validateId(deckId);

    const deleteResult: DeleteResult = await this.deckModel.remove({ _id: deckId });

    if (deleteResult && deleteResult.deletedCount > 0) {
      return deckId;
    }

    throw new Error(errorCodes.DECK_NOT_FOUND);
  }
}

export default DecksDaoFactory;

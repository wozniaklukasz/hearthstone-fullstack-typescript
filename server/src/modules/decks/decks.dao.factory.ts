import { CreateDeckDto, GetDeckDto } from './types';
import { IDecksDao } from './interfaces';
import { mapDaoListToDtoList, mapDaoToDto } from './utils';
import { IDeckModel, TDeckDocument } from '../../model';
import { errorCodes } from '../../const';

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
    const deck: TDeckDocument | null = await this.deckModel.findOne({ _id: deckId });

    if (deck) {
      return mapDaoToDto(deck);
    } else {
      throw new Error(errorCodes.DECK_NOT_FOUND);
    }
  }

  async createDeck(deckDto: CreateDeckDto): Promise<GetDeckDto> {
    const deck: TDeckDocument = await this.deckModel.create(deckDto);
    return mapDaoToDto(deck);
  }
}

export default DecksDaoFactory;

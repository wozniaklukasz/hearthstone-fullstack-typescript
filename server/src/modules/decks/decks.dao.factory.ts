import { CreateDeckDto, GetDeckDto } from './types';
import { IDecksDao } from './interfaces';
import { mapDaoListToDtoList, mapDaoToDto } from './utils';

class DecksDaoFactory implements IDecksDao {
  private deckModel;

  constructor(deckModel: any) {
    this.deckModel = deckModel;
  }

  async getDecks(): Promise<GetDeckDto[]> {
    const decks = await this.deckModel.find({});
    return mapDaoListToDtoList(decks);
  }

  async getDeckById(deckId: string): Promise<GetDeckDto> {
    const deck = await this.deckModel.findOne({ _id: deckId });
    return mapDaoToDto(deck);
  }

  async createDeck(deckDto: CreateDeckDto): Promise<GetDeckDto> {
    const deck = await this.deckModel.create(deckDto);
    return mapDaoToDto(deck);
  }
}

export default DecksDaoFactory;

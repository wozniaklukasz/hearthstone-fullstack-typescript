import {ICreateDeckDto, IGetDeckDto} from "./decks.dto";
import {mapDaoListToDtoList, mapDaoToDto} from "./decks.mapper";
import IDecksDao from "./IDecksDao";

class DecksDaoFactory implements IDecksDao{
    private deckModel;

    constructor(deckModel: any) {
        this.deckModel = deckModel;
    }

    async getDecks(): Promise<IGetDeckDto[]> {
        try {
            const decks = await this.deckModel.find({});
            return mapDaoListToDtoList(decks)
        } catch (e) {
            throw e;
        }
    }

    async getDeckById(deckId: string): Promise<IGetDeckDto> {
        try {
            const deck = await this.deckModel.findOne({_id: deckId});
            return mapDaoToDto(deck)
        } catch (e) {
            throw e;
        }
    }

    async createDeck(deckDto: ICreateDeckDto): Promise<IGetDeckDto> {
        try {
            const deck = await this.deckModel.create(deckDto);
            return mapDaoToDto(deck);
        } catch (e) {
            throw e;
        }
    }
}

export default DecksDaoFactory;

import {mapDaoListToDtoList, mapDaoToDto} from "./decks.mapper";
import {CreateDeckDto, GetDeckDto} from "./types";
import {IDecksDao} from "./interfaces";

class DecksDaoFactory implements IDecksDao{
    private deckModel;

    constructor(deckModel: any) {
        this.deckModel = deckModel;
    }

    async getDecks(): Promise<GetDeckDto[]> {
        try {
            const decks = await this.deckModel.find({});
            return mapDaoListToDtoList(decks)
        } catch (e) {
            throw e;
        }
    }

    async getDeckById(deckId: string): Promise<GetDeckDto> {
        try {
            const deck = await this.deckModel.findOne({_id: deckId});
            return mapDaoToDto(deck)
        } catch (e) {
            throw e;
        }
    }

    async createDeck(deckDto: CreateDeckDto): Promise<GetDeckDto> {
        try {
            const deck = await this.deckModel.create(deckDto);
            return mapDaoToDto(deck);
        } catch (e) {
            throw e;
        }
    }
}

export default DecksDaoFactory;

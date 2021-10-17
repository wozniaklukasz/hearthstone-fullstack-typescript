import {ICreateDeckDto, IGetDeckDto} from "./decks.dto";
import IDecksDao from "./IDecksDao";

class DecksControllerFactory {
    private decksDao: IDecksDao;

    constructor(decksDao: IDecksDao) {
        this.decksDao = decksDao;
    }

    async getDecks(): Promise<IGetDeckDto[]> {
        return this.decksDao.getDecks();
    }

    async getDeckById(deckId: string): Promise<IGetDeckDto> {
        return this.decksDao.getDeckById(deckId);
    }

    async createDeck(deckDto: ICreateDeckDto): Promise<IGetDeckDto> {
        return this.decksDao.createDeck(deckDto);
    }
}

export default DecksControllerFactory;

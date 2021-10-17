import {ICreateDeckDto, IGetDeckDto} from "./decks.dto";

interface IDecksDao {
    getDecks: () => Promise<IGetDeckDto[]>,
    getDeckById: (deckId: string) => Promise<IGetDeckDto>,
    createDeck: (deckDto: ICreateDeckDto) => Promise<IGetDeckDto>
}

export default IDecksDao;

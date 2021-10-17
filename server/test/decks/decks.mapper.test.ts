import {DeckDao, GetDeckDto} from "src/decks/types";
import {mapDaoListToDtoList, mapDaoToDto} from "src/decks/decks.mapper";

describe('Deck mapper works', () => {
    it('DAO is mapped to DTO', () => {
        const deckDao: DeckDao = {
            _id: 'id',
            title: 'title',
            updatedAt: '11/02',
            createdAt: '22/02'
        }
        const expectedDeckDto: GetDeckDto = {
            id: 'id',
            title: 'title',
            updatedAt: '11/02',
            createdAt: '22/02'
        }

        const deckDto = mapDaoToDto(deckDao);

        expect(deckDto).toStrictEqual(expectedDeckDto);
    })

    it('DAO array is mapped to DTO', () => {
        const decksDao: DeckDao[] = [{
            _id: 'id',
            title: 'title',
            updatedAt: '11/02',
            createdAt: '22/02'
        },{
            _id: 'id2',
            title: 'title2',
            updatedAt: '11/02',
            createdAt: '22/02'
        }]
        const expectedDecksDto: GetDeckDto[] = [{
            id: 'id',
            title: 'title',
            updatedAt: '11/02',
            createdAt: '22/02'
        },{
            id: 'id2',
            title: 'title2',
            updatedAt: '11/02',
            createdAt: '22/02'
        }]

        const decksDto = mapDaoListToDtoList(decksDao);

        expect(decksDto).toStrictEqual(expectedDecksDto);
    })
})

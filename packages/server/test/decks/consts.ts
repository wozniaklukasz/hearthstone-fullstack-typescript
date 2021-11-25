import { GetDeckDto } from '../../src/modules/decks/types';
import { DeckDocument } from '../../src/model';

const deckDto: GetDeckDto = {
  id: 'id',
  title: 'title',
  createdAt: '11',
  updatedAt: '12',
};

const deckDao: DeckDocument = {
  _id: 'id',
  title: 'title',
  createdAt: '11',
  updatedAt: '12',
};

export { deckDto, deckDao };

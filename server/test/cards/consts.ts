import { GetCardDto } from '../../src/modules/cards/types';
import { CardDocument } from '../../src/model/card';

const cardDto: GetCardDto = {
  id: 'id',
  imageId: 'string',
  name: 'string',
  text: 'string',
  flavor: 'string',
  artist: 'string',
  attack: 10,
  cardClass: 'any',
  collectible: true,
  cost: 20,
  elite: true,
  faction: 'any',
  health: 8,
  mechanics: [],
  rarity: 'any',
  cardSet: 'any',
  type: 'any',
};

const cardDao: CardDocument = {
  _id: 'id',
  imageId: 'string',
  name: 'string',
  text: 'string',
  flavor: 'string',
  artist: 'string',
  attack: 10,
  cardClass: 'any',
  collectible: true,
  cost: 20,
  elite: true,
  faction: 'any',
  health: 8,
  mechanics: [],
  rarity: 'any',
  cardSet: 'any',
  type: 'any',
};

export { cardDto, cardDao };

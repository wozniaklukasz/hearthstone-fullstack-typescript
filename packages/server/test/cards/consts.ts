import { GetCardDto } from 'commons/lib/dtos';
import { CardDocument } from '../../src/model/card';

const cardDto: GetCardDto = {
  id: 'id',
  imageId: 'string',
  name: 'string',
  text: 'string',
  flavor: 'string',
  artist: 'string',
  attack: 10,
  cardClass: null,
  collectible: true,
  cost: 20,
  elite: true,
  faction: null,
  health: 8,
  mechanics: null,
  rarity: null,
  cardSet: null,
  type: null,
};

const cardDao: CardDocument = {
  _id: 'id',
  imageId: 'string',
  name: 'string',
  text: 'string',
  flavor: 'string',
  artist: 'string',
  attack: 10,
  cardClass: null,
  collectible: true,
  cost: 20,
  elite: true,
  faction: null,
  health: 8,
  mechanics: null,
  rarity: null,
  cardSet: null,
  type: null,
};

export { cardDto, cardDao };

import * as dotenv from 'dotenv';
dotenv.config();
import * as fs from 'fs';
import * as path from 'path';
import { connection } from 'mongoose';
import initDbConnection, { disconnect } from '../index';
import { CreateCardDto } from '../../modules/cards/types';

const mapJsonCardToCardDto = (jsonCards: any[]): CreateCardDto[] =>
  jsonCards.map((jCard) => ({
    imageId: jCard.id,
    name: jCard.name,
    text: jCard.text,
    flavor: jCard.flavor,
    artist: jCard.artist,
    attack: jCard.attack,
    cardClass: jCard.cardClass,
    collectible: jCard.collectible,
    cost: jCard.cost,
    elite: jCard.elite,
    faction: jCard.faction,
    health: jCard.health,
    mechanics: jCard.mechanics,
    rarity: jCard.rarity,
    cardSet: jCard.set,
    type: jCard.type,
  }));

const initAdmin = async () => {
  const user = {
    email: process.env.ADMIN_EMAIL,
    role: 'ADMIN',
  };

  console.log('Create admin...');
  await connection.collection('users').insertOne(user);
  console.log('Created admin!');
};

const initCards = async () => {
  console.log('Load cards...');

  let cards: any[] = [];
  const dataDir = path.resolve(__dirname, './data/');

  fs.readdirSync(dataDir).forEach((dir) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const data = require(`./data/${dir}/cards.json`);
    cards = cards.concat(JSON.parse(JSON.stringify(data)));
  });

  await connection.collection('cards').insertMany(mapJsonCardToCardDto(cards));
  console.log(`${cards.length} cards loaded!`);
};

(async () => {
  await initDbConnection();

  await initAdmin();
  await initCards();

  await disconnect();
})();

import * as dotenv from 'dotenv';
dotenv.config();

import { connection } from 'mongoose';
import initDbConnection, { disconnect } from '../index';

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

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const data = require('./data/121569/cards.json');
  const cards = JSON.parse(JSON.stringify(data));

  await connection.collection('cards').insertMany(cards);
  console.log(`${cards.length} cards loaded!`);
};

(async () => {
  await initDbConnection();

  await initAdmin();
  await initCards();

  await disconnect();
})();

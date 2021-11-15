/*
this file contains useful db queries for development purposes
run this file as well as migration script
 */

import * as dotenv from 'dotenv';
dotenv.config();
import { connection } from 'mongoose';
import initDbConnection, { disconnect } from '../index';

const getCardsEnums = async () => {
  const result = await connection.collection('cards').distinct('mechanics');
  const resultAsEnumString = result
    .filter((x) => !!x)
    .map((x) => `${x} = '${x}'`)
    .join();
  console.log(resultAsEnumString);
};

(async () => {
  await initDbConnection();

  await getCardsEnums();

  await disconnect();
})();

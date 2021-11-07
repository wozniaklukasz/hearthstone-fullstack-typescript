import mongoose from 'mongoose';

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hearthstone-ts.agb44.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/* eslint-disable */

const initDbConnection = async () => {
  console.log(`Initialized connection to the ${process.env.DB_NAME}...`);

  try {
    // @ts-ignore
    await mongoose.connect(DB_URL, options);
  } catch (error) {
    throw error;
  } finally {
    console.log(`Connected to the ${process.env.DB_NAME}!`);
  }
};

export const disconnect = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    throw error;
  } finally {
    console.log(`Disconnected from the ${process.env.DB_NAME}!`);
  }
};

export default initDbConnection;

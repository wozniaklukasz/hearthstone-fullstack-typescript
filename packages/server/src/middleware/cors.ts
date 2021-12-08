import { Application } from 'express';
import cors from 'cors';

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

export default (app: Application) => {
  app.use(cors(corsOptions));
};

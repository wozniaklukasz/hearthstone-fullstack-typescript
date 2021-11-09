import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import * as http from 'http';
import cors from 'cors';

import initDbConnection from './db';
import { logger, errorLogger } from './helpers/logger';
import initRoutes from './routes';
import { errorHandler } from './helpers/errorHandler';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

initDbConnection();

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use(logger);

initRoutes(app);

// error handling
app.use(errorLogger);
app.use(errorHandler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

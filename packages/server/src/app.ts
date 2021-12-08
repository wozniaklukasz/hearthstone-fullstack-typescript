import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import * as http from 'http';

import { corsMiddleware, sessionMiddleware } from './middleware';
import initDbConnection from './db';
import { logger, errorLogger } from './helpers/logger';
import initRoutes from './routes';
import { errorHandler } from './helpers/errorHandler';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

initDbConnection();

// middleware
app.use(express.json());
app.use(logger);
sessionMiddleware(app);
corsMiddleware(app);

// routes
initRoutes(app);

// error handling
app.use(errorLogger);
app.use(errorHandler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import * as http from 'http';
import cors from 'cors';

import initDbConnection from "./db";
import logger from './helpers/logger';
import initRoutes from "./routes";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 3000;

initDbConnection();

app.use(express.json());
app.use(cors());
app.use(logger);

initRoutes(app);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

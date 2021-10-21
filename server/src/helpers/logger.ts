import * as expressWinston from 'express-winston';
import * as winston from 'winston';

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    // winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
  meta: false,
};

const logger = expressWinston.logger(loggerOptions);
const errorLogger = expressWinston.errorLogger(loggerOptions);

export { logger, errorLogger };

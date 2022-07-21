import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { LOGGER } from './logs/index.js';

dotenv.config();

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Running server
const PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
  LOGGER.info('Serve running at %s', PORT);
});

import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import uploadConfig from '@config/uploads';
import serveDiscordBot from '@botShared/http/server';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/files', express.static(uploadConfig.directory));
app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: error.message,
    });
  },
);

app.listen(8080, async () => {
  console.log('Listening on http://localhost:8080');

  await serveDiscordBot().catch(() => console.log('stopping Discord bot...'));
});
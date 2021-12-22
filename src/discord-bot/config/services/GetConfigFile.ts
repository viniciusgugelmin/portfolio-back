import { readFile } from 'fs/promises';
import path from 'path';
import AppError from 'shared/errors/AppErorr';

export default async (): Promise<unknown> => {
  try {
    const file = await readFile(
      path.resolve(__dirname, '..', '..', 'config.json'),
    );

    // @ts-ignore
    return JSON.parse(file);
  } catch (error) {
    new AppError(`Error trying to read config.json - ${error}`);
    return null;
  }
};

import { readFile } from 'fs/promises';
import path from 'path';
import AppErrorBot from '@botShared/errors/AppErrorBot';

export default async (): Promise<unknown> => {
  try {
    const file = await readFile(
      path.resolve(__dirname, '..', '..', 'config.json'),
    );

    // @ts-ignore
    return JSON.parse(file);
  } catch (error) {
    new AppErrorBot(`Error trying to read config.json - ${error}`);
    return null;
  }
};

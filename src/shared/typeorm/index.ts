import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('database connection established'))
  .catch(error => console.log('database connection failed', error));

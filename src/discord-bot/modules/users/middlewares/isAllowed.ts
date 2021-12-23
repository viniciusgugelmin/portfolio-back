import { BOT_TOKEN, BOT_NAME, PREFIX, ROOT_PASSWORD } from '@bot/config.json';

export default (): boolean => {
  return !(!BOT_TOKEN || !BOT_NAME || !PREFIX || !ROOT_PASSWORD);
};

import { BOT_TOKEN, BOT_NAME, PREFIX } from '@bot/config.json';

export default (): boolean => {
  return !(!BOT_TOKEN || !BOT_NAME || !PREFIX);
};

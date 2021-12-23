export default (message: string): string => {
  return message.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

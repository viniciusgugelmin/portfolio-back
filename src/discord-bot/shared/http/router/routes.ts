import Router from '@botShared/http/router/Router';
import UserController from '@botModules/users/controllers/UserController';

export default (): void => {
  Router.make('/create-user', UserController.post);
};

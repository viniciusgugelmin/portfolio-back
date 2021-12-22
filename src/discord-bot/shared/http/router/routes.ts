import Router from '@botShared/http/router/Router';
import TestController from '@botModules/test/controllers/TestController';

export default (): void => {
  Router.make('teste', TestController.get);
};

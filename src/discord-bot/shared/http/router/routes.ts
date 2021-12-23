import Router from '@botShared/http/router/Router';
import routes from '@botAssets/routes';

export default (): void => {
  for (const route of routes()) {
    Router.make(route[0], route[1]);
  }
};

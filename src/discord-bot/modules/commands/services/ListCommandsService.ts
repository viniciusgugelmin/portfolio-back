import routes from '@botAssets/routes';

export default class ListCommandsService {
  public execute(): Array<Array<any>> {
    return routes().map(route => [route[0], route[2]]);
  }
}

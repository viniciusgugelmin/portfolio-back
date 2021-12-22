import JsonResourceCollection from '@botResources/JsonResourceCollection';

export default class TestResource extends JsonResourceCollection {
  toObject(entity: object): object {
    return entity;
  }
}

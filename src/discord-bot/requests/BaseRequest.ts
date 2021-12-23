import IBaseRequest from '@bot/requests/interfaces/IBaseRequest';

export default abstract class BaseRequest {
  readonly method: string;
  readonly data: any;

  constructor(method: string, data: any) {
    this.method = method;
    this.data = data;
  }

  validate(): IBaseRequest {
    switch (this.method) {
      case 'GET':
        return this.getValidations(this.data);
      case 'PUT':
        return this.putValidations(this.data);
      case 'POST':
        return this.postValidations(this.data);
      case 'DELETE':
        return this.deleteValidations(this.data);
    }

    return {
      statusOkay: false,
    };
  }

  protected abstract getValidations(data: any): IBaseRequest;

  protected abstract putValidations(data: any): IBaseRequest;

  protected abstract postValidations(data: any): IBaseRequest;

  protected abstract deleteValidations(data: any): IBaseRequest;
}

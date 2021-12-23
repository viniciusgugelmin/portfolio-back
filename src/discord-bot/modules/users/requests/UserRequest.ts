import BaseRequest from '@bot/requests/BaseRequest';
import IBaseRequest from '@bot/requests/interfaces/IBaseRequest';
import CreateRequestResponse from '@bot/requests/services/CreateRequestResponse';
import IRequestError from '@bot/requests/interfaces/IRequestError';
import validator from 'validator';

export default class UserRequest extends BaseRequest {
  protected getValidations(data: any): IBaseRequest {
    const response = new CreateRequestResponse();

    return response;
  }

  protected putValidations(data: any): IBaseRequest {
    const response = new CreateRequestResponse();

    return response;
  }

  protected postValidations(data: any): IBaseRequest {
    const response = new CreateRequestResponse();

    if (data.length !== 5) {
      const error: IRequestError = {
        message:
          '5 params are required [name, lastname, email, password, rootPassword]',
      };
      response.createError(error);
      return response;
    }

    if (data[0].length < 2 || data[0].length > 100) {
      const error: IRequestError = {
        field: 'name',
        message: 'Field must have 2-100 characters',
      };
      response.createError(error);
    }

    if (data[1].length < 2 || data[1].length > 100) {
      const error: IRequestError = {
        field: 'lastname',
        message: 'Field must have 2-100 characters',
      };
      response.createError(error);
    }

    if (!validator.isEmail(data[2])) {
      const error: IRequestError = {
        field: 'email',
        message: 'Field must be a valid email',
      };
      response.createError(error);
    }

    if (data[3].length < 4) {
      const error: IRequestError = {
        field: 'password',
        message: 'Field must be greater or equal than 4 characters',
      };
      response.createError(error);
    }

    return response;
  }

  protected deleteValidations(data: any): IBaseRequest {
    const response = new CreateRequestResponse();

    return response;
  }
}

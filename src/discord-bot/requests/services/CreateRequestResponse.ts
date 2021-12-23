import IRequestError from '@bot/requests/interfaces/IRequestError';
import IBaseRequest from '@bot/requests/interfaces/IBaseRequest';

export default class CreateRequestResponse implements IBaseRequest {
  statusOkay = true;
  errors: IRequestError[] | [] = [];

  createError({ field, message }: IRequestError) {
    this.statusOkay = false;
    const error = { message, field };
    // @ts-ignore
    this.errors.push(error);
  }
}

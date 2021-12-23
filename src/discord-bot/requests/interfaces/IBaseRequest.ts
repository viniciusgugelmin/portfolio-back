import IRequestError from '@bot/requests/interfaces/IRequestError';

export default interface IBaseRequest {
  statusOkay: boolean;
  errors?: IRequestError[] | [];
}

import BaseRequest from '@bot/requests/BaseRequest';
import IBaseRequest from '@bot/requests/IBaseRequest';

export default class UserRequest extends BaseRequest {
  protected getValidations(data: any): IBaseRequest {
    return {
      statusOkay: true,
    };
  }

  protected putValidations(data: any): IBaseRequest {
    return {
      statusOkay: true,
    };
  }

  protected postValidations(data: any): IBaseRequest {
    return {
      statusOkay: true,
    };
  }

  protected deleteValidations(data: any): IBaseRequest {
    return {
      statusOkay: true,
    };
  }
}

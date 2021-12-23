interface IError {
  error: {
    field: string;
    message: string;
  };
}

export default interface IBaseRequest {
  statusOkay: boolean;
  errors?: IError[];
}

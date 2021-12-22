export default class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;

    this.showError();
  }

  showError() {
    console.log({
      message: this.message,
      statusCode: this.statusCode,
    });
  }
}

import AppError from '@shared/errors/AppError';

export default class AppErrorBot extends AppError {
  constructor(message: string, statusCode = 400) {
    super(message, statusCode);
    this.showError();
  }

  showError() {
    console.log({
      message: this.message,
      statusCode: this.statusCode,
    });
  }
}

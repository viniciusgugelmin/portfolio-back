import IRequestError from '@bot/requests/interfaces/IRequestError';
import { errors } from 'celebrate';

interface IDiscordMessage {
  content: string;
  code: string;
}

export default class Response {
  content: string | object;
  formatedContent: string;
  discordMessage: IDiscordMessage = {
    content: '',
    code: '',
  };

  constructor(content: string | object) {
    this.content = content;
    this.formatedContent = '';
  }

  resolve() {
    this.formatedContent =
      typeof this.content === 'object'
        ? this.toJsonString(this.content)
        : (this.content as string);

    this.discordMessage.content = this.formatedContent;

    return this.discordMessage;
  }

  protected toJsonString(content: object): string {
    const contentToStringify = this.manageObjectContent(content);
    return JSON.stringify(contentToStringify, null, 2);
  }

  private manageObjectContent(content: object): object | IRequestError[] {
    // @ts-ignore
    if ('validation' in content && 'errors' in content.validation) {
      return this.getValitionResponse(content);
    }

    return content;
  }

  private getValitionResponse(content: object): IRequestError[] {
    const errors: IRequestError[] = [];
    // @ts-ignore
    for (const error of content.validation.errors) {
      errors.push(error);
    }

    return errors;
  }
}

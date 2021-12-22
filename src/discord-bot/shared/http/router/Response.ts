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
    return JSON.stringify(content, null, 2);
  }
}

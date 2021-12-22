import Response from '@botShared/http/router/Response';

declare namespace Discord {
  export interface Command {
    command: string;
    params: string[] | [];
  }
}

type Handler = (command: Command) => Promise<Response> | Response;

import { IUser } from "../models/user";

export interface IHttResponse {
  statusCode: number;
  body: IUser[] | IUser | string;
}

export interface IHttRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface IControlers {
  hendle(req: IHttRequest<unknown>): Promise<IHttResponse>;
}

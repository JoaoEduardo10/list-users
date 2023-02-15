import { IUser } from "../../models/user";

export interface IUpdateUserParams {
  name: string;
  password: string;
}

export interface IUpdateUserRepository {
  update(id: string, params: IUpdateUserParams): Promise<IUser>;
}

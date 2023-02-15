import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user/protocols";
import { User } from "../../models/moongo-models/User";
import { IUser } from "../../models/user";
import { CreateBcrypt } from "../../shared/createBcryptjs";

export class CreateUserRepository implements ICreateUserRepository {
  async create(params: ICreateUserParams): Promise<IUser> {
    const { email, name, password } = params;

    const user = await User.create({
      email,
      name,
      password: await CreateBcrypt(password, 12),
    });

    if (!user) throw new Error("Usuario não criado!");

    const { _id } = user;

    return {
      id: _id.toHexString(),
      name: user.name,
      password: user.password,
      email: user.email,
    };
  }
}

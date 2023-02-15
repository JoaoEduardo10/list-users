import {
  IUpdateUserParams,
  IUpdateUserRepository,
} from "../../controllers/update-user/protocols";
import { User } from "../../models/moongo-models/User";
import { IUser } from "../../models/user";

export class UpdateUserRepository implements IUpdateUserRepository {
  async update(id: string, params: IUpdateUserParams): Promise<IUser> {
    const user = await User.findByIdAndUpdate(id, params);

    if (!user) throw new Error("Usuario não encontrado!");

    const { name, _id, email, password } = user;

    return {
      id: _id.toHexString(),
      name,
      email,
      password,
    };
  }
}

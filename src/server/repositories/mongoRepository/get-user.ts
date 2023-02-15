import { IGetAllUserRepository } from "../../controllers/get-user/protocols";
import { User } from "../../models/moongo-models/User";
import { IUser } from "../../models/user";

export class GetAllUserRepository implements IGetAllUserRepository {
  async getAll(): Promise<IUser[]> {
    const user = await User.find();

    return user.map(({ _id, password, name, email }) => ({
      id: _id.toHexString(),
      password,
      name,
      email,
    }));
  }
}

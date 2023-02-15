import { IDeleteUserRepository } from "../../controllers/delete-user/protocols";
import { User } from "../../models/moongo-models/User";
import { IUser } from "../../models/user";

export class DeleteUserRepository implements IDeleteUserRepository {
  async delete(id: string): Promise<IUser> {
    const user = await User.findByIdAndDelete(id);

    if (!user) throw new Error("User não deletedo");

    const { password, name, _id, email } = user;

    return {
      id: _id.toHexString(),
      name: name,
      email: email,
      password: password,
    };
  }
}

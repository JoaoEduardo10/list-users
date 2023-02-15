import { hash } from "bcryptjs";

export const CreateBcrypt = async (password: string, senhaNumeros: number) => {
  const isNewPassowrd = await hash(password, senhaNumeros);

  return isNewPassowrd;
};

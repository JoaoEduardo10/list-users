import { model, Schema } from "mongoose";
import { IUser } from "../user";

const User = model(
  "User",
  new Schema<Omit<IUser, "id">>({
    name: {
      type: String,
      required: true,
      min: 3,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  })
);

export { User };

import mongoose from "mongoose";

export const MongoDb = {
  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL as string;
    const username = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;

    mongoose.set("strictQuery", false);

    await mongoose.connect(url, { auth: { password, username } }, (error) => {
      if (error) return console.log(`Error: ${error.message}`);

      console.log(`connectado ao banco de dados`);
    });
  },
};

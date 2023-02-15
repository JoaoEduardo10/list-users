import "dotenv/config";
import { MongoDb } from "./server/dataBase/mongoDb";

import { app } from "./server/server";

// connectado ao banco de dados
MongoDb.connect()
  .then(() => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`servido iniciado na porta ${PORT}`));
  })
  .catch((error) => console.error(`error: ${error}`));

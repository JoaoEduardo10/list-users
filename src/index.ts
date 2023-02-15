import "dotenv/config";

import { app } from "./server/server";

app.listen(8000, () => console.log(`servido iniciado`));

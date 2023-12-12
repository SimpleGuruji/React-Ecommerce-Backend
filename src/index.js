import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import { dbConnection } from "./db/connection.js";
import { app } from "./app.js";

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log(`app is listening on port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Express server connection failed !!", error);
  });

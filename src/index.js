import dotenv from 'dotenv';
import { app } from './app.js';

import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
  app.listen(process.env.PORT , (req, res) => {
    console.log(`Server is running at port ${process.env.PORT}`)
  })
})
.catch((error) => {
console.log('Mongodb connection failed !!!', error)
})




















/*

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
})();


*/
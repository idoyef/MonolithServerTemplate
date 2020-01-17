import { initApp } from "./app";
import { MongooseDb } from "./common/mongo/mongooseDb";

const dbUrl = 'mongodb://localhost:27017';

const connectDB = async () => {
  new MongooseDb(dbUrl).connect();
}

const disconnectDB = async () => {
  new MongooseDb(dbUrl).disconnect();
}

connectDB();
const app = initApp();

const server = app.listen(5000, () => {
  console.log("Server is listening on port: 5000");
});


const closeServer = async () => {
  await disconnectDB()
  await server.close();
}

process.on('SIGINT', () => closeServer())
process.on('SIGTERM', () => closeServer())

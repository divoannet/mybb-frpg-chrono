import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv'
dotenv.config();

const dbPath = process.env.DB_PATH;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;

const url = `mongodb://${dbUser}:${dbPassword}@${dbPath}:${dbPort}`;

const connectDB = async () => {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('DB connected');

    const db = client.db(dbName);

  } catch (e) {
    console.log('DB connection error', e);
  } finally {
    await client.close();
    console.log('DB disconnected');
  }
};

export default connectDB;

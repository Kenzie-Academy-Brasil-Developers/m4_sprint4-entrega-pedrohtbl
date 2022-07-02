import { Client } from "pg";
//import 'dotenv/config'

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "pedro",
        host: "localhost",
        database: "teste_database",
        password: "pedro123",
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log('database running')
};

export default database;

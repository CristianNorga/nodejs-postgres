const { Client } = require('pg');
require('dotenv').config();

async function getConnection(){
  const client = new Client({
    host: process.env.INSTANCE_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  await client.connect();

  return client;
}

module.exports = getConnection;




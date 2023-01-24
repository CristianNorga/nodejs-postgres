require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbHost: process.env.POSTGRES_HOST,
  dbPort: process.env.POSTGRES_PORT,
  dbUser: process.env.POSTGRES_USER,
  dbPass: process.env.POSTGRES_PASS,
  dbName: process.env.POSTGRES_NAME,
};

module.exports = { config };

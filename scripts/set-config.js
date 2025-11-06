require('dotenv').config();
const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const { NODE_ENV, DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;
const configPath = join(__dirname, '../database/config.json');
const config = readFileSync(configPath);
const configJson = JSON.parse(config.toString());

if (configJson[NODE_ENV]) {
  configJson[NODE_ENV] = {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  };
  console.log('Writing config: ', configJson[NODE_ENV]);
}
writeFileSync(configPath, JSON.stringify(configJson, null, 2));

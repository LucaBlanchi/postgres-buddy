const { Client } = require('pg');
const dbConfig = require('../dbConfig');

const client = new Client(dbConfig);

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;

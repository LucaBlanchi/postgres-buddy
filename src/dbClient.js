const { Client } = require('pg');
const createSubscriber = require('pg-listen').default;
const dbConfig = require('../dbConfig');

const connectionString = `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

const client = new Client(dbConfig);
const subscriber = createSubscriber({ connectionString });

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

subscriber.connect()
  .then(() => console.log("Connected to PostgreSQL for notifications"))
  .catch(err => console.error('Subscriber connection error', err.stack));

subscriber.events.on("error", (error) => {
  console.error("Error:", error);
});

module.exports = {
  client,
  subscriber,
};

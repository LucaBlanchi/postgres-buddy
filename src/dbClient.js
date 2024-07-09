const { Client } = require('pg');
const createSubscriber = require('pg-listen').default;
const dbConfig = require('../dbConfig');
const channels = require('./notificationHandler');

const connectionString = `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

const client = new Client(dbConfig);
const subscriber = createSubscriber({ connectionString });

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

subscriber.connect().then(() => {
  console.log("Connected to PostgreSQL for notifications");

  channels.forEach(channel => {
    subscriber.listenTo(channel.name);
    console.log(`Listening to ${channel.name} for notifications`);

    subscriber.notifications.on(channel.name, channel.callback);
  });
});

subscriber.events.on("error", (error) => {
  console.error("Error:", error);
});

module.exports = {
  client,
  subscriber,
};

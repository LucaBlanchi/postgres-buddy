const { executeAndLogQuery } = require('./queryExecutor');
const { subscriber } = require('./dbClient');

const channels = [
  // {
  //   name: 'my-channel',
  //   callback: (payload) => {
  //     console.log("Received notification in 'my-channel':", payload);
  //     executeAndLogQuery('SELECT NOW()');
  //   }
  // }
];

channels.forEach(channel => {
  subscriber.listenTo(channel.name);
  console.log(`Listening to ${channel.name} for notifications`);

  subscriber.notifications.on(channel.name, channel.callback);
});

module.exports = channels;

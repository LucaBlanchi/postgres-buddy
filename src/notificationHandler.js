const { client } = require('./dbClient');

/*
 * Add { name: 'channel-to-listen-name', callback: (payload) => { ... } } objects to the array below
 * to listen and react to notifications from PostgreSQL.
 *
 * For example:
 * {
 *   name: 'my-channel',
 *   callback: (payload) => {
 *     console.log("Received notification in 'my-channel':", payload);
 *   }
 */

const channels = [
  // { name: 'channel-to-listen-name', callback: (payload) => { ... } }
];

module.exports = channels;

const channels = [
  {
    name: 'my-channel',
    callback: (payload) => {
      console.log("Received notification in 'my-channel':", payload);
    }
  }
];

module.exports = channels;

const client = require('./dbClient');
const cron = require('node-cron');
const schedule = require('node-schedule');


// Runs every given interval
cron.schedule('*/30 * * * * *', () => {
  // add your code here
});

// Runs at a specific time
const job = schedule.scheduleJob('55 10 * * *', () => {
  // add your code here
});

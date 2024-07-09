const { executeAndLogQuery } = require('./queryExecutor');
const cron = require('node-cron');
const schedule = require('node-schedule');

// cron.schedule('* * * * * *', async () => {
//   console.log('Running a task every second');
//   await executeAndLogQuery('SELECT NOW()');
// });

// schedule.scheduleJob('0 0 0 * * *', async () => {
//    console.log('Running a task every midnight');
//    await executeAndLogQuery('SELECT NOW()');
// });

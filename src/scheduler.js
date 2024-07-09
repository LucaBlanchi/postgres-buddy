const { client } = require('./dbClient');
const cron = require('node-cron');
const schedule = require('node-schedule');

/*
 * Include scheduled tasks here, using cron.schedule or schedule.scheduleJob
 *
 * Examples:
 *
 * cron.schedule('* * * * * *', () => {
 *   console.log('Running a task every second');
 * });
 *
 * schedule.scheduleJob('30 * * * *', () => {
 *   console.log('Running a task every hour at the 30th minute');
 * });
 */

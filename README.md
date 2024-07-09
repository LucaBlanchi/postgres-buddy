# postgres-buddy
A simple Node.js service that enhances PostgreSQL functionality, introducing scheduling and reactivity to notifications.

## Configuration
To connect to your PostgreSQL database, add a dbConfig.js file to the root of the project with the following content:
```javascript
const dbConfig = {
  user: 'your-username',
  host: 'your-hostname',
  database: 'your-database-name',
  password: 'your-password',
  port: 'your-port (default: 5432)',
};
```

## queryExecutor.js
This file contains the logic for executing queries on the database. Out of the box, it
exports the executeAndLogQuery function, which can be used to run queries and log the results.

## Schedule a task
To schedule a task to run at a certain time or at any given interval, add a new task in the scheduler.js file,
following the examples. You can use the functions exported by queryExecutor.js file to execute queries.

## React to notifications
To react to notifications, add a new listener in the channels constant in notificationHandler.js file, following the examples.
You can use the functions exported by queryExecutor.js file to execute queries.

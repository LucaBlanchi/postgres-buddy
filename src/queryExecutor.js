const { client } = require('./dbClient');

async function executeAndLogQuery(query, params) {
  try {
    console.log('Executing query:', query);
    const res = await client.query(query, params);
    console.log('Query executed successfully:', res, '\n');
    return res;
  } catch (err) {
    console.error('Error executing query:', err.stack, '\n');
  }
}

module.exports = {
  executeAndLogQuery,
};

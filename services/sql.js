const { Client } = require('pg');

const client = new Client({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  database : process.env.RDS_DB_NAME,
  port     : process.env.RDS_PORT
});
client.connect();

module.exports = {
  prepped: async (stmt, params) => {
    return await client.query(stmt, params);
  }
};


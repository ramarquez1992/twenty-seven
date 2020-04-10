const {Pool} = require('pg');

const pool = new Pool({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port: process.env.RDS_PORT
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle PG client', err);
});

module.exports = {
  prepped: async (stmt, params = []) => {
    const client = await pool.connect();

    let res;

    try {
      res = await client.query(stmt, params);
    } catch (err) {
      console.error(err);
    } finally {
      client.release();
    }

    return res ? res.rows : [];
  }
};


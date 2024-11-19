const dotenv = require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
})
const updateRateLimitToZero = (request, response) => {
    //Get Client IP
    const key = parseInt(request.params.id)
   // Search for The IP on The DATABASE and reset The count to 0
  pool.query('UPDATE rate_limit.records_aggregated SET count=0 WHERE key= key ', (error, results) => {
    if (error) {
      throw error
    }
  });
}


module.exports = {
    updateRateLimitToZero,
}
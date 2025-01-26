const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',        // Your MySQL host (e.g., localhost or cloud database)
  user: 'root',             // Your MySQL username
  password: 'Athira2004@', // Your MySQL password
  database: 'ecoswap',     // The database name you're working with
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool to use it in other files
module.exports = pool.promise();

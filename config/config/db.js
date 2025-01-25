const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost", // MySQL host
  user: "root",      // MySQL username
  password: "Athira2004@", // MySQL password
  database: "ecoswap", // Replace 'project' with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1);
  }
  console.log("Connected to the MySQL database!");
});

module.exports = db;

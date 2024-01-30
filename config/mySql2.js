const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "form",
  password: "",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;

const { Pool } = require("pg");

const pool = new Pool({
  user: "hamza.ansari", // Usually your macOS username
  host: "localhost",
  database: "todo_app",
  password: "", // Or leave blank if you didn't set one
  port: 5432,
});

module.exports = pool;

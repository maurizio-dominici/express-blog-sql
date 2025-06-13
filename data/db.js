const mysql = require("mysql2");

// const password = import.meta.env.VITE_PASSWORD_SQL;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "posts",
  port: "3306",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("db connection ok");
});

module.exports = connection;

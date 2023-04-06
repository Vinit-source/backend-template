const mysql = require('mysql');

// MySQL connection config
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '<your-MySQL-password>', // 123456 ?
  database: '<your-database-name>'
});

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// require('database') in any other file will load `connection` variable into that file.
module.exports = connection;


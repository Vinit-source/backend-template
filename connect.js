const mysql = require('mysql');

// MySQL connection config
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '<you-password>',
    database: '<your-project-database-name>'
  });
  
  // Connect to database
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
  });

  module.exports = connection;
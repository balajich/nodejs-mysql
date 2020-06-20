var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "alex",
  password: "alexpass"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query('show databases', function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
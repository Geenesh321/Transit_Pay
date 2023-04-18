const mysql = require('mysql2');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "myusername",
//   password: "mypassword"
// });

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"transit_pay"

})
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;


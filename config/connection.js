/*
* Inside the `connection.js` file, setup the code to connect Node to MySQL.

* Export the connection.
*/

var mysq = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "roog",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err) {
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
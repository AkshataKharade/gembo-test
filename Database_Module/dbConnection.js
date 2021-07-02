const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password@123",
    database: "gembo_test",
});

connection.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("CONNECTION ESTABLISHED");
    }
})
module.exports = connection;
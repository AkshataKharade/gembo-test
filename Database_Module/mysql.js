var dbConnectionObj = require("./dbConnection");
var dbTablesObj = {
    createDatabase: () => {
        //CREATE user TABLE
        dbConnectionObj.query("CREATE TABLE IF NOT EXISTS user("
         +" user_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,"
         +" user_name VARCHAR(200),"
         +" password VARCHAR(200),"
         +" status TINYINT NOT NULL DEFAULT 1)");
        //CREATE message TABLE
        dbConnectionObj.query("CREATE TABLE IF NOT EXISTS message("
         +" message_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,"
         +" message TEXT,"
         +" user_id INTEGER,"
         +" status TINYINT NOT NULL DEFAULT 1,"
         +" FOREIGN KEY (user_id) REFERENCES user(user_id))");
    }
}

module.exports = dbTablesObj;
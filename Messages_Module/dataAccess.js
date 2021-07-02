var mysqlObj = require("./../Database_Module/dbConnection");

var dataAccess = {
    insertMsg: (userObj) => {
        let sql = "INSERT INTO message (message, user_id) VALUES (?,?)"
        mysqlObj.query(sql, [message.message, message.user_id], function(err, result, feilds) {
            if (err) {
                throw err;
            } else {
                //COULD ADD PROMISES IF REQUIRED
                return;
            }
        });
    },
    getMessages: (userObj) => {
        let sql = "SELECT * FROM messages ORDER BY message_id DESC"
        mysqlObj.query(sql, function(err, result, feilds) {
            if (err) {
                throw err;
            } else {
                //COULD ADD PROMISES IF REQUIRED
                return;
            }
        });
    }
}
module.exports = dataAccess;
var mysqlObj = require("./../Database_Module/dbConnection");

var dataAccess = {
    checkCredentials: (userObj) => {
        let sql = "SELECT * FROM user WHERE user_name = ?  AND password = ?";
        mysqlObj.query(sql, [userObj.username, userObj.password], function(err, result, feilds) {
            if (err) {
                throw err;
            } else {
                let respMsg = "";
                if (result.length > 0) {
                    respMsg = "Success";
                } else {
                    respMsg = "Authentication Failed";
                }
                //COULD ADD PROMISES IF REQUIRED
                return(respMsg);
            }
        });
    },
    addUser: (userObj) => {
        let sql = "INSERT INTO user (user_name, password) VALUES (?,?)"
        mysqlObj.query(sql, [userObj.username, userObj.userpassword], function(err, result, feilds) {
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
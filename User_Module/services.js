var dataAccessObj = require("./dataAccess");
var services = {
    login: (req, res) => {
        let userObj = req.body.userObj;
        let dbresp = dataAccessObj.addUser(userObj);
        return(dbresp);
    },
    addUser: (req, res) => {
        let userObj = req.body.userObj;
        let dbresp = dataAccessObj.addUser(userObj);
        return(dbresp);
    }
}

module.exports = services;
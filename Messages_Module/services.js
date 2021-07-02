var dataAccessObj = require("./dataAccess");

var services = {
    insertMessage: (req, res) => {
        let msgObj = req.body.userObj;
        let dbresp = dataAccessObj.insertMessage(msgObj);
        return(dbresp);
    },
    getMessages: () => {
        let dbresp = dataAccessObj.getMessages(msgObj);
        return(dbresp);
    },
    
}

module.exports = services;
const { getAllContacts } = require("../client/contactClient")

const getAllContactsService = function() {
    // Return Data
    return getAllContacts();
}

exports.getAllContactsService = getAllContactsService;
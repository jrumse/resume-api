const Contact = require("../model/Contact");

const getAllContacts = function() {
    // Return Content
    let contacts;

    try {
        // GET
        contacts = Contact.find();
    } catch(err) {
        // Error with the GET
        return err;
    }

    // Return Data
    return contacts;
}

exports.getAllContacts = getAllContacts;
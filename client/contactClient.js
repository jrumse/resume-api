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

const postContact = async(contact) => {

    let sav = await contact.save()
        .then((contact) => {
            return contact;
        })
        .catch((err) => {
            return err;
        });

    return sav;
}

exports.postContact = postContact;
exports.getAllContacts = getAllContacts;
const { postContact } = require("../client/contactClient");
const Contact = require("../model/Contact");

const parseContact = function(req) {
    // Return Parsed Request Body
    return new Contact(req.body);
}

const postContactService = function(contact) {
    // Call Post and Return Response
    return postContact(contact);
}

exports.parseContact = parseContact;
exports.postContactService = postContactService;
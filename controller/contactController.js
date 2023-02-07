const { postContactService, parseContact } = require("../service/contactService");

const postContactController = async(req, res, next) => {
    // Contact
    let contact;

    // Parse
    contact = parseContact(req);

    // Post
    let resp = await postContactService(contact, res);

    // Response Handling (Also handles POST Validation)
    if (resp instanceof Error) {
        return res.status(400).json({code: '400', error: resp});
    }

    // Error with the return data
    if (!resp) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    return res.status(200).json({code: '200', message: 'Successfully Posted New Contact Receipt', contact: resp});
}

exports.postContactController = postContactController;
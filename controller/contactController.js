const { getAllContactsService } = require("../service/contactService");

const getAllContactsController = async(req, res, next) => {
    // Return Object
    let contacts;

    // call service
    contacts = await getAllContactsService();

    // Error with the content
    if (contacts instanceof Error) {
        return next(contacts);
    }

    // Error with the return data
    if (!contacts) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    return res.status(200).json(contacts);
};

exports.getAllContactsController = getAllContactsController;
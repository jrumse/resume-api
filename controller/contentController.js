const Content = require("../model/Content");

const getAllContent = async(req, res, next) => {
    let content;
    try {
        // GET
        content = await Content.find();
    } catch(err) {
        // Error with the GET
        return next(err);
    }

    // Error with the return data
    if (!content) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    return res.status(200).json(content);
};

exports.getAllContent = getAllContent;
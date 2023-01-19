const Content = require("../model/Content");

const getAllContent = function() {
    // Return Object
    let content;

    try {
        // GET
        content = Content.find();
    } catch(err) {
        // Error with the GET
        return err;
    }

    // Return Data
    return content;
};

exports.getAllContent = getAllContent;
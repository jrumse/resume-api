const { getAllContent } = require("../client/contentClient");

const getAllContentService = function() {
    // Return Data
    return getAllContent();
};

exports.getAllContentService = getAllContentService
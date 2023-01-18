const { getPostsByCategory } = require("../client/postClient");

const getPostsByCategoryService = function(category) {
    // Return Data
    return getPostsByCategory(category);
};

exports.getPostsByCategoryService = getPostsByCategoryService
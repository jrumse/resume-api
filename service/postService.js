const { getPostsByCategoryWithContent, getPostsByCategory } = require("../client/postClient");

const getPostsByCategoryWithContentService = function(category) {
    // Return Data
    return getPostsByCategoryWithContent(category);
};

const getPostsByCategoryService = function(category) {
    // Return Data
    return getPostsByCategory(category);
}

exports.getPostsByCategoryService = getPostsByCategoryService;
exports.getPostsByCategoryWithContentService = getPostsByCategoryWithContentService;
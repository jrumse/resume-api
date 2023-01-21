const { getAllPosts, getPostsByCategoryWithContent, getPostsByCategory } = require("../client/postClient");

const getAllPostsService = function() {
    // Return Data
    return getAllPosts();
}

const getPostsByCategoryWithContentService = function(category) {
    // Return Data
    return getPostsByCategoryWithContent(category);
};

const getPostsByCategoryService = function(category) {
    // Return Data
    return getPostsByCategory(category);
}

exports.getAllPostsService = getAllPostsService;
exports.getPostsByCategoryService = getPostsByCategoryService;
exports.getPostsByCategoryWithContentService = getPostsByCategoryWithContentService;
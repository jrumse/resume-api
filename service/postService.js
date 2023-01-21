const { getAllPosts, getPostsByCategoryWithContent, getPostsByCategory, getAllPostsWithContent } = require("../client/postClient");

const getAllPostsService = function() {
    // Return Data
    return getAllPosts();
}

const getAllPostsWithContentService = function() {
    // Return Data
    return getAllPostsWithContent();
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
exports.getAllPostsWithContentService = getAllPostsWithContentService;
exports.getPostsByCategoryService = getPostsByCategoryService;
exports.getPostsByCategoryWithContentService = getPostsByCategoryWithContentService;
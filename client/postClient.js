const Post = require("../model/Post");

const getPostsByCategory = function(category) {

    // Need to work in the aggregate here
    try {
        // GET
        posts = Post.find({ category: category })
    } catch(err) {
        // Error with the GET
        return err;
    }

    // Return Data
    return posts;
};

exports.getPostsByCategory = getPostsByCategory
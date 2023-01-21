const Post = require("../model/Post");
const AggregateBuilder = require("../tools/aggregateBuilder")


const getAllPosts = function() {
    // Return object
    let posts;

    try {
        // GET
        posts = Post.find();
    } catch(err) {
        // Error with the GET
        return err;
    }

    // Return Data
    return posts;
};


const getAllPostsWithContent = function() {
    // Build Aggregate
    let pipeline = [];
    pipeline.push(AggregateBuilder.lookupQuery('contents', 'content', '_id', 'content'));

    // Return object
    let posts;

    try {
        // GET
        posts = Post.aggregate(pipeline);
    } catch(err) {
        // Error with the GET
        return err;
    }

    // Return Data
    return posts;
};


const getPostsByCategoryWithContent = function(category) {
    // Build Aggregate
    let pipeline = [];
    pipeline.push(AggregateBuilder.matchQuery('category', category));
    pipeline.push(AggregateBuilder.lookupQuery('contents', 'content', '_id', 'content'));

    // Return object
    let posts;

    try {
        // GET
        posts = Post.aggregate(pipeline);
    } catch(err) {
        // Error with the GET
        return err;
    }

    // Return Data
    return posts;
};


const getPostsByCategory = function(category) {
    // Return object
    let posts;

    try {
        // GET
        posts = Post.find({category: category});
    } catch(err) {
        // Error with the GET
        return err;
    }

    // Return Data
    return posts;
};

exports.getAllPosts = getAllPosts;
exports.getAllPostsWithContent = getAllPostsWithContent;
exports.getPostsByCategory = getPostsByCategory;
exports.getPostsByCategoryWithContent = getPostsByCategoryWithContent;
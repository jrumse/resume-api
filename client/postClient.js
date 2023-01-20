const Post = require("../model/Post");
const AggregateBuilder = require("../tools/aggregateBuilder")


const getPostsByCategory = function(category) {
    // Build Aggregate (into its own function)
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

exports.getPostsByCategory = getPostsByCategory
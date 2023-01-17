const Post = require("../model/Post");

const getPostsByCategory = async(req, res, next) => {
    // Route Params
    const category = req.params.category
    // Return object
    let posts;

    try {
        // GET
        posts = await Post.find({ category: category })
    } catch(err) {
        // Error with the GET
        return next(err);
    }

    // Error with the return data
    if (!posts) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    return res.status(200).json(posts);
};

exports.getPostsByCategory = getPostsByCategory
const { getPostsByCategoryWithContentService, getPostsByCategoryService } = require("../service/postService");

const getPostsByCategoryController = async(req, res, next) => {
    // Route Params
    const category = req.params.category;
    const contentQuery = req.query.content;

    // Return object
    let posts;

    // Call Service ?content=true
    if (contentQuery) {
        posts = await getPostsByCategoryWithContentService(category);
    }
    // Call Service No Query
    else {
        posts = await getPostsByCategoryService(category);
    }

    // Error with the post
    if (posts instanceof Error) {
        return next(posts);
    }

    // Error with the return data
    if (!posts) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    return res.status(200).json(posts);
};

exports.getPostsByCategoryController = getPostsByCategoryController;
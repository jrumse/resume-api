const { getAllPostsService, getPostsByCategoryWithContentService, getPostsByCategoryService, getAllPostsWithContentService } = require("../service/postService");

// All Posts
const getAllPostsController = async(req, res, next) => {
    // Query Parameters
    const contentQuery = req.query.content;

    // Return Object
    let resp;

    // Call Service Content Query
    if (contentQuery) {
        resp = await getAllPostsWithContentService();
    }
    // Call Service No Query
    else {
        resp = await getAllPostsService();
    }

    // Error with the post
    if (resp instanceof Error) {
        return res.status(400).json({code: '400', error: resp});
    }

    // Error with the return data
    if (!resp) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    return res.status(200).json(resp);
}

const getPostsByCategoryController = async(req, res, next) => {
    // Route Params
    const category = req.params.category;
    const contentQuery = req.query.content;

    // Return object
    let resp;

    // Call Service ?content=true
    if (contentQuery) {
        resp = await getPostsByCategoryWithContentService(category);
    }
    // Call Service No Query
    else {
        resp = await getPostsByCategoryService(category);
    }

    // Error with the post
    if (resp instanceof Error) {
        return res.status(400).json({code: '400', error: resp});
    }

    // Error with the return data
    if (!resp) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    return res.status(200).json(resp);
};

exports.getAllPostsController = getAllPostsController;
exports.getPostsByCategoryController = getPostsByCategoryController;
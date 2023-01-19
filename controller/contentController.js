const { getAllContentService } = require("../service/contentService");

const getAllContentController = async(req, res, next) => {
    // Return Object
    let content;
    // call service
    content = await getAllContentService();

    // Error with the content
    if (content instanceof Error) {
        return next(content);
    }

    // Error with the return data
    if (!content) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    return res.status(200).json(content);
};

exports.getAllContentController = getAllContentController;
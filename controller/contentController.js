const { getAllContentService } = require("../service/contentService");

const getAllContentController = async(req, res, next) => {
    // Return Object
    let resp;
    // call service
    resp = await getAllContentService();

    // Error with the content
    if (resp instanceof Error) {
        return res.status(400).json({code: '400', error: resp});
    }

    // Error with the return data
    if (!resp) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // Return Data
    // return res.status(200).json(resp);
    res.status(500).json({ message: "Internal Server Error" });
};

exports.getAllContentController = getAllContentController;
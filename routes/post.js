var express = require('express');
var router = express.Router();
const { getPostsByCategoryController, getAllPostsController } = require("../controller/postController");

/* GET all content */
router.get('/', getAllPostsController);
router.get('/:category', getPostsByCategoryController);

module.exports = router;
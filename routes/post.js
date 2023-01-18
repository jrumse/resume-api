var express = require('express');
var router = express.Router();
const { getPostsByCategoryController } = require("../controller/postController");

/* GET all content */
router.get('/:category', getPostsByCategoryController);

module.exports = router;
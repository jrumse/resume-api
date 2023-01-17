var express = require('express');
var router = express.Router();
const { getPostsByCategory } = require("../controller/postController");

/* GET all content */
router.get('/:category', getPostsByCategory);

module.exports = router;
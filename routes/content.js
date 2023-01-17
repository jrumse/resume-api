var express = require('express');
var router = express.Router();
const { getAllContent } = require("../controller/contentController");

/* GET all content */
router.get('/', getAllContent);

module.exports = router;
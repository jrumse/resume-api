var express = require('express');
var router = express.Router();
const { getAllContentController } = require("../controller/contentController");

/* GET all content */
router.get('/', getAllContentController);

module.exports = router;
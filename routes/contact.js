var express = require('express');
var router = express.Router();
const { getAllContactsController } = require("../controller/contactController");

/* GET all content */
router.get('/', getAllContactsController);

module.exports = router;
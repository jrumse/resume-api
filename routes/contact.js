var express = require('express');
var router = express.Router();
const { getAllContactsController, postContactController } = require("../controller/contactController");

/* GET all content */
router.get('/', getAllContactsController);
router.post('/', postContactController);

module.exports = router;
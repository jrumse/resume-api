var express = require('express');
var router = express.Router();
const { postContactController } = require("../controller/contactController");

router.post('/', postContactController);

module.exports = router;
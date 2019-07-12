const express = require('express');
const router = express.Router();
const lt_controller = require('../controllers/lt-controller');

router.post("/language", lt_controller.translate)

module.exports = router;

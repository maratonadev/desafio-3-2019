const express = require('express');
const router = express.Router();
const submit_controller = require('../controllers/submit.controller');

router.post("/submit", submit_controller.validad3)

module.exports = router;

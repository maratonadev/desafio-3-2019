const express = require('express');
const router = express.Router();
const visualR_controller = require('../controllers/visual-recognition.controller');

router.post("/callVR", visualR_controller.file_upload);

module.exports = router;

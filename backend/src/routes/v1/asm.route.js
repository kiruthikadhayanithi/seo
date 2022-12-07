const express = require('express');

const { streamController } = require('../../controllers');
const oktaAuthRequired = require('../../utils/oktaAuthRequired');

const router = express.Router();

// router.route('/event').get(streamController.asm);
router.route('/folders').get(oktaAuthRequired, streamController.folder);

module.exports = router;

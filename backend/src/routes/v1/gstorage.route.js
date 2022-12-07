const express = require('express');

const gstorage = require('../../controllers/gstorage.controller.js');

const router = express.Router();

router.route('/').post(gstorage.upload);

module.exports = router;

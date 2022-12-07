const express = require('express');

const championRouter = require('./champion.route.js');
const bannerRoute = require('./banner.route.js');
const gstorage = require('./gstorage.route.js');
const asmRouter = require('./asm.route');

const router = express.Router();

router.use('/champion', championRouter);
router.use('/banner', bannerRoute);
router.use('/upload', gstorage);
router.use('/asm', asmRouter);

module.exports = router;

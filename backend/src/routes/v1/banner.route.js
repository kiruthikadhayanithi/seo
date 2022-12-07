const express = require('express');

const { bannerController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/banner.validation');
const oktaAuthRequired = require('../../utils/oktaAuthRequired');

const router = express.Router();

router.route('/secure').get(oktaAuthRequired, validate(userValidation.findall), bannerController.findAllSecure);
router
  .route('/:id')
  .get(oktaAuthRequired, validate(userValidation.getId), bannerController.getId)
  .put(oktaAuthRequired, validate(userValidation.update), bannerController.updatebanner)
  .delete(oktaAuthRequired, validate(userValidation.getId), bannerController.drop);

router
  .route('/')
  .get(oktaAuthRequired, bannerController.findAll)
  .post(oktaAuthRequired, validate(userValidation.create), bannerController.add);

module.exports = router;

const express = require('express');

const validate = require('../../middlewares/validate.js');
const champvalidation = require('../../validations/champ.validation');
const { champController } = require('../../controllers');
const oktaAuthRequired = require('../../utils/oktaAuthRequired');

const router = express.Router();

router.route('/secure').get(oktaAuthRequired, validate(champvalidation.findall), champController.findAllSecure);

router
  .route('/')
  .post(oktaAuthRequired, validate(champvalidation.createnew), champController.create)
  .get(oktaAuthRequired, champController.findAll);

router
  .route('/:id')
  .get(oktaAuthRequired, validate(champvalidation.getId), champController.GetId)
  .delete(oktaAuthRequired, validate(champvalidation.getId), champController.drop)
  .put(oktaAuthRequired, validate(champvalidation.update), champController.UpdateById);

router.route('/slug/:slug').get(oktaAuthRequired, validate(champvalidation.getSlug), champController.GetSlug);

module.exports = router;

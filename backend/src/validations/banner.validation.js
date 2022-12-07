const Joi = require('joi');

const getId = {
  params: Joi.object().keys({
    id: Joi.number().integer(),
  }),
};

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    banner_type: Joi.number().required().valid(1, 2),
    background_image: Joi.string().required(),
    order_number: Joi.number().integer().required(),
    content: Joi.string(),
    identity_key: Joi.number().integer(),
    status: Joi.number().integer().required(),
    start_date: Joi.date().allow('', null),
    end_date: Joi.date()
      .allow('', null)
      .ruleset.greater(Joi.ref('start_date'))
      .rule({ message: 'End Date must be greater than Start Date' }),
    group: Joi.string().required(),
    dynamic_css: Joi.string(),
    endpoint_url: Joi.string().when('banner_type', { is: 2, then: Joi.required() }),
    endpoint_token: Joi.optional()
      .when('endpoint_tokentype', { is: 2, then: Joi.required() })
      .when('endpoint_tokentype', { is: 1, then: Joi.string().allow(null) }),
    endpoint_tokentype: Joi.optional().when('banner_type', { is: 2, then: Joi.required() }),
    endpoint_type: Joi.optional().when('banner_type', { is: 2, then: Joi.required() }),
    username: Joi.optional()
      .when('endpoint_tokentype', { is: 1, then: Joi.required() })
      .when('endpoint_tokentype', { is: 2, then: Joi.optional().allow(null, '') }),
    password: Joi.optional()
      .when('endpoint_tokentype', { is: 1, then: Joi.required() })
      .when('endpoint_tokentype', { is: 2, then: Joi.optional().allow(null, '') }),
  }),
};

const update = {
  params: Joi.object().keys({
    id: Joi.number().integer(),
  }),

  body: Joi.object().keys({
    name: Joi.string().required(),
    banner_type: Joi.number().required().valid(1, 2),
    background_image: Joi.string().required(),
    order_number: Joi.number().integer().required(),
    content: Joi.string(),
    identity_key: Joi.number().integer(),
    status: Joi.number().integer().required(),
    start_date: Joi.date().allow('', null),
    end_date: Joi.date()
      .allow('', null)
      .ruleset.greater(Joi.ref('start_date'))
      .rule({ message: 'End Date must be greater than Start Date' }),
    group: Joi.string().required(),
    dynamic_css: Joi.string(),
    endpoint_url: Joi.string().when('banner_type', { is: 2, then: Joi.required() }),
    endpoint_token: Joi.string()
      .when('endpoint_tokentype', { is: 2, then: Joi.required() })
      .when('endpoint_tokentype', { is: 1, then: Joi.string().allow(null) }),
    endpoint_tokentype: Joi.string().when('banner_type', { is: 2, then: Joi.required() }),
    endpoint_type: Joi.string().when('banner_type', { is: 2, then: Joi.required() }),
    username: Joi.optional()
      .when('endpoint_tokentype', { is: 1, then: Joi.required() })
      .when('endpoint_tokentype', { is: 2, then: Joi.optional().allow(null, '') }),
    password: Joi.optional()
      .when('endpoint_tokentype', { is: 1, then: Joi.required() })
      .when('endpoint_tokentype', { is: 2, then: Joi.optional().allow(null, '') }),
  }),
};

const findall = {
  query: Joi.object().keys({
    page_size: Joi.number().integer(),
    page_no: Joi.number().integer(),
    search: Joi.string().allow('', null),
    type: Joi.string().allow('', null),
    status: Joi.string().allow('', null),
  }),
};

module.exports = {
  getId,
  create,
  update,
  findall,
};

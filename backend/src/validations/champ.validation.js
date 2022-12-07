const Joi = require('joi');

const getSlug = {
  params: Joi.object().keys({
    slug: Joi.string(),
  }),
};
const getId = {
  params: Joi.object().keys({
    id: Joi.number().integer(),
  }),
};

const update = async (req, res) => {
  if (!req.body.item?.blocks.id) {
    let data = {
      params: Joi.object().keys({
        id: Joi.number().integer(),
      }),
      blocks: Joi.array().items({
        block_name: Joi.string().required(),
        block_order: Joi.number().integer().allow(null, ''),
        block_icon: Joi.string().required(),
        status: Joi.boolean().required(),
        card: Joi.number().integer().required().allow(null),
        show_header: Joi.boolean().required(),
        layout_size: Joi.number().integer().required(),
        block_detial: Joi.string().allow(null, ''),
        block_detial_json: Joi.alternatives().try(Joi.object(), Joi.array(), Joi.string()).allow(null, ''),
        championid: Joi.number().integer().required(),
      }),
    };
    return data;
  } else {
    let data = {
      params: Joi.object().keys({
        id: Joi.number().integer(),
      }),
      body: Joi.object().keys({
        id: Joi.number().integer().required(),
        name: Joi.string().required(),
        slug: Joi.string().required(),
        icon_image: Joi.string().required(),
        short_description: Joi.string().required(),
        is_active: Joi.boolean(),
        script_dynamic: Joi.string().allow(null, ''),
        is_link: Joi.number().integer().required(),
        link_page: Joi.string().allow(null, ''),
        page_type: Joi.number().integer().required(),
        order: Joi.number().integer().required(),
        group: Joi.string().required(),
        blocks: Joi.array().items({
          id: Joi.number().integer().required(),
          block_name: Joi.string().required(),
          block_order: Joi.number().integer().allow(null, ''),
          block_icon: Joi.string().required(),
          status: Joi.boolean().required(),
          card: Joi.number().integer().required().allow(null),
          show_header: Joi.boolean().required(),
          layout_size: Joi.number().integer().required(),
          block_detial: Joi.string().allow(null, ''),
          block_detial_json: Joi.alternatives().try(Joi.object(), Joi.array(), Joi.string()).allow(null, ''),
          championid: Joi.number().integer().required(),
        }),
      }),
    };
    return data;
  }
};

const createnew = async (req, res) => {
  if (req.body.is_link === 2 && req.body.page_type === 1) {
    let data = {
      body: Joi.object().keys({
        name: Joi.string().required(),
        icon_image: Joi.string().required(),
        short_description: Joi.string().required(),
        is_active: Joi.boolean(),
        is_link: Joi.number().integer().required(),
        link_page: Joi.string().required(),
        page_type: Joi.number().integer().required(),
        order: Joi.number().integer(),
        group: Joi.string().required(),
      }),
    };
    return data;
  } else if (req.body.is_link === 1 && req.body.page_type === 1) {
    const demo = {
      body: Joi.object().keys({
        name: Joi.string().required(),
        slug: Joi.string().required(),
        icon_image: Joi.string().required(),
        short_description: Joi.string().required(),
        is_active: Joi.boolean(),
        script_dynamic: Joi.string().allow(null, ''),
        is_link: Joi.number().integer().required(),
        link_page: Joi.string().allow(null, ''),
        page_type: Joi.number().integer().required(),
        order: Joi.number().integer().required(),
        group: Joi.string().required(),
        blocks: Joi.array().items({
          block_name: Joi.string().required(),
          block_order: Joi.number().integer().allow(null),
          block_icon: Joi.string().required(),
          status: Joi.boolean().required(),
          card: Joi.number().integer().allow(null),
          show_header: Joi.boolean().required(),
          layout_size: Joi.number().integer().required(),
          block_detial: Joi.string().allow(null, ''),
          block_detial_json: Joi.alternatives().try(Joi.object(), Joi.array()).allow(null, ''),
        }),
      }),
    };
    return demo;
  } else {
    const demos = {
      body: Joi.object().keys({
        name: Joi.string().required(),
        slug: Joi.string().required(),
        is_active: Joi.boolean(),
        page_type: Joi.number().integer().required(),
        group: Joi.string().required(),
        blocks: Joi.array().items({
          block_name: Joi.string().required(),
          block_order: Joi.number().integer().allow(null),
          block_icon: Joi.string().required(),
          card: Joi.number().integer().allow(null),
          status: Joi.boolean().required(),
          show_header: Joi.boolean().required(),
          layout_size: Joi.number().integer().required(),
          block_detial: Joi.string().allow(null, ''),
          block_detial_json: Joi.alternatives().try(Joi.object(), Joi.array()).allow(null, ''),
        }),
      }),
    };
    return demos;
  }
};

const findall = {
  query: Joi.object().keys({
    page_size: Joi.number().integer(),
    page_no: Joi.number().integer(),
    search: Joi.string().allow(null, ''),
    type: Joi.string().allow(null, ''),
    status: Joi.string().allow(null, ''),
    page_type: Joi.string().allow(null, ''),
  }),
};

module.exports = {
  getId,
  update,
  findall,
  createnew,
  getSlug,
};

const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require('../../models/index');
const { champService } = require('../services');

const create = async (req, res) => {
  try {
    if (req.jwt.claims.groups.includes(req.body.group)) {
      if (req.body.slug) {
        const slugExist = await champService.slugExist(req.body.slug);

        if (slugExist) {
          res.status(409).send({ status: false, message: 'Slug Already Exist' });
          return;
        }
        req.body.blocks.forEach((item, index) => {
          if (item?.block_detial_json) {
            req.body.blocks[index].block_detial_json = JSON.stringify(req.body.blocks[index].block_detial_json);
          }
        });
      }
      const data = champService.createone(req.body);
      res.send({ status: true, message: 'Champions succesfully created', data });
    } else {
      res.status(401).send({ message: 'unauthorized' });
    }
  } catch (err) {
    res.status(500).send({ status: false, message: err?.message });
  }
};

const GetId = async (req, res) => {
  try {
    const data = await champService.getById(req.params.id);
    if (!data) {
      res.status(404).send({ status: false, message: 'Champion Data not found' });
      return;
    }
    data.blocks.forEach((item, index) => {
      if (item?.block_detial_json) {
        data.blocks[index].block_detial_json = JSON.parse(data.blocks[index].block_detial_json);
      }
    });
    res.status(200).send({ status: true, data });
  } catch (err) {
    res.status(500).send({ status: false, message: err?.message });
  }
};

const GetSlug = async (req, res) => {
  try {
    const data = await champService.getBySlug(req.params.slug);
    if (!data) {
      res.status(404).send({ status: false, message: 'Champion Data not found' });
      return;
    }
    data.blocks.forEach((item, index) => {
      if (item?.block_detial_json) {
        data.blocks[index].block_detial_json = JSON.parse(data.blocks[index].block_detial_json);
      }
    });
    res.status(200).send({ status: true, data });
  } catch (err) {
    res.status(500).send({ status: false, message: err?.message });
  }
};

const UpdateById = async (req, res) => {
  try {
    if (req.jwt.claims.groups.includes(req.body.group)) {
      if (req.body.is_link == 1) {
        const slugExist = await champService.slugExist(req.body.slug, req.params.id);
        if (slugExist && req.params.id) {
          res.status(409).send({ status: false, message: 'Slug Already Exist' });
          return;
        }
      }
      const dataget = await champService.getById(req.params.id);
      if (!dataget) {
        res.status(404).send({ status: false, message: 'Champion Data not found' });
        return;
      }
      if (dataget.group == req.body.group) {
        const data = await champService.updateById(req.params.id, req.body);
        res.status(200).send({ message: 'Champion updated successfully' });
      } else {
        res.status(500).send({ message: 'Something went wrong' });
      }
    } else {
      res.status(401).send({ message: 'unauthorized' });
    }
  } catch (err) {
    res.status(500).send({ status: false, message: err?.message });
  }
};

const drop = async (req, res) => {
  try {
    const dataget = await champService.getById(req.params.id);

    if (dataget?.group && req.jwt.claims.groups.includes(dataget.group)) {
      const data = await champService.dropId(req.params.id);
      if (!data) {
        res.status(404).send({ status: false, message: 'Champion not Found' });
        return;
      }
      res.status(200).send({ status: true, message: 'Champion deleted successfully' });
    } else {
      res.status(200).send({ status: true, message: 'Unauthorized' });
    }
  } catch (err) {
    res.status(500).send({ status: false, message: err?.message });
  }
};

const findAll = async (req, res) => {
  try {
    const champions = await champService.getAll(req.body);
    if (!champions) {
      res.status(404).send({ status: false, message: 'Champion Data not found' });
      return;
    }
    res.status(200).send({ champions });
  } catch (err) {
    res.status(500).send({ status: false, message: err?.message });
  }
};

const findAllSecure = async (req, res) => {
  const { page_no = 1, page_size: limit = 10, search, type, status, page_type } = req.query;
  let condition = null;
  let fsearch = [];

  fsearch.push({ group: { [Op.in]: req.jwt.claims.groups } });

  if (search) {
    fsearch.push({ name: { [Op.iLike]: `%${search}%` } });
  }
  if (type) {
    fsearch.push({ is_link: `${type}` });
  }
  if (status) {
    fsearch.push({ is_active: `${status}` });
  }
  if (page_type) {
    fsearch.push({ page_type: `${page_type}` });
  }

  if (fsearch.length > 0) {
    condition = {
      [Op.and]: fsearch,
    };
  }
  const offset = (page_no - 1) * limit;
  db.champion
    .findAndCountAll({ where: condition, order: [['updatedAt', 'DESC']], limit, offset })
    .then((data) => {
      const { count: totalchampions, rows: champions } = data;
      const totalPageCount = Math.ceil(totalchampions / limit);
      res.send({ totalchampions, totalPageCount, page_no, page_size: limit, champions });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving champions.',
      });
    });
};

module.exports = {
  GetId,
  GetSlug,
  UpdateById,
  drop,
  findAllSecure,
  create,
  findAll,
};

const db = require('../../models/index');

const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const createone = async (updatebody) => {
  const demo = await db.champion.create(updatebody, { include: [{ model: db.block, as: 'blocks' }] });
  return demo;
};

const getById = async (id) => {
  return db.champion.findOne({
    where: { id },
    include: [{ model: db.block }],
  });
};

const getAll = async (data) => {
  return db.champion.findAll({
    where: { is_active: true, page_type: 1 },
  });
};

const getBySlug = async (slug) => {
  return db.champion.findOne({
    where: { slug },
    include: [{ model: db.block }],
  });
};

const updateById = async (id, updateBody) => {
  const demo = await db.champion.update(updateBody, { where: { id } }).then((demo) => {
    if (demo) {
      updateBody.blocks.forEach((item, index) => {
        if (item) {
          if (item.id) {
            if (item?.block_detial_json) {
              updateBody.blocks[index].block_detial_json = JSON.stringify(updateBody.blocks[index].block_detial_json);
            }
            const demos = db.block.update(updateBody.blocks[index], { where: { championid: id, id: item.id } });
            return demos;
          } else {
            if (item?.block_detial_json) {
              updateBody.blocks[index].block_detial_json = JSON.stringify(updateBody.blocks[index].block_detial_json);
            }
            updateBody.blocks[index]['championid'] = id;
            const data = db.block.create(updateBody.blocks[index]);
            return data;
          }
        }
      });
    }
  });
};

const dropId = async (id) => {
  return db.champion.destroy({ where: { id } });
};

const slugExist = async (slug, id = 0) => {
  fsearch = [{ slug }];
  if (id) {
    fsearch.push({ id: { [Op.ne]: `${id}` } });
  }
  condition = {
    [Op.and]: fsearch,
  };
  const data = await db.champion.count({ where: condition });
  return data ? true : false;
};

module.exports = {
  getById,
  getBySlug,
  updateById,
  dropId,
  slugExist,
  createone,
  getAll,
};

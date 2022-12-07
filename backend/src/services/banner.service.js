const Sequelize = require('sequelize');
const db = require('../../models/index');

const { Op } = Sequelize;

const create = async (data) => {
  return db.banners.create(data);
};

const updateById = async (id, updateBody) => {
  return db.banners.update(updateBody, { where: { id } });
};

const getById = async (id) => {
  return db.banners.findByPk(id);
};

const getAll = async () => {
  const currentDate = new Date();
  return db.banners.findAll({
    where: {
      [Op.and]: [
        {
          status: { [Op.eq]: 1 },
        },
        {
          [Op.or]: [
            {
              [Op.and]: [
                {
                  start_date: {
                    [Op.and]: {
                      [Op.lte]: currentDate,
                    },
                  },
                  end_date: {
                    [Op.and]: {
                      [Op.gte]: currentDate,
                    },
                  },
                },
              ],
            },
            {
              [Op.and]: [
                {
                  start_date: {
                    [Op.and]: {
                      [Op.eq]: null,
                    },
                  },
                  end_date: {
                    [Op.and]: {
                      [Op.eq]: null,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  });
};

const getall = async () => {
  return db.banners.findAll({ order: [['order_number', 'asc']] });
};

const dropId = async (id) => {
  return db.banners.destroy({ where: { id } });
};

module.exports = {
  create,
  updateById,
  getById,
  getall,
  dropId,
  getAll,
};

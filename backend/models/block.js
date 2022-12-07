'use strict';

module.exports = function (sequelize, DataTypes) {
  const block = sequelize.define(
    'block',
    {
      block_name: DataTypes.STRING,
      block_order: DataTypes.INTEGER,
      block_icon: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      card: DataTypes.INTEGER,
      show_header: DataTypes.BOOLEAN,
      layout_size: DataTypes.INTEGER,
      block_detial: DataTypes.TEXT,
      block_detial_json: DataTypes.TEXT,
      championid: {
        type: DataTypes.INTEGER,
        references: {
          model: 'champion',
          key: 'id',
        },
      },
    },
    {
      timestamps: true,
    }
  );
  block.associate = function (models) {
    block.belongsTo(models.champion, { foreignKey: 'id', target_key: 'championid' });
  };
  return block;
};

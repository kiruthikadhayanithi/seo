'use strict';
module.exports = function (sequelize, DataTypes) {
  const champion = sequelize.define(
    'champion',
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      icon_image: DataTypes.STRING,
      short_description: DataTypes.TEXT,
      is_active: DataTypes.BOOLEAN,
      is_link: DataTypes.INTEGER,
      link_page: DataTypes.STRING,
      script_dynamic: DataTypes.TEXT,
      page_type: DataTypes.INTEGER,
      order: DataTypes.INTEGER,
      group: DataTypes.STRING,
    },
    {
      timestamps: true,
    }
  );
  champion.associate = function (models) {
    champion.hasMany(models.block, { foreignKey: 'championid' });
  };
  return champion;
};

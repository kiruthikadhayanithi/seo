'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  banners.init(
    {
      name: DataTypes.STRING,
      banner_type: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      background_image: DataTypes.STRING,
      order_number: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      group: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      endpoint_url: DataTypes.STRING,
      endpoint_type: DataTypes.STRING,
      endpoint_token: DataTypes.STRING,
      endpoint_tokentype: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'banners',
    }
  );
  return banners;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      location.belongsTo(models.country)
      location.hasMany(models.department)
    }
  };
  location.init({
    street_address: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state_province: DataTypes.STRING,
    countryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'location',
  });
  return location;
};
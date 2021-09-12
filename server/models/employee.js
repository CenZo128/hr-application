'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employee.belongsTo(models.department)
      employee.belongsTo(models.job)
      employee.hasMany(models.dependent)
    }
  };
  employee.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    hire_date: DataTypes.DATE,
    jobId: DataTypes.INTEGER,
    salary: DataTypes.INTEGER,
    role: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    departmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};
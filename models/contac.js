'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contac = sequelize.define('Contac', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Contac.associate = function(models) {
    // associations can be defined here
  };
  return Contac;
};
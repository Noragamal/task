'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.bought,{
      foreignKey:'CustomerId',
      as:'bought',
      onDelete: 'CASCADE',


    });
  };
  return Customer;
};
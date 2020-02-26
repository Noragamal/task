'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bought = sequelize.define('Bought', {
    ProductId: sequelize.INTEGER,
    CustomerId: sequelize.INTEGER,
    Time_range: {
      Start_date: sequelize.Date,
      End_date: sequelize.Date
  }

  }, {});
  Bought.associate = function(models) {
    // associations can be defined here
    Bought.belongsTo(models.Customer, {
      foreignKey: 'CustomerId',
      as: 'buyer',
      onDelete: 'CASCADE',
    });
    Bought.belongsTo(models.Product, {
      foreignKey: 'ProductId',
      as: 'boughtprod',
      onDelete: 'CASCADE',
    });
    
  
  };
  return Bought;
};
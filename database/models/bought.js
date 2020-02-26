const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Bought = sequelize.define('bought', {
   // "productID": sequelize.INTEGER,
    //"customerID": sequelize.INTEGER,
    Time_range:[ {
      Start_date: Sequelize.Start_date,End_date: Sequelize.End_date
  }]

  }, {});
  Bought.associate = function(models) {
    // associations can be defined here
    Bought.belongsTo(models.customer, {
      foreignKey: 'customerID',
      as: 'buyer',
      onDelete: 'CASCADE',
    });
    Bought.hasMany(models.product, {
      foreignKey: 'productID',
      as: 'boughtprod',
      onDelete: 'CASCADE',
    });
    
  
  };
  return Bought;
};
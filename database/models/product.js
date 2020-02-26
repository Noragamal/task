'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    Type: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.bought,{
      foreignKey:'ProductId',
      as:'bought',
      onDelete: 'CASCADE',


    });
  
  };
  return Product;
};
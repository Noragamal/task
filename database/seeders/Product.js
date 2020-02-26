var faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Product',
    [
      {
        Type: "bakery"
        //Type: faker.commerce.productName()
        
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Product', null, {}),
};
var faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Customer',
    [
      {
        Name: 'ahmed',
        "Phone ": 01234567834 ,
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Customer', null, {}),
};
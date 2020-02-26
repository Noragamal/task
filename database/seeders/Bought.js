var faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'bought',
    [
      {
        
          customerID: 1,
          productID: 1,
          //product_type: "X",
             //   Time_range: {
                  //  Start_date: faker.date.Start_date(),
                    //End_date: faker.date.End_date()
               // }

        
        
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('bought', null, {}),
};
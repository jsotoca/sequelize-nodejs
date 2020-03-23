'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacs',[{
      firstname:'antonio',
      lastname:'kiara',
      phone:'1234566',
      email:'dfg@gmail.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      firstname:'malena',
      lastname:'zurita',
      phone:'245645456',
      email:'56@gmail.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

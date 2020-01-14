'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
     return queryInterface.bulkInsert('Labels', [{
        label: 'Romance' 
      },
      {label: 'Martial Art'},
      {label: 'Comeback"s Real'},
      {label: 'Comedy'},
      {label: 'Magic'},
      {label: 'Kultivasi'},
      {label: 'School'},
      {label: 'Echi'},
      {label: 'Harem'},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Labels', null, {});

  }
};

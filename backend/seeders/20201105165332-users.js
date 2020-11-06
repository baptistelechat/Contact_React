'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    function users() {
      let users = []
      for (let i = 0; i < 50; i++) {
        let book={
          firstName:faker.name.firstName(),
          lastName:faker.name.lastName(),
          email:faker.internet.email(),
          createdAt: new Date(),
          updatedAt: new Date()
        } 
        users.push(book) 
      }
      return users
    }

     await queryInterface.bulkInsert('Users', users(), {});

    

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};

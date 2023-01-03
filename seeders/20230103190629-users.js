"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "user1",
          email: "user1@users.com.br",
          password: "user1-1234567",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          username: "user2",
          email: "user2@users.com.br",
          password: "user2-1234567",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          username: "user3",
          email: "user3@users.com.br",
          password: "user3-1234567",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          username: "user4",
          email: "user4@users.com.br",
          password: "user1-1234567",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.dropTable("users");
  }
};

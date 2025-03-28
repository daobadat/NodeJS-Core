'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('languages', [
      {
        name: 'English',
        locale: 'en',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Vietnamese',
        locale: 'vi',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'French',
        locale: 'fr',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Spanish',
        locale: 'es',
        is_active: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'German',
        locale: 'de',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('languages', null, {});
  }
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('settings', [
      {
        user_id: 1,
        settings: JSON.stringify({
          theme: 'dark',
          notifications: true,
          language: 'vi'
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        settings: JSON.stringify({
          theme: 'light',
          notifications: false,
          language: 'en'
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        settings: JSON.stringify({
          theme: 'dark',
          notifications: true,
          language: 'fr'
        }),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('settings', null, {});
  }
};

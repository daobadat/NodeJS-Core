'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_media', [
      {
        user_id: 1,
        media_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        media_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        media_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        media_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_media', null, {});
  }
};

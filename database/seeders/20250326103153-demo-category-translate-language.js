'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Category_Translate_Languages', [
      {
        category_id: 1,
        language_id: 1,
        name: 'Technology',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        language_id: 2,
        name: 'Công nghệ',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2,
        language_id: 1,
        name: 'Health',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2,
        language_id: 2,
        name: 'Sức khỏe',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Category_Translate_Languages', null, {});
  }
};

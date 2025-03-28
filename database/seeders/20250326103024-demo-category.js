'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('category', [
      {
        name: 'Công nghệ',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Giáo dục',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Sức khỏe',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Thể thao',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Giải trí',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('category', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: '$2b$10$abcdefghijklmnopqrstuv', // Giả sử đã mã hóa bcrypt
        email: 'admin@example.com',
        role_id: 1,
        description: 'Quản trị viên hệ thống',
        theme_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        is_active: true
      },
      {
        username: 'user1',
        password: '$2b$10$xyzabcdefghijklmnopqrstuv', // Giả sử đã mã hóa bcrypt
        email: 'user1@example.com',
        role_id: 2,
        description: 'Người dùng thông thường',
        theme_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        is_active: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

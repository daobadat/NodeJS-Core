'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('comments', [
      {
        post_id: 1,
        user_id: 1,
        content: 'Bài viết rất hay, cảm ơn bạn!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: 1,
        user_id: 2,
        content: 'Mình thấy bài viết này rất hữu ích!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: 2,
        user_id: 3,
        content: 'Bạn có thể bổ sung thêm thông tin không?',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments', null, {});
  }
};

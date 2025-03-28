'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [
      {
        user_id: 1,
        category_id: 1,
        title: 'Bài viết đầu tiên',
        content: 'Nội dung bài viết đầu tiên...',
        description: 'Mô tả bài viết đầu tiên...',
        slug: 'bai-viet-dau-tien',
        id_post_original: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        category_id: 2,
        title: 'Bài viết thứ hai',
        content: 'Nội dung bài viết thứ hai...',
        description: 'Mô tả bài viết thứ hai...',
        slug: 'bai-viet-thu-hai',
        id_post_original: null,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};

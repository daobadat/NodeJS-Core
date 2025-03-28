'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('postTranslateLanguages', [
      {
        post_id: 1,
        language_id: 1,
        title: 'Introduction to AI',
        content: 'Artificial Intelligence is transforming the world...',
        description: 'A basic introduction to AI and its applications.',
        is_original: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: 1,
        language_id: 2,
        title: 'Giới thiệu về AI',
        content: 'Trí tuệ nhân tạo đang thay đổi thế giới...',
        description: 'Giới thiệu cơ bản về AI và các ứng dụng của nó.',
        is_original: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: 2,
        language_id: 1,
        title: 'Machine Learning Basics',
        content: 'Machine Learning is a subset of AI that allows...',
        description: 'Understanding machine learning fundamentals.',
        is_original: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('postTranslateLanguages', null, {});
  }
};

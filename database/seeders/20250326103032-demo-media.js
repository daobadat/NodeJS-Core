'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('media', [
      {
        name: 'Ảnh mẫu 1',
        url: 'https://example.com/image1.jpg',
        type: 'image',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ảnh mẫu 2',
        url: 'https://example.com/image2.jpg',
        type: 'image',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Video giới thiệu',
        url: 'https://example.com/video1.mp4',
        type: 'video',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tài liệu PDF',
        url: 'https://example.com/document.pdf',
        type: 'document',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('media', null, {});
  }
};

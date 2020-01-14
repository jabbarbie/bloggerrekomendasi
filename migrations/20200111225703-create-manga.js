'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mangas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.TEXT
      },
      gambar: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      alternative_name: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      chapter: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      mc: {
        type: Sequelize.STRING
      },
      bookmark: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mangas');
  }
};
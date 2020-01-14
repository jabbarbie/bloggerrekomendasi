'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rekomendasis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artikelId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'posts',
          key: 'id'
        }
      },
      posisi: {
        type: Sequelize.INTEGER
      },
      mangaId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'mangas',
          key: 'id'
        }
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
    return queryInterface.dropTable('rekomendasis');
  }
};
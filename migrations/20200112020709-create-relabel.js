'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('relabels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      labelId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'labels',
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
    return queryInterface.dropTable('relabels');
  }
};
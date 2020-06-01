'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itensTrocas', {
      idTroca: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'trocas',
          },
          key: 'id',
        },
        idITem: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'trocas',
            },
            key: 'id',
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itens-trocas');
  }
};
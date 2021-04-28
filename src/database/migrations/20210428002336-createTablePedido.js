'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      id_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_seller: {
        type: Sequelize.STRING,
      },
      id_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accept: {
        type: Sequelize.BOOLEAN,
      },
      value: {
        type: Sequelize.DECIMAL(10, 2),
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('pedidos');
  }
};
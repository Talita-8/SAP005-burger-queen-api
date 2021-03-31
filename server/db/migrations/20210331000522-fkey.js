'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addConstraint('Orders',
      {
        fields: ['user_id'],
        type: 'foreign key',
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    ,
    queryInterface.addConstraint('ProductsOrders',
    {
      fields: ['order_id'],
      type: 'foreign key',
      references: {
        table: 'Orders',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    queryInterface.addConstraint('ProductsOrders',
    {
      fields: ['product_id'],
      type: 'foreign key',
      references: {
        table: 'Products',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    } catch (err) {
      await console.log("Houve algum erro: ", err)
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeConstraint('Orders',
    {
      fields: ['user_id'],
      type: 'foreign key',
      references: {
        table: 'User',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  ,
  await queryInterface.removeConstraint('ProductsOrders',
  {
    fields: ['order_id'],
    type: 'foreign key',
    references: {
      table: 'Orders',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }),
  await queryInterface.removeConstraint('ProductsOrders',
  {
    fields: ['product_id'],
    type: 'foreign key',
    references: {
      table: 'Products',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  })
    } catch(err) {
      await console.log('Houve um problema', err)
    }
  }
};

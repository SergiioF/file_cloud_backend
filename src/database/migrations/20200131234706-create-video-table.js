'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('video', { 
        id:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        link: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sub_box_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'sub_box', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('video');
    
  }
};


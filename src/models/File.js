const { Model, DataTypes } = require('sequelize');

class File extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            path: DataTypes.STRING,
            public_id: DataTypes.STRING,
            image_url: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'file',
        })
    }

    static associate(models){
        this.belongsTo(models.Box, { foreignKey: 'box_id', as: 'carpeta'});

    }
}

module.exports = File;
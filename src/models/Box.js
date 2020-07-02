const { Model, DataTypes } = require('sequelize');

class Box extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'box',
        })
    }
    static associate(models){
        this.hasMany(models.File, { foreignKey: 'box_id', as: 'archivos'});

    }
}

module.exports = Box;
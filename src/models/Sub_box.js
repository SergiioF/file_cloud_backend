const { Model, DataTypes } = require('sequelize');

class Sub_box extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'sub_box',
        })
    }
    static associate(models){
        this.hasMany(models.Video, { foreignKey: 'sub_box_id', as: 'videos'});

    }
}

module.exports = Sub_box;
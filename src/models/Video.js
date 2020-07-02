const { Model, DataTypes } = require('sequelize');

class Video extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            link: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'video',
        })
    }

    static associate(models){
        this.belongsTo(models.Sub_box, { foreignKey: 'sub_box_id', as: 'subcarpeta'});

    }
}

module.exports = Video;
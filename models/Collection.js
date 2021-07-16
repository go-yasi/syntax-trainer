const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collection extends Model {}

Collection.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    homepage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    snippet_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'snippet',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'collection'
  }
);

module.exports = Collection;

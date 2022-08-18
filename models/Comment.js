const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    comment_text: {
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
            }
    },
    post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'POST',
        key: 'id'
        }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);
module.exports = Comment;
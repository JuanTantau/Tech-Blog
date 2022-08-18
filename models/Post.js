// Post model
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
class Post extends Model {}

// fields/columns
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tiTle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[1]
      }
      },
      post_text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len:[1]
      }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
  );
  module.exports = Post;
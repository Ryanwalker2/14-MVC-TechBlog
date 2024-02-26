const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username',
            },
        },
        article_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'article',
                key: 'id',
            },
        },
        creationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            },
        },
    },
);

module.exports = Comment;
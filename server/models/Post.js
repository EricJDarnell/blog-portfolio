const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        unique: true
    },
    published: {
        type: DataTypes.BOOLEAN,
        defautValue: false
    },
    //consider other fields like tags, categories, etc.
});

module.exports = Post;
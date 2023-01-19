import { DataTypes } from 'sequelize';
import db from '../db.js';

const Post = db.define('Posts', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

export default Post;
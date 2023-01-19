import { DataTypes } from 'sequelize';
import db from '../db.js';

const Category = db.define('Categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

export default Category;
import Category from '../models/category.js';

const getAllCategories = async () => {
    const categories = await Category.findAll();

    return categories;
};

const getCategoryById = async (id) => {
    const category = await Category.findByPk(id);

    return category;
};

const createCategory = async (categoryData) => {
    try {
        const category = await Category.create(categoryData);

        return category;
    } catch (error) {
        return error;
    }
};

const deleteCategory = async (id) => {
    try {
        const category = await Category.destroy({
            where: {
                id: id,
            },
        });

        return category;
    } catch (error) {
        return error;
    }
};

const updateCategory = async (categoryData, id) => {
    try {
        await category.update(categoryData, {
            where: {
                id: id,
            },
        });

        const category = await Category.findByPk(id);

        return category;
    } catch (error) {
        return error;
    }
};

export default {
    getAllCategories,
    createCategory,
    deleteCategory,
    updateCategory,
    getCategoryById,
};
import categoriesRepository from '../repositories/categories.js';

export const getAllCategories = async (req, res) => {
    const categories = await categoriesRepository.getAllCategories();

    res.status(200).json({ categories });
};

export const getCategoryById = async (req, res) => {
    const category = await categoriesRepository.getcategoryById(req.params.id);

    res.json({ category });
}

export const createCategory = async (req, res) => {
    try {
        const category = await categoriesRepository.createCategory(req.body);

        res.json({ category });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const category = categoriesRepository.deleteCategory(req.params.id)

        res.json({ category });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const category = await categoriesRepository.updateCategory(req.body, req.params.id);

        res.json({ category });
    } catch (error) {
        res.status(500).json({ error });
    }
}
import { Router } from 'express';
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from '../controllers/categories.js';

const categoryRoutes = Router();

categoryRoutes.get('/', getAllCategories);
categoryRoutes.get('/:id', getCategoryById);
categoryRoutes.post('/create', createCategory);
categoryRoutes.put('/:id', updateCategory);
categoryRoutes.delete('/:id', deleteCategory);

export default categoryRoutes;
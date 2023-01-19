import { Router } from 'express';
import {
    createPost,
    deletePost,
    getAllPosts,
    getPostById,
    updatePost,
} from '../controllers/posts.js';

const postRoutes = Router();

postRoutes.get('/', getAllPosts);
postRoutes.get('/:id', getPostById);
postRoutes.post('/create', createPost);
postRoutes.put('/:id', updatePost);
postRoutes.delete('/:id', deletePost);

export default postRoutes;
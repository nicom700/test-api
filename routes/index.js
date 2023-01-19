import { Router } from 'express'
import postsRoutes from './posts.js';
import categoriesRoutes from './categories.js';

const apiRoutes = Router();

apiRoutes.use('/posts', postsRoutes);
apiRoutes.use('/categories', categoriesRoutes);

export default apiRoutes;
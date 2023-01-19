import Category from '../models/category.js';
import Post from '../models/post.js';

const getAllPosts = async () => {
    const posts = await Post.findAll({
        include: Category
    });

    return posts;
};

const getPostById = async (id) => {
    const post = await Post.findByPk(id, {
        include: Category
    });

    return post;
};

const createPost = async (postData) => {
    try {
        const post = await Post.create(postData);    
        
        return post;
    } catch (error) {
        return error;
    }
};

const deletePost = async (id) => {
    try {
        const post = await Post.destroy({
            where: {
                id: id,
            },
        });

        return post;
    } catch (error) {
        return error;
    }
};

const updatePost = async (postData, id) => {
    try {
        await post.update(postData, {
            where: {
                id: id,
            },
        });

        const post = await Post.findByPk(id);

        return post;
    } catch (error) {
        return error;
    }
};

export default {
    getAllPosts,
    createPost,
    deletePost,
    updatePost,
    getPostById,
};
import postRepository from '../repositories/posts.js';

export const getAllPosts = async (req, res) => {
    const posts = await postRepository.getAllPosts();

    res.status(200).json({ posts });
};

export const getPostById = async (req, res) => {
    const post = await postRepository.getPostById(req.params.id);

    res.json({ post });
}

export const createPost = async (req, res) => {
    try {
        const post = await postRepository.createPost(req.body);

        res.json({ post });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = postRepository.deletePost(req.params.id)

        res.json({ post });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = await postRepository.updatePost(req.body, req.params.id);

        res.json({ post });
    } catch (error) {
        res.status(500).json({ error });
    }
}
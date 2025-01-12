const PostRepository = require('../models/PostRepository.js');

class PostController {
    // Método para listar todos os posts
    static async getAllPosts(req, res) {
        try {
            const posts = await PostRepository.findAll();
            res.json(posts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Método para adicionar um novo post
    static async createPost(req, res) {
        try {
            const post = await PostRepository.create(req.body);
            res.status(201).json(post);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Método para atualizar um post existente
    static async updatePost(req, res) {
        try {
            const updatedPost = await PostRepository.update(req.params.id, req.body);
            if (updatedPost) {
                res.json(updatedPost);
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Método para excluir um post existente
    static async deletePost(req, res) {
        try {
            const deletedPost = await PostRepository.delete(req.params.id);
            if (deletedPost) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}
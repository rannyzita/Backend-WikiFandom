const PostRepository = require('../models/PostRepository.js');
const knex = require('../db/connection.js')
const UsuarioRepository = require('../models/UsuarioRepository.js');
const ImagemRepository = require('../models/ImagemRepository.js');

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
    
    // encontrar um post especifico pelo id
    static async findByIdPost(req, res) {
        try {
            const post = await PostRepository.findById(req.params.id);
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Método para adicionar um novo post
    static async createPost(req, res) {
        try {
            const usuario = await UsuarioRepository.findById(req.body.id_usuario);

            if(!usuario) {
                res.status(404).json({ message: "Usuário não encontrado." });
                return;  // Evita que o restante da função seja executado se um erro ocorreu.
            }

            const imagem = await ImagemRepository.findById(req.body.id_imagem);

            if (!imagem) {
                res.status(404).json({ message: "Imagem não encontrada." });
                return;  // Evita que o restante da função seja executado se um erro ocorreu.
            }
            
            const post = await PostRepository.create(req.body);

            if(!post) {
                res.status(400).json({ message: "Está vazio." });
                return;  // Evita que o restante da função seja executado se um erro ocorreu.
            }
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
                res.status(200).json(updatedPost);
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

module.exports = PostController;
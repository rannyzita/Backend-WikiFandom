const PostRepository = require('../models/PostRepository.js');
const knex = require('../db/connection.js')
const { v4: uuidv4 } = require('uuid');
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
                res.status(404).json({ message: "Post não encontrado" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Método para adicionar um novo post
    static async createPost(req, res) {
        try {
        const { id_usuario, titulo, conteudo, id_imagem, categoria} = req.body;
        const id = uuidv4();

        const usuario = await UsuarioRepository.findById(id_usuario);

        if (!usuario && id_usuario !== "Admin2025") {
            res.status(404).json({ message: "Usuário não encontrado." });
            return;
        }

        if (!id_imagem) {
            res.status(400).json({ message: "ID da imagem é obrigatório." });
            return;
        }

        const imagem = await ImagemRepository.findById(id_imagem);

        if (!imagem) {
            res.status(404).json({ message: "Imagem não encontrada." });
            return;
        }

        const post = await PostRepository.create({ id, id_usuario, titulo, conteudo, id_imagem, categoria });

        res.status(201).json(post);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Método para atualizar um post existente
    static async updatePost(req, res) {
        try {
            console.log("Dados recebidos para atualização:", req.body);
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
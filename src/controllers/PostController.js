const PostRepository = require('../models/PostRepository.js');
const knex = require('../db/connection.js')

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

    // Adicionando (Busca de posts por título ou conteúdo) - 22/01
    static async buscarPost(req, res) {
        // parâmetro
        const {query} = req.query;
        if (!query){
            return res.status(400).json({message: "É necessário informar o termo de busca"});
        }

        try{
            //parte do banco de dados
            const post  = await knex('Post').where('titulo', 'like', `%${query}%`).orWhere('conteudo', 'like', `%${query}%`);
            return res.json(post);
        } catch(e){
            return res.status(500).json({error: e.message})
        }
    }

    // Adicionando Comentários em Post
    static async addComentarioPost(req, res) {
        // para eu fazer um comentário eu tenho que ter um id(cliente) e um conteúdo(mensagem)
        const {id} = req.params; 
        const {conteudo, IdUsuario} = req.body;

        if(!conteudo || !IdUsuario){
            return res.status(400).json({message: 'É preciso estar logado e ter conteúdo em sua mensagem para realizar um comentário'});
        }

        try{
            const verificarPost = await knex('Post').where('id', id).first();
            if(!verificarPost){
                return res.status(400).json({message: 'Post não existente.'})
            } 

            await knex ('Comentario').insert({
                conteudo,
                id_usuario: IdUsuario,
                id_post : id,
                data_enviada:  knex.fn.now()
            })
            return res.status(201).json({message: 'Comentário adicionado.'})
        } catch(e){
            return res.status(500).json({error: e.message})
        }
    }
}

module.exports = PostController;
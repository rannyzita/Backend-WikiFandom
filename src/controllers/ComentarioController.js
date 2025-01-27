const ComentarioRepository = require('../models/ComentarioRepository.js')

class ComentarioController {
    // Método para listar todos os comentarios
    static async getAllComentarios(req, res) {
        try {
            const comentarios = await ComentarioRepository.findAll();
            res.json(comentarios);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getAllComentarioById(req, res) {
        try {
            const comentario = await ComentarioRepository.findAllByPostId(req.params.id);
            if (comentario) {
                res.json(comentario);
            } else {
                res.status(404).json({ message: 'Comment not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message});
        }
    }

    static async createComentario(req, res) {
        try {
            const { id_post, conteudo, id_usuario } = req.body;
    
            if (!id_post || typeof id_post !== 'string') {
                return res.status(400).json({ message: 'ID do post é obrigatório e deve ser uma string.' });
            }
    
            if (!conteudo || typeof conteudo !== 'string') {
                return res.status(400).json({ message: 'Conteudo do comentário é obrigatório e deve ser uma string.' });
            }

            if (!id_usuario || typeof id_usuario !== 'string') {
                return res.status(400).json({ message: 'id do usuário é obrigatório e deve ser uma string.' });
            }
    
            const newComentario = await ComentarioRepository.create({ id_post, conteudo, id_usuario});
            res.status(201).json(newComentario);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deleteComentario(req, res) {
        try {
            const deletedComentario = await ComentarioRepository.delete(req.params.id);
            if (deletedComentario) {
                // status 204 indica que algo foi realizada
                // mas sem retorno de algo
                res.status(204).end();
            } else {
                res.status(404).json({ message: 'Comment not found'});
            }
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    }
}

module.exports = ComentarioController;
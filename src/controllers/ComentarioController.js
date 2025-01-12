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
            const newComentario = await ComentarioRepository.create(req.body);
            res.status(201).json(newComentario);
        } catch (err) {
            res.status(500).json({ error: err.message});
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
const FavoritoRepository = require('../models/FavoritoRepository.js');
const { v4: uuidv4 } = require('uuid');

class PostFavoritoController {
        static async getAllFavoritosByUserId(req, res) {
            try {
                const favoritos = await FavoritoRepository.findAllByUserId(req.params.id);
                if (favoritos) {
                    res.json(favoritos);
                } else {
                    res.status(404).json({ message: 'Favorites not found' });
                }
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }

        static async createPostFavorito(req, res) {
            try {
                const favorito = await FavoritoRepository.create({
                    // ADICIONAR VERIFICAÇÃO DE ENTRADA
                    id: uuidv4(),
                    id_usuario: req.body.id_usuario,
                    id_post: req.body.id_post
                });
                res.status(201).json(favorito);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }

        static async deletePostFavorito(req, res) {
            try {
                const deletedFavorito = await FavoritoRepository.delete(req.body.id_usuario, req.body.id_post);
                if (deletedFavorito) {
                    res.status(204).send();
                } else {
                    res.status(404).json({ message: 'Favorite not found' });
                }
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
}

module.exports = PostFavoritoController;